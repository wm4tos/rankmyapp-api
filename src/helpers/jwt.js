const { sign, decode } = require('jsonwebtoken');
const { SECRET } = require('../config');

module.exports.sign = data => sign(data, SECRET);

module.exports.decode = token => new Promise((resolve, reject) => {
  const data = decode(token);

  return data ? resolve(data) : reject(new Error('Invalid token'));
});
