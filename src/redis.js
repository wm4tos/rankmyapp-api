const bluebird = require('bluebird');
const redis = require('redis');
const { REDIS_URL } = require('./config');

bluebird.promisifyAll(redis.RedisClient.prototype);
bluebird.promisifyAll(redis.Multi.prototype);

const client = redis.createClient({ url: REDIS_URL, port: 6379 });

module.exports = {
  client,
};
