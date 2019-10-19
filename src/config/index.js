require('dotenv').config();

module.exports = Object.freeze({
  PORT: process.env.PORT || 3000,
  SECRET: process.env.SECRET,
  NODE_ENV: process.env.NODE_ENV,
  MONGODB_URI: process.env.MONGODB_URI,
  MONGODB_DATABASE: process.env.MONGODB_DATABASE,
  EBAY_APP_NAME: process.env.EBAY_APP_NAME,
  EBAY_GLOBAL_ID: process.env.EBAY_GLOBAL_ID,
  SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  REDIS_EXPIRES: process.env.REDIS_EXPIRES || 3600,
  REDIS_URL: process.env.REDIS_URL,
});
