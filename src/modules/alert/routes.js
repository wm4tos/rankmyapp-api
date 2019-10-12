const { Router } = require('express');
const { createAlert } = require('./controller');
const contracts = require('./contract');
const validator = require('../../middlewares/validator');

module.exports = () => {
  const router = Router();

  router.post('/create', validator(contracts.create, 'body'), createAlert);

  return { router, endpoint: '/alert' };
};
