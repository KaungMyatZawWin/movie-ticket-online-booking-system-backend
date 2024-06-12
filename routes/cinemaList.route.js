const express = require("express");
const router = express.Router();
const ApiRoute = require("../constants/routeConstant");
const { createCinema } = require("../controllers/cinemaList.controller");

router.route(ApiRoute.CINEMA_LISTS_ROUTE).post(createCinema);

module.exports = router;
