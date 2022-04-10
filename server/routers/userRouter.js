const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/userController');

userRouter.get('/:node_id', userController.getUserProfile, (req, res) => {
  // console.log(res.locals.userProfile)
  return res.status(200).json(res.locals.userProfile);
});

// userRouter.post()

// userRouter.patch()

module.exports = userRouter;
