const { Router } = require('express');
const { createAlert, getAlerts } = require('./controller');
const contracts = require('./contract');
const validator = require('../../middlewares/validator');
const auth = require('../../middlewares/auth');

module.exports = () => {
  const router = Router();

  router.use(auth);

  router.post('/create', validator(contracts.create, 'body'), createAlert);

  router.get('/', getAlerts);

  return { router, endpoint: '/alert' };
};
