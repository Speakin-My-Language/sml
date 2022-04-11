const db = require('../models/userModel.js');

const matchesController = {};

// rewrite how getMatches is working state isn't saved anywhere
// user id as first column
matchesController.getMatches = async (req, res, next) => {
  try {
    const getMatchesQ = 'SELECT * FROM matches m INNER JOIN users u ON m.id = u.id WHERE u.node_id = $1;';
    const params = [res.locals.userSession];
    console.log(params) // -> node_id: 'MDQ6VXNlcjQ1NzAyNzE2'
    const data = await db.query(getMatchesQ, params);
    //console.log('data rows', data);
    res.locals.userMatches = JSON.stringify(data.rows);
    return next();
  }
  catch (err) {
    return next({
      log: `There was an error in getMatches middleware: ERROR ${err}`,
      status: 400,
      message: { err: 'No hablo your language' },
    });
  }
};

matchesController.createMatch = async (req, res, next) => {
  try {
    const getMatchesQ = 'INSERT INTO matches (id, matched_user, is_matched) VALUES()';
    // const params = [res.locals.userSession]; // -> node_id: 'MDQ6VXNlcjQ1NzAyNzE2'
    // const data = await db.query(getMatchesQ, params);
    // console.log(data.rows);
    // res.locals.userMatches = JSON.stringify(data.rows);

    return next();
  } catch (err) {
    return next({
      log: `There was an error in getMatches middleware: ERROR ${err}`,
      status: 400,
      message: { err: 'No hablo your language' },
    });
  }
};

// button: update matches, controller that queries the database, flips is_match to true and reveals matches to each other
module.exports = matchesController;

// if Mireille hits 1 on Eric

// send a patch request to our matches controller once a match has -->
// liked the user and once the match has liked the user -->
// back our booleans will become true and we will be able to see we matched
