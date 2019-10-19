const { Router } = require('express');
const {
  createAlert, getAlerts, removeAlert, updateAlert,
} = require('./controller');
const contracts = require('./contract');
const validator = require('../../middlewares/validator');
const auth = require('../../middlewares/auth');

module.exports = () => {
  const router = Router();

  router.use(auth);

  router.post('/create', validator(contracts.create, 'body'), createAlert);

  router.get('/', getAlerts);

  router.put('/:_id', validator(contracts.update, 'body'), updateAlert);

  router.delete('/:_id', removeAlert);

  return { router, endpoint: '/alert' };
};
