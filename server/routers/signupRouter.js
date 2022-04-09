const express = require('express');
const fetch = require('node-fetch');
const authController = require('../controllers/authController');
const cookieController = require('../controllers/cookieController');
//const axios = require('axios');

const router = express.Router();
//authorization from gitHub
router.get('/github/auth', async (req, res, next) => {
  const url = 'http://github.com/login/oauth/authorize?' +
              'scope=read:user&' +
              'redirect_uri=http://localhost:3000/signup/github/callback&' +
              'client_id=' + process.env.GITHUB_CLIENT_ID;
  return res.redirect(url);
})
//user specific token from gitHub
router.get('/github/callback', authController.getToken, authController.getProfile, async (req, res, next) => {
  // let users;
  // // console.log(res.locals.token)
  // try {
  //   users = await fetch('https://api.github.com/user', 
  //     {
  //       headers: {
  //         // 'Content-Type': 'application/json',
  //         'Authorization': `token ${req.cookies.auth_token}`,
  //         'User-Agent': 'Speaking-My-Language',
  //       },
  //       method: 'get'
  //   })
  //   // console.log(users)
  //   // console.log(req.cookies);
  // } catch(err) {
  //   return next(err)
  // }
  console.log(res.locals.profile)
  console.log(res.locals.repos)
  return res.status(200).send('Authenticated');
})

module.exports = router;