const express = require('express');
const { createUserDetails } = require('../CONTROLLER/detailsController');

const detailRouter = express.Router();

detailRouter.post("/createDetail", createUserDetails);

module.exports = detailRouter;