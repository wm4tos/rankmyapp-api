const mongoose = require('mongoose');
const { MONGODB_URI, MONGODB_DATABASE } = require('./config/index');

module.exports = () => {
  mongoose.connect(`${MONGODB_URI}/${MONGODB_DATABASE}`, { useNewUrlParser: true, useUnifiedTopology: true });

  return mongoose.connection;
};
