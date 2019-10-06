const Joi = require('joi');

module.exports = {
  auth: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  },
};
