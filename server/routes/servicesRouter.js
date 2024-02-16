const { Router } = require('express');
const { Service } = require('../db/models');

const router = Router();

router.get('/', async (req, res) => {
  try {
    const services = await Service.findAll();
    return res.json(services);
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.post('/', async (req, res) => {
  try {
    const serviceFromCalculator = await Service.create(req.body);
    return res.json(serviceFromCalculator);
  } catch (error) {
    return res.sendStatus(500);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const service = await Service.findOne({ where: { id: req.params.id } });
    return res.json(service);
  } catch (error) {
    console.error(error);
    return res.sendStatus(500);
  }
});


module.exports = router;
