const schedule = require('node-schedule');

const { findByTime } = require('../alert/repository');
const { sendProducts } = require('../sendgrid/service');
const { search } = require('../ebay/service');

const sendMail = async (alert) => {
  try {
    const ebayResult = await search(alert.keywords);

    sendProducts(ebayResult, alert.email);
  } catch (error) {
    throw error;
  }
};

const job = name => async () => {
  try {
    const alerts = await findByTime(name);

    alerts.forEach(sendMail);
  } catch (error) {
    throw error;
  }
};

class Cron {
  constructor() {
    const rules = [
      {
        name: '15s',
        rule: '*/15 * * * * *',
      },
      {
        name: '30s',
        rule: '*/30 * * * * *',
      },
      {
        name: '1m',
        rule: '*/1 * * * *',
      },
      {
        name: '10m',
        rule: '*/10 * * * *',
      },
      {
        name: '30m',
        rule: '*/30 * * * *',
      },
    ];

    rules.forEach(({ name, rule }) => {
      schedule.scheduleJob(name, rule, job(name));
    });
  }
}

module.exports = () => new Cron();
