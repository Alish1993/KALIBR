/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
const { Router } = require('express');
const { OrderedService } = require('../db/models');

const router = Router();

router
  .route('/:orderId')
  .get(async (req, res) => {
    try {
      const { orderId } = req.params;
      const orederedServices = await OrderedService.findAll({
        where: { orderId },
      });
      return res.json(orederedServices);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    try {
      const { orderId } = req.params;
      const newOrderedServices = req.body.orederedServices;
      for (let i = 0; i < newOrderedServices.length; i++) {
        await OrderedService.create({ orderId, ...newOrderedServices[i] });
      }
      const orederedServices = await OrderedService.findAll({
        where: { orderId },
      });
      return res.json(orederedServices);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  })
  .patch(async (req, res) => {
    try {
      const { orderId } = req.params;
      const updatedOrderedServices = req.body.orederedServices;
      for (let i = 0; i < updatedOrderedServices.length; i++) {
        await OrderedService.update(
          { amount: updatedOrderedServices[i].amount },
          {
            where: { orderId, serviceId: updatedOrderedServices[i].serviceId },
          },
        );
      }
      const orederedServices = await OrderedService.findAll({
        where: { orderId },
      });
      return res.json(orederedServices);
    } catch (error) {
      console.error(error);
      return res.sendStatus(500);
    }
  });

module.exports = router;
