const loadRoutes = require('./helpers/load_routes');

module.exports = (router) => {
  const routes = loadRoutes(['users', 'partners']);

  routes.forEach((route) => {
    const { endpoint, router: r } = route(router);

    router.use(endpoint, r);
  });

  return router;
};
