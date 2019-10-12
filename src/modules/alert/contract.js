const Joi = require('joi');

module.exports = {
  create: {
    body: {
      email: Joi.string().email().required(),
      keywords: Joi.string().required(),
      time: Joi.string().valid('15s', '30s', '2m', '10m', '30m').required(),
    },
  },
};
