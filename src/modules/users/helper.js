module.exports.passwordsAreEquals = (
  { password: userPassword },
  { password: reqPassword },
) => (userPassword === reqPassword);
