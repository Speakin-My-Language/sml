const express = require('express');
const matchesRouter = express.Router();

const matchesController = require('../controllers/matchesController');

matchesRouter.get('/', matchesController.getMatches, (req, res) => {
  return res.status(200).json(res.locals.userMatches);
});



module.exports = matchesRouter;