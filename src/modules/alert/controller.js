const { create } = require('./service');

/**
 * @description Ask for an alert to a user.
 */
const createAlert = async (req, res, next) => {
  try {
    const { body } = req;
    await create(body);

    res.status(200).json({ status: 200, message: 'Alert created successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAlert,
};
