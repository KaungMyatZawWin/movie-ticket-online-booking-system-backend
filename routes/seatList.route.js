const express = require("express");
const ApiRoute = require("../constants/routeConstant");
const { createSeat } = require("../controllers/seatList.controller");

const router = express.Router();

router.route(ApiRoute.SEAT_LIST_ROUTE).post(createSeat);

module.exports = router;
