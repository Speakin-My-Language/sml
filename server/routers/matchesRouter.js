const express = require('express');

const matchesRouter = express.Router();

const matchesController = require('../controllers/matchesController');

matchesRouter.get('/', (req, res) => res.status(200).redirect('http://localhost:8080/?matches'));

module.exports = matchesRouter;
