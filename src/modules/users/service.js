const { sign } = require('../../helpers/jwt');
const { generateHash } = require('../../helpers/bcrypt');
const { findByEmail, create: createUser } = require('./repository');
const { passwordsAreEquals, formatUser } = require('./helper');

/**
 * @description Create new user.
 * @param {User} data Object with user props.
 */
const create = async (data) => {
  const { password } = data;

  const modifiedUser = { ...data, password: generateHash(password) };

  try {
    const user = formatUser(await createUser(modifiedUser));

    return user;
  } catch (error) {
    if (/duplicate key error/.test(error)) {
      error.name = 'CONFLICT';
      error.message = 'Email already are registered.';
    }
    throw error;
  }
};

/**
 * @description Search user, compare passwords and return user with token.
 * @param {Object} data Object with email and password.
 * @returns {Object}
 */
const signIn = async (data) => {
  const { email, password } = data;

  try {
    const user = await findByEmail(email);

    if (!user) {
      throw new Error('Invalid user');
    } else if (!passwordsAreEquals(user, { password })) {
      throw new Error('Invalid password');
    }

    user.token = sign(user);

    return formatUser(user);
  } catch (error) {
    error.name = 'UNAUTHORIZED';
    throw error;
  }
};

module.exports = {
  signIn,
  create,
};
