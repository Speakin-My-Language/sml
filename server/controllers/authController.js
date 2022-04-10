const fetch = require('node-fetch');
require('dotenv').config();

const authController = {};

authController.getToken = async (req, res, next) => {
  const requestToken = req.query.code;
  const url = `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_SECRET_ID}&code=${requestToken}&scope=user:read`;
  console.log('--> console log in get token');
  try {
    const tokenJSON = await fetch(url, {
      method: 'POST',
      headers: { Accept: 'application/json' },
    });
    const token = await tokenJSON.json();
    res.locals.access_token = token.access_token;
    console.log(token.access_token);
    // console.log(token);
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
  console.log('--> console log in get profile');
  const url = 'https://api.github.com/user';
  console.log('authtoken in get prof', req.cookies.auth_token)
  try {
    const profileInfoJSON = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: `token ${req.cookies.auth_token}`,
      },
    });
    const profileInfo = await profileInfoJSON.json();
    res.locals.profile = profileInfo;
    console.log('\nTHE PROFILE IS THIS: ', profileInfo)
    return next();
  } catch (err) {
    return next({
      log: `Error in authController.getProfile Err: ${err.message}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

module.exports = authController;
