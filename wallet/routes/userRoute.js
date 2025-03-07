const express = require("express");
const { createuser } = require("../controller/userController");

const userRoute = express.Router()

userRoute.post("/createUser", createuser)