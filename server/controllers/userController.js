const db = require('../models/userModel.js');

const userController = {};

userController.getUser = async (req, res, next) => {
    try {

    }
    catch (err) {return next({
        log: `define error log here: ERROR ${err}`,
        status: 400,
        message: {err: 'define error message here'}
      })}
}



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