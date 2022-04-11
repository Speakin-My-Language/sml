const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/userController');

userRouter.get('/', userController.getUserProfile, (req, res) => {
  // console.log(res.locals.userProfile)
  return res.status(200).json(res.locals.userProfile);
});


// userRouter.patch('/', userController.updateUser, (req, res) => {
//   return res.status(200).json(res.locals.updatedInfo)
// })

// userRouter.post()

// userRouter.patch()

module.exports = userRouter;
