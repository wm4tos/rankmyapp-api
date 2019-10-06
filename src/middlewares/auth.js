const { decode } = require('../helpers/jwt');

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      throw new Error('No token provided');
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
      throw new Error('Invalid token');
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
      throw new Error('Token malformatted');
    }

    req.user = await decode(token);

    next();
  } catch (error) {
    error.name = 'UNAUTHORIZED';
    next(error);
  }
};
