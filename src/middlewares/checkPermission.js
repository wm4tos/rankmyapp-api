module.exports = (req, _, next) => {
  if (req.user.isAdmin) return next();
  const error = {
    name: 'FORBIDDEN',
    message: 'Você não está autorizado a realizar esta ação.',
  };

  return next(error);
};
