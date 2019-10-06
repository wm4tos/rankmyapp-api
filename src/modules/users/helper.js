const { compare } = require('../../helpers/bcrypt');

module.exports.passwordsAreEquals = (
  { password: userPassword },
  { password: reqPassword },
) => compare(userPassword, reqPassword);

module.exports.formatUser = ({
  name, email, isAdmin, token,
}) => ({
  name, email, isAdmin, token,
});
