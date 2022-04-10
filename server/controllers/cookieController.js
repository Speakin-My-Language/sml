const db = require('../models/userModel.js');
const cookieController = {};

cookieController.saveToken = (req, res, next) => {
  res.cookie('auth_token', res.locals.access_token, { overwrite: true });
  return next();
};

cookieController.saveUserSession = (req, res, next) => {
  res.cookie('user_session', res.locals.profile.node_id, { overwrite: true });
  return next();
};

module.exports = cookieController;
