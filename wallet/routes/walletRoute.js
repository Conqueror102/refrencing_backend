const express = require("express");
const { createWallet } = require("../controller/walletController");

const walletRoute = express.Router()

walletRoute.post("/createWallet", createWallet)

module.exports = walletRoute