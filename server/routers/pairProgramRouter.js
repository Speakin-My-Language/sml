const express = require('express');
const pairProgramRouter = express.Router();

// const pairProgramRouter = require('../controllers/pairProgramController');

// this should just take us to Pair Programming yes/no page. Do we need middleware for this?
pairProgramRouter.get('/', (req, res) => {
    return res.status(200).send(path.join(__dirname, '../client/index.html')) //<- is this the correct front end file we want to connect to?
});

module.exports = pairProgramRouter;
