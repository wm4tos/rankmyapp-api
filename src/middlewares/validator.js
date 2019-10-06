const Joi = require('joi');

module.exports = (schema, prop) => (req, res, next) => {
  const { error: validationError } = Joi.validate(req[prop], schema[prop]);

  if (!validationError) return next();

  const { details } = validationError;

  const error = {
    name: 'BAD_REQUEST',
    message: details.reduce((acc, cur) => `${acc}, ${cur.message}`, ''),
  };

  return next(error);
};
