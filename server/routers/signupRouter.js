const express = require('express');
const fetch = require('node-fetch');
const authController = require('../controllers/authController');
const cookieController = require('../controllers/cookieController');
const signupController = require('../controllers/signupController');

const router = express.Router();

// authorization from gitHub
router.get('/github/auth', async (req, res) => {
  const url = `http://github.com/login/oauth/authorize?scope=read:user&redirect_uri=http://localhost:3000/signup/github/callback/&client_id=${process.env.GITHUB_CLIENT_ID}`;
  return res.redirect(url);
});

// user specific token from gitHub
router.get(
  '/github/callback',
  authController.getToken,
  cookieController.saveToken,
  authController.getProfile,
  // authController.getLanguages,
  // signupController.storeUserInDb,
  async (req, res) => {
    console.log(req.cookies);
    console.log(res.locals.profile);
    console.log(res.locals.repos);
    return res.status(200).redirect('http://localhost:3000/pairProgram');
  },
);

module.exports = router;
