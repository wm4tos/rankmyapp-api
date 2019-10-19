const { client } = require('../../redis');
const { REDIS_EXPIRES } = require('../../config');

/**
 * @description Save search result in redis.
 * @param {{ key: String data: Object time: Number }} param0
 */
const saveSearch = ({ key, data, time = REDIS_EXPIRES }) => client.set(key, JSON.stringify(data), 'EX', time);

/**
 * @description Get values from redis.
 * @param {String} key Search phrase used in eBay query.
 */
const getSearch = async (key) => {
  try {
    const data = await client.getAsync(key);

    if (data) return JSON.parse(data);

    return null;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  saveSearch,
  getSearch,
};
