const { Schema, model } = require('mongoose');

const alertSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  keywords: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

module.exports.alertSchema = alertSchema;

module.exports = model('alerts', alertSchema);
