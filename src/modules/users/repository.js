const User = require('./model');
const { transformInJSON } = require('../../helpers/mongoose');

/**
 * @description Search user with his e-mail.
 * @param {string} email E-mail of user.
 */
const findByEmail = async (email) => {
  const query = { email: { $regex: new RegExp(`^${email}$`, 'i') } };

  try {
    const user = await User.findOne(query);

    return transformInJSON(user);
  } catch (error) {
    throw error;
  }
};

/**
 * @description Save user on DB.
 * @param {{ name: string email: string password: string }} doc User to save in DB.
 */
const create = async (doc) => {
  try {
    const user = new User(doc);

    await user.save();

    return transformInJSON(user);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  create,
  findByEmail,
};
