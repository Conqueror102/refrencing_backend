const express = require('express');
const { createUser, getUser } = require('../CONTROLLER/userController');

const userRouter = express.Router();

userRouter.post("/", createUser);
userRouter.get("/:userId", getUser);

module.exports = userRouter;