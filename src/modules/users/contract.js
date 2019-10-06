const Joi = require('joi');

module.exports = {
  auth: {
    body: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  },
  create: {
    body: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      isAdmin: Joi.boolean().default(false),
    },
  },
};
