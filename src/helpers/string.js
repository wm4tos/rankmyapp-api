/**
 * @description Transform a simple obj in query string.
 * @param {Object} obj
 */
const mountQuery = (obj = {}) => Object.keys(obj).reduce((acc, cur) => acc.concat(`${cur}=${obj[cur]}&`), '?');

/**
 * @description Remove special characteres from any string.
 * @param {String} str
 */
const normalizeString = (str = '') => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

module.exports = {
  normalizeString,
  mountQuery,
};
