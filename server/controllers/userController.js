const db = require('../models/userModel.js');

const userController = {};

userController.getUserProfile = async (req, res, next) => {
  const id = req.query.id
    try {
      const getUserQ = `SELECT * FROM users WHERE users.id = $1;`
      const params = [ id ]
      const data = await db.query(getUserQ, params)
      res.locals.userProfile = data.json()
      return next();
    }
    catch (err) {return next({
        log: `There was an error in getUserProfile middleware: ERROR ${err}`,
        status: 400,
        message: {err: 'No hablo your language'}
      })}
}


//** Star Wars middleware examples from Unit 10 */
// starWarsController.getSpecies = async (req, res, next) => {
//   const { id } = req.query;  
//   try { 
//     console.log(req.query, id)
//     // eslint-disable-next-line quotes
//     const getSpeciesQ = `SELECT sp.name, sp.classification, sp.average_height, sp.average_lifespan, sp.language, pl.name AS homeworld FROM species sp JOIN planets pl ON sp.homeworld_id = pl._id WHERE sp._id=$1 ;`;
//     const params = [ id ];
//     const data = await db.query(getSpeciesQ, params)
//       .then((data) => {
//         // console.log('species data', data);
//         res.locals.speciesData = data.rows[0];
//         return next();
//       })
//   }
//   catch (err) {
//     return next({
//       log: `starwarsController.getSpecies: ERROR ${err}`,
//       message: {err: 'error occurred in starwarsController.getSpecies. Check Log for more info'}
//     });
//   }
// };



//   userController.getUser = async (req, res, next) => {
//     const { id } = req.query;  
//     try { 
//       console.log(req.query, id)
      
//       const getSpeciesQ = `SELECT sp.name, sp.classification, sp.average_height, sp.average_lifespan, sp.language, pl.name AS homeworld FROM species sp JOIN planets pl ON sp.homeworld_id = pl._id WHERE sp._id=$1 ;`;
//       const params = [ id ];
//       const data = await db.query(getSpeciesQ, params)
//         .then((data) => {          
//         //   res.locals.speciesData = data.rows[0];
//           return next();
//         })
//     }
//     catch (err) {
//       return next({
//         log: `starwarsController.getSpecies: ERROR ${err}`,
//         status: 400,
//         message: {err: 'define error message here'}
//       });
//     }
//   };



//   starWarsController.getCharacters = (req, res, next) => {
//     db.query(getFullCharQ)
//     .then((data) => {
//     res.locals.characterData = data.rows;          
//     return next();
//     })
//     .catch((error) => {
    
//     });
      
// };



module.exports = userController;