const {
  create, findAll, remove, update,
} = require('./service');

/**
 * @description Ask for an alert to a user.
 */
const createAlert = async (req, res, next) => {
  try {
    const { body } = req;
    const alert = await create(body);

    res.status(200).json(alert);
  } catch (error) {
    next(error);
  }
};

const getAlerts = async (req, res, next) => {
  try {
    const alerts = await findAll();

    res.status(200).json(alerts);
  } catch (error) {
    next(error);
  }
};

const removeAlert = async (req, res, next) => {
  try {
    await remove(req.params._id);

    res.status(200).json({ status: 200, message: 'Alert deleted successfully' });
  } catch (error) {
    next(error);
  }
};

const updateAlert = async (req, res, next) => {
  try {
    const alert = await update(req.params._id, req.body);

    res.status(200).json(alert);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createAlert,
  getAlerts,
  removeAlert,
  updateAlert,
};
