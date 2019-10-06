const { Router } = require('express');
const { auth, create } = require('./controller');
const contracts = require('./contract');
const validator = require('../../middlewares/validator');
const checkPermission = require('../../middlewares/checkPermission');
const authM = require('../../middlewares/auth');

module.exports = () => {
  const router = Router();

  router.post('/auth', validator(contracts.auth, 'body'), auth);

  router.post('/create', authM, checkPermission, validator(contracts.create, 'body'), create);

  return { router, endpoint: '/user' };
};
