const express = require('express');
const userRouter = express.Router();

const userController = require('../controllers/userController');

userRouter.get('/', userController.getUserProfile, (req, res) => {
  return res.status(200).json(res.locals.userProfile);
});

// userRouter.post()

// userRouter.patch()


module.exports = userRouter;
