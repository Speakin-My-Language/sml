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
  // console.log('cookies from getProfile', req.cookies)
  const url = 'https://api.github.com/user';
  try {
    const profileInfoJSON = await fetch(url, {
      method: 'GET',
      headers: {
        authorization: `token ${res.locals.access_token}`,
      },
    });
    const profileInfo = await profileInfoJSON.json();
    res.locals.profile = profileInfo;
    // console.log('res.locals in getProfile', res.locals.profile)
    return next();
  } catch (err) {
    return next({
      log: `Error in authController.getProfile Err: ${err.message}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

// gets all public repos for a username and then async adds all languages from them into one object.
authController.getLanguages = async (req, res, next) => {
  try {
    let response = await fetch(res.locals.profile.repos_url, {
      method: 'GET',
      headers: {
        authorization: `token ${res.locals.access_token}`,
        accept: 'application/vnd.github.v3+json',
      },
    });
    const languageTotals = {};
    const repos = await response.json();
    const resp = await repos.map(async (repo) => { // repos
      response = await fetch(`${repo.url}/languages`, {
        method: 'GET',
        headers: {
          authorization: `token ${res.locals.access_token}`,
          accept: 'application/vnd.github.v3+json',
        },
      });
      response = await response.json();
      Object.keys(response).map(async (language) => {
        if (languageTotals[language]) languageTotals[language] += response[language];
        else languageTotals[language] = response[language];
      });
      //res.locals.languages = languageTotals;
      // console.log('Language Total Agg', languageTotals)
    });
    Promise.allSettled(resp)
      .then(async (values) => {
        res.locals.languages = languageTotals;
        return next();
      });
  } catch (err) {
    return next({
      log: `Error in authController.getLanguages Err: ${err.message}`,
      status: 500,
      message: { err: 'An error occurred' },
    });
  }
};

// This is an attempt at getting private repos, it works, but doesn't have summing logic yet
// authController.getLanguages = async (req, res, next) => {
//   try {
//     //console.log('is auth available?', req.cookies.auth_token);
//     const username = res.locals.profile.login;
//     //console.log('res.locals in getLanguages', res.locals);
//     // adding page=n to query will give page n as a result
//     // mirror:false, per_page=100
//     const q = `user:${username}`;
//     const query = encodeURIComponent(q);
//     const url = `https://api.github.com/search/repositories?q=${query}`;
//     const response = await fetch(url, {
//       method: 'GET',
//       headers: {
//         authorization: `token ${res.locals.access_token}`,
//         accept: 'application/vnd.github.v3+json',
//       },
//     });
//     //console.log('getLang response', response);
//     const repos = await response.json();
//     console.log('getLang after await .json()', repos);
//     res.locals.repos = repos;

//     return next();
//   } catch (err) {
//     return next({
//       log: `Error in authController.getLanguages Err: ${err.message}`,
//       status: 500,
//       message: { err: 'An error occurred' },
//     });
//   }
// };

module.exports = authController;
