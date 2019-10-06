const loadRoutes = require('./helpers/load_routes');

module.exports = (router) => {
  const routes = loadRoutes(['users']);

  routes.forEach((route) => {
    const { endpoint, router: r } = route(router);

    router.use(endpoint, r);
  });

  return router;
};
