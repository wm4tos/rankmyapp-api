const axios = require('axios');

module.exports = url => axios.create({ baseURL: url });
