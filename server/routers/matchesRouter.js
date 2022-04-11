const express = require('express');

const matchesRouter = express.Router();

const matchesController = require('../controllers/matchesController');
const cookieController = require('../controllers/cookieController');

matchesRouter.get('/', cookieController.getUserSession, matchesController.getMatches, async (req, res) => {
  console.log('matchesRouter req: ', req.cookies);
  res.body = res.locals.userMatches;
  return res.status(200).redirect('http://localhost:8080/?matches');
});

module.exports = matchesRouter;
