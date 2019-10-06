const httpCodes = require('http-status-codes');

module.exports = (name, message) => (name
  ? {
    status: httpCodes[name],
    message: message || httpCodes.getStatusText(httpCodes[name]),
  }
  : {
    status: httpCodes.INTERNAL_SERVER_ERROR,
    message: httpCodes.getStatusText(httpCodes.INTERNAL_SERVER_ERROR),
  });
