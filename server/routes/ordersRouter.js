const { Router } = require('express');
const { Order } = require('../db/models');
const { Service } = require('../db/models');

const router = Router();

router.route('/').get(async (req, res) => {
  try {
    const orders = await Order.findAll();
    return res.json(orders);
  } catch (error) {
    return res.sendStatus(500);
  }
});
// .post(async (req, res) => {
//   try {
//     const order = await Order.create(req.body);
//     return res.json(order);
//   } catch (error) {
//     return res.sendStatus(500);
//   }
// });

router.post('/', async (req, res) => {
  try {
    const { name, phone, email, ...serviceData } = req.body;

    const order = await Order.create({
      name,
      phone,
      email,
    });

    const service = await Service.create({
      ...serviceData,
      order_id: order.id,
    });
    return res.status(200).json({order, service});
  } catch (error) {
    console.error('Error creating order:', error);
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
