const { Router } = require('express');
const { auth } = require('./controller');
const contracts = require('./contract');
const validator = require('../../middlewares/validator');

module.exports = () => {
  const router = Router();

  router.post('/auth', validator(contracts.auth, 'body'), auth);

  return { router, endpoint: '/user' };
};
