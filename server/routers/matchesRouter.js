const express = require('express');
const fetch = require('node-fetch');

const authController = require('../controllers/authController');
const matchesController = require('../controllers/matchesController');
const cookieController = require('../controllers/cookieController');
const signupController = require('../controllers/signupController');

const matchesRouter = express.Router();

// matchesRouter.get('/matches', async (req, res) => {
//   // console.log('matchesRouter req.cookies', req.cookies);
//   // console.log('matchesRouter app.locals', req.app.locals.user_session);
//   // res.setHeader('Access-Control-Allow-Credentials', true);
//   return res.status(200).redirect('http://localhost:8080/?matches');
// });

matchesRouter.get('/', cookieController.getUserSession, matchesController.getMatches, async (req, res) => {
  console.log('matchesRouter req.cookies', req.cookies);
  // console.log('matchesRouter app.locals', req.app.locals.user_session);
  //res.setHeader('Access-Control-Allow-Credentials', true);
  

  return res.status(200).redirect('http://localhost:8080/?matches');
  // return res.status(200).redirect('http://localhost:3000/matches/matches');
});

module.exports = matchesRouter;
