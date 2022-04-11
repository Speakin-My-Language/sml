const express = require('express');
const loginRouter = express.Router();

const loginController = require('../controllers/loginController');


// loginRouter.post()


module.exports = loginRouter;


// const mattLanguages = {
//   javascript: 45897,
//   python: 4539867,
//   swift: 34253,
//   css: 34256,
//   html: 35124,
// }

// const willLanguages = {
//   javascript: 45897,
//   python: 4539867,
//   swift: 34253,
//   css: 34256,
//   html: 35124,
// }

// console.log(JSON.stringify(mattLanguages))
// console.log(JSON.stringify(willLanguages))