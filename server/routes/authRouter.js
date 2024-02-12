const { Router } = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');
const generateTokens = require('../utils/generateTokens');
const cookiesConfig = require('../config/cookiesConfig');
const verifyRefreshToken = require('../middlewares/verifyRefreshToken');

const router = Router();

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

module.exports = router;
