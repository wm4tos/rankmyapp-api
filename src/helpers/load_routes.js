/* eslint-disable import/no-dynamic-require, global-require */
const fs = require('fs');

module.exports = (modules = []) => {
  const routes = [];

  modules.forEach(m => (fs.existsSync(`src/modules/${m}/`)
    ? routes.push(require(`../modules/${m}/routes`))
    : null));

  return routes;
};
