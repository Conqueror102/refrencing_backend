const express = require('express');
const { createUserDetails, updateDetails } = require('../CONTROLLER/detailsController');

const detailRouter = express.Router();

detailRouter.post("/createDetail", createUserDetails);
detailRouter.patch("/update/:Id",updateDetails)

module.exports = detailRouter;