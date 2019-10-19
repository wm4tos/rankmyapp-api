const {
  create: createAlert, findAll: find, remove: removeAlert, update: updateAlert,
} = require('./repository');

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

/**
 * @description Remove alert.
 * @param {String} _id
 */
const remove = async (_id) => {
  try {
    await removeAlert(_id);
  } catch (error) {
    throw error;
  }
};

const update = async (_id, data) => {
  try {
    const alert = await updateAlert(_id, data);

    return alert;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create,
  findAll,
  remove,
  update,
};
