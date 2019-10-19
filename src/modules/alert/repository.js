const { Types: { ObjectId } } = require('mongoose');
const Alert = require('./model');
const { transformInJSON } = require('../../helpers/mongoose');

/**
 * @description Save alert on DB.
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

/**
 * @description Update alert on DB.
 * @param {String} _id
 * @param {Object} data Alert modified.
 */
const update = async (_id, data) => {
  try {
    await Alert.updateOne({ _id: ObjectId(_id) }, data);

    const alert = await Alert.findOne({ _id: ObjectId(_id) });

    return transformInJSON(alert);
  } catch (error) {
    throw error;
  }
};

/**
 * @description Remove alert from DB.
 * @param {String} _id
 */
const remove = async (_id) => {
  try {
    await Alert.deleteOne({ _id: ObjectId(_id) });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create,
  findByTime,
  findAll,
  remove,
  update,
};
