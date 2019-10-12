const axios = require('axios');

module.exports = (url, config = {}) => axios.create({ baseURL: url, ...config });
