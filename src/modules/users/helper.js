const { compare } = require('../../helpers/bcrypt');

module.exports.passwordsAreEquals = (
  { password: userPassword },
  { password: reqPassword },
) => compare(userPassword, reqPassword);

module.exports.formatUser = ({
  _id, name, email, isAdmin,
}) => ({
  id: _id, name, email, isAdmin,
});
