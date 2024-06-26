const { createCinemaRoom } = require("../controllers/cinemaRoom.controller");
const express = require("express");
const ApiRoute = require("../constants/routeConstant");
const router = express.Router();

router.route(ApiRoute.CINEMA_ROOM_LISTS_ROUTE).post(createCinemaRoom);

module.exports = router;
