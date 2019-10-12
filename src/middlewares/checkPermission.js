module.exports = (req, _, next) => {
  if (req.user.isAdmin) return next();
  const error = {
    name: 'FORBIDDEN',
    message: 'You don\'t have permission to make that.',
  };

  return next(error);
};
