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

module.exports = {
  create,
};
