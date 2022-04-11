const express = require('express');
const logoutRouter = express.Router();

const logoutController = require('../controllers/logoutController');

//what CRUD method should we use here?
// logoutRouter.get();

module.exports = logoutRouter;