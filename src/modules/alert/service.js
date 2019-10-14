const { create: createAlert, findAll: find } = require('./repository');

/**
 * @description Save an alert to a user.
 * @param {{ email: string keywords: string time: string }} doc
 */
const create = async (doc) => {
  try {
    const alert = await createAlert(doc);

    return alert;
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
