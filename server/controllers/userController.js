const db = require('../models/userModel.js');

const userController = {};
// check if cookie exists, if it does return the profile attached to it
userController.getUserProfile = async (req, res, next) => {
  console.log('req.params', req.params);
  const { node_id } = req.params;
  console.log('node_id', node_id);
  try {
    const getUserQ = `SELECT * FROM users WHERE users.node_id = $1;`
    const params = [node_id];
    const data = await db.query(getUserQ, params);
    //console.log(data.rows[0]);
    res.locals.userProfile = data.rows[0];
    return next();
  }
  catch (err) { return next({
    log: `There was an error in getUserProfile middleware: ERROR ${err}`,
    status: 400,
    message: { err: 'No hablo your language'}
  })};
};

module.exports = userController;