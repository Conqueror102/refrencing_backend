const express = require("express");
const { createuser, getUser } = require("../controller/userController");

const userRoute = express.Router()

userRoute.post("/createUser", createuser)
userRoute.get("/getUser/:userId", getUser)

module.exports = userRoute