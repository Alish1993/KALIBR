const { Router } = require('express');
const TelegramBot = require('node-telegram-bot-api');
const { Order } = require('../db/models');

const token = '6762356713:AAHwlJ-PAfwNHustJOIokMKBsmwoH6HHJSY';

const chatId1 = 5547151389;
const bot = new TelegramBot(token, { polling: true });
const now = new Date();
console.log(now.getFullYear(), now.getMonth(), now.getDate());
function sendAdminMessage(message) {
  bot.sendMessage(chatId1, message);
  console.log(message);
}

const router = Router();

router
  .route('/')
  .get(async (req, res) => {
    try {
      const orders = await Order.findAll();
      return res.json(orders);
    } catch (error) {
      return res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    try {
      const { name, email, phone } = req.body;
      const order = await Order.create({ name, email, phone });

      const message = `Новый заказ:${order.id} ${now} \nИмя  ${name},\nEmail   ${email},\nТелефон  ${phone}`;
      sendAdminMessage(message);
      res.status(201).json(order);
    } catch (error) {
      return res.sendStatus(500);
    }
  });

router
  .route('/:id')
  .delete(async (req, res) => {
    try {
      await Order.destroy({ where: { id: req.params.id } });
      return res.sendStatus(200);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  })
  .patch(async (req, res) => {
    try {
      const { id } = req.params;
      await Order.update(req.body, { where: { id } });
      const order = Order.findByPk(id);
      return res.json(order);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  });

module.exports = router;
