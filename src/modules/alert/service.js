const { create: createAlert, findAll: find } = require('./repository');

/**
 * @description Save an alert to a user.
 * @param {{ email: string keywords: string time: string }} alert
 */
const create = async (alert) => {
  try {
    await createAlert(alert);

    return true;
  } catch (error) {
    throw error;
  }
};

/**
 * @description List all alerts.
 */
const findAll = async () => {
  try {
    const alerts = await find();

    return alerts;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create,
  findAll,
};
