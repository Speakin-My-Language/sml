const db = require('../models/userModel.js');
const cookieController = {};

cookieController.saveToken = (req, res, next) => {
  console.log('--> console log in save token');
  console.log('before', res.locals.access_token);
  res.cookie('auth_token', res.locals.access_token, { overwrite: true });
  console.log('after', req.cookies.auth_token);
  return next();
};

cookieController.saveUserSession = (req, res, next) => {
  res.cookie('user_session', res.locals.profile.node_id, { overwrite: true });
  return next();
};

cookieController.getUserSession = (req, res, next) => {
  const { user_session } = req.cookies; // -> { user_session: asdhfaskfh, auth_token: asdfdsaf }
  res.locals.userSession = user_session;
  return next();
};

module.exports = cookieController;
