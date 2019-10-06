const bcrypt = require('bcryptjs');

exports.generateHash = (data) => {
  const salt = bcrypt.genSaltSync(13);
  return bcrypt.hashSync(data, salt);
};

exports.compare = (hash, password) => bcrypt.compareSync(password, hash);
