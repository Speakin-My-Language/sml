const db = require('../models/userModel.js');

const matchesController = {};

matchesController.getMatches = async (req, res, next) => {
  try {
    const getMatchesQ = 'SELECT * FROM matches;';
    const data = await db.query(getMatchesQ);
    console.log(data.rows);
    res.locals.userMatches = data.rows;
    return next();
  }
  catch (err) { return next({
    log: `There was an error in getMatches middleware: ERROR ${err}`,
    status: 400,
    message: { err: 'No hablo your language'}
  })};
}

// button: update matches, controller that queries the database, flips is_match to true and reveals matches to each other
module.exports = matchesController;


// if Mireille hits 1 on Eric

// send a patch request to our matches controller once a match has -->
// liked the user and once the match has liked the user -->
// back our booleans will become true and we will be able to see we matched
