require('dotenv').config();

module.exports = Object.freeze({
  PORT: process.env.PORT || 3000,
  SECRET: process.env.SECRET,
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_URI: process.env.MONGODB_URI,
  MONGODB_DATABASE: process.env.MONGODB_DATABASE,
});
