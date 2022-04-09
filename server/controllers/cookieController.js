const db = require('../models/userModel.js');
const cookieController = {};

cookieController.saveToken = (req, res, next) => {
  res.cookie('auth_token', res.locals.token);
  return next();
}

module.exports = cookieController;