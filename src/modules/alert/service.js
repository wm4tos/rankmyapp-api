const { create: createAlert } = require('./repository');

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

module.exports = {
  create,
};
