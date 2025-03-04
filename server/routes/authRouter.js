const fs = require('fs/promises');
const { Router } = require('express');
const bcrypt = require('bcrypt');
const sharp = require('sharp');
const { User } = require('../db/models');
const generateTokens = require('../utils/generateTokens');
const cookiesConfig = require('../config/cookiesConfig');
const verifyRefreshToken = require('../middlewares/verifyRefreshToken');
const upload = require('../middlewares/multer');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({ where: { isAdmin: false } });
    const plainUsers = users.map((user) => {
      const plainUser = user.get();
      delete plainUser.password;
      return plainUser;
    });
    return res.json(plainUsers);
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await User.destroy({ where: { id } });
    return res.sendStatus(200);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  const { username, email, password } = req.body;

  if (username && email && password) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { email },
        defaults: {
          username,
          password: await bcrypt.hash(password, 10),
          isAdmin: false,
        },
      });
      if (!created) {
        return res.status(403).json({ message: 'User already exists' });
      }
      const plainUser = user.get();
      delete plainUser.password;
      return res.status(200).json(plainUser);
    } catch (error) {
      console.log(error);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    try {
      const user = await User.findOne({
        where: { email },
      });

      if (!(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Incorrect password' });
      }

      const plainUser = user.get();
      delete plainUser.password;

      const { accessToken, refreshToken } = generateTokens({ user: plainUser });

      return res
        .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
        .status(200)
        .json({ accessToken, user: plainUser });
    } catch (e) {
      console.log(e);
      return res.sendStatus(500);
    }
  }
  return res.sendStatus(500);
});

router.get('/signout', (req, res) => {
  res.clearCookie('refreshToken').sendStatus(200);
});

router.get('/check', verifyRefreshToken, (req, res) => {
  res.json({ user: res.locals.user, accessToken: '' });
});

// multer
router.patch(
  '/avatar',
  verifyRefreshToken,
  upload.single('file'),
  async (req, res) => {
    try {
      // проверяем наличие файла
      if (!req.file) {
        return res.status(400).json({ message: 'File not found' });
      }

      if (!res.locals.user) return res.sendStatus(500);

      // создаем имя файла с расширением webp и привязкой к дате
      const name = `${Date.now()}.webp`;
      // создаем буфер с помощью sharp
      const outputBuffer = await sharp(req.file.buffer).webp().toBuffer();
      // создаем файл с помощью fs
      await fs.writeFile(`./public/img/${name}`, outputBuffer);
      // создаем пост в бд
      await User.update(
        { avatar: name },
        { where: { id: res.locals.user.id } },
      );
      const user = await User.findByPk(res.locals.user.id);
      // отправляем юзера
      return res.json(user);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: 'Server error' });
    }
  },
);

module.exports = router;
