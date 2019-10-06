const { sign } = require('../../helpers/jwt');
const { generateHash } = require('../../helpers/bcrypt');
const { findByEmail, create: createUser } = require('./repository');
const { passwordsAreEquals } = require('./helper');

/**
 * @description Create new user.
 * @param {User} data Object with user props.
 */
const create = async (data) => {
  const { password } = data;

  const modifiedUser = { ...data, password: generateHash(password) };

  try {
    const user = await createUser(modifiedUser);

    return user;
  } catch (error) {
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
    const error = { name: 'UNAUTHORIZED' };
    const user = await findByEmail(email);

    if (!user) {
      error.message = 'Invalid user';
      throw error;
    } else if (!passwordsAreEquals(user, { password })) {
      error.message = 'Invalid password';
      throw error;
    }

    delete user.password;
    user.token = sign(user);

    return user;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  signIn,
  create,
};
