const Alert = require('./model');
const { transformInJSON } = require('../../helpers/mongoose');

/**
 * @description Save user on DB.
 * @param {{ email: string keywords: string time: number }} doc Alert to save in DB.
 */
const create = async (doc) => {
  try {
    const alert = new Alert(doc);

    await alert.save();

    return transformInJSON(alert);
  } catch (error) {
    throw error;
  }
};

/**
 * @description Search alert by time.
 * @param {String} time
 */
const findByTime = async (time) => {
  try {
    const alerts = await Alert.find({ time });

    return alerts;
  } catch (error) {
    throw error;
  }
};

/**
 * @description Get alerts.
 * @param {Object} query
 */
const findAll = async (query = {}) => {
  try {
    const alerts = await Alert.find(query);

    return alerts;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create,
  findByTime,
  findAll,
};
