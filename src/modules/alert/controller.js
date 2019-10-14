const { create, findAll } = require('./service');

/**
 * @description Ask for an alert to a user.
 */
const createAlert = async (req, res, next) => {
  try {
    const { body } = req;
    const alert = await create(body);

    res.status(200).json(alert);
  } catch (error) {
    next(error);
  }
};

const getAlerts = async (req, res, next) => {
  try {
    const alerts = await findAll();

    res.status(200).json(alerts);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAlert,
  getAlerts,
};
