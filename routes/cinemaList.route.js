const express = require("express");
const router = express.Router();
const ApiRoute = require("../constants/routeConstant");
const {
  createCinema,
  getCinemaList,
} = require("../controllers/cinemaList.controller");

router.route(ApiRoute.CINEMA_LISTS_ROUTE).post(createCinema);
router.route(ApiRoute.CINEMA_LISTS_ROUTE).get(getCinemaList);

module.exports = router;
