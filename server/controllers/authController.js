// const fetch = require('node-fetch');

// const authController = {};

// authController.authorize = async (req, res, next) => {
//   const requestToken = req.query.code;
//   const url = `http://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_SECRET_ID}&code=${requestToken}&scope=user:read`
//   let token;
//   try {
//     token = await fetch(url, {method: 'post'})
//   } catch (err) {
//     return next(err);
//   }
//   console.log(token);
//   res.locals.token = token;
//   return next();
// }

// module.exports = authController;


const fetch = require('node-fetch');
require('dotenv').config();

const authController = {};

authController.getToken = async (req, res, next) => {
  const requestToken = req.query.code;
  const url = `https://github.com/login/oauth/access_token?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_SECRET_ID}&code=${requestToken}&scope=user:r`;

  try {
    const tokenJSON = await fetch(url, {
      method: 'POST',
      headers: { Accept: 'application/json' },
    });
    const token = await tokenJSON.json();
    res.locals.access_token = token.access_token;
    console.log(token);
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
  try {
    const profileInfoJSON = await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: 'token ' + res.locals.access_token,
      },
    });
    const profileInfo = await profileInfoJSON.json();
    res.locals.profile = profileInfo;
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