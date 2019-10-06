const { signIn } = require('./service');

module.exports.auth = async (req, res, next) => {
  try {
    const { body } = req;
    const data = await signIn(body);

    res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};
