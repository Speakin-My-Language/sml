const express = require('express');
const newProgrammerRouter = express.Router();

const newProgrammerController = require('../controllers/newProgrammerController');

newProgrammerRouter.get('/', newProgrammerController.getNewProgrammer, (req, res) => {
  console.log(res.locals.newProgrammer)
  res.status(200).json(res.locals.newProgrammer);
});

// Middleware needs to make a fetch call to the db for x amount of newProgrammer


module.exports = newProgrammerRouter;
