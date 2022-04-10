const db = require('../models/userModel.js');
const { v4: uuidv4 } = require('uuid');

const signupController = {};

signupController.storeUserInDb = async (req, res, next) => {
  console.log('--> console log in store in user db');
  const { name, location, login, repos_url, twitter_username, company, blog, email, node_id, bio } = res.locals.profile;  
  const id = uuidv4();
  console.log('id', id);
  try {
    const storeUserInDb = `INSERT INTO users 
                          (id, name, location, handle, repos_url, twitter, 
                          company, website, email, node_id, bio, languages)
                          VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, null);`
    const params = [
      id,
      name,
      location,
      login,
      repos_url,
      twitter_username,
      company,
      blog,
      email,
      node_id,
      bio
    ]; // -> node_id: 'MDQ6VXNlcjQ1NzAyNzE2'
    const data = await db.query(storeUserInDb, params);
    console.log(data);
    return next();
  }
  catch (err) { return next({
    log: `There was an error in storeUSerInDb middleware: ERROR ${err}`,
    status: 400,
    message: { err: err }
  })};
  
};

module.exports = signupController;

// --   id UUID NOT NULL PRIMARY KEY,
// --   name VARCHAR (200) NOT NULL,
// --   location VARCHAR,
// --   handle VARCHAR,
// --   repos_url VARCHAR,
// --   twitter VARCHAR,
// --   company VARCHAR,
// --   website VARCHAR,
// --   email VARCHAR,
// --   node_id VARCHAR,
// --   bio TEXT,
// --   languages VARCHAR
// --   )