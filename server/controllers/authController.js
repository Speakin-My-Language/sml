const fetch = require('node-fetch');
require('dotenv').config();

const authController = {};

authController.getToken = async (req, res, next) => {
  const requestToken = req.query.code;
  const url = `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_SECRET_ID}&code=${requestToken}&scope=user:read`;
  try {
    const tokenJSON = await fetch(url, {
      method: 'POST',
      headers: { Accept: 'application/json' },
    });
    const token = await tokenJSON.json();
    res.locals.access_token = token.access_token;
    return next();
  } catch (err) {
    return next({
      log: `Error in authController.getToken Err: ${err.message}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

authController.getProfile = async (req, res, next) => {
  const url = 'https://api.github.com/user';
  console.log(req.cookies);
  console.log(req.cookies.auth_token)
  try {
    const profileInfoJSON = await fetch(url, {
      method: 'GET',
      headers: { authorization: `token ${req.cookies.auth_token}` },
    });
    const profileInfo = await profileInfoJSON.json();
    res.locals.profile = profileInfo;
    console.log('profile', res.locals.profile);
    return next();
  } catch (err) {
    return next({
      log: `Error in authController.getProfile Err: ${err.message}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

authController.getLanguages = async (req, res, next) => {
  try {
    console.log('is auth available?', req.cookies.auth_token);
    const username = res.locals.profile.login;
    console.log('res.locals', res.locals);
    // adding page=n to query will give page n as a result
    // mirror:false, per_page=100
    const query = encodeURIComponent(`user:${username}`);
    const url = `https://api.github.com/search/repositories?q={${query}}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        // authorization: `token ${req.cookies.auth_token}`,
        accept: 'application/vnd.github.v3+json',
      },
    });
    console.log('getLang response', response);
    const repos = await response.json();
    console.log('getLang after await .json()', repos);
    res.locals.repos = repos;

    return next();
  } catch (err) {
    return next({
      log: `Error in authController.getLanguages Err: ${err.message}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

module.exports = authController;
