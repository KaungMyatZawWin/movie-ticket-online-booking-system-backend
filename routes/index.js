const router = require("express").Router();
const ApiRoute = require("../constants/routeConstant");
const {
  getRoomsWithTheirCinema,
  getAllRooms,
} = require("../controllers/cinemaRoom.controller");
const {
  createCinema,
  createCinemaRoom,
  getCinemaList,
} = require("../controllers/index");
const { createSeat } = require("../controllers/seatList.controller");

//cinema
router.route(ApiRoute.CINEMA_LISTS_ROUTE).post(createCinema);
router.route(ApiRoute.CINEMA_LISTS_ROUTE).get(getCinemaList);

//cinema room
router.route(ApiRoute.CINEMA_ROOM_LISTS_ROUTE).post(createCinemaRoom);
router.route(ApiRoute.CINEMA_ROOM_LISTS_ROUTE).get(getRoomsWithTheirCinema);
router.route(ApiRoute.CINEMA_ROOM_LISTS_ROUTE).get(getAllRooms);

//seat
router.route(ApiRoute.SEAT_LIST_ROUTE).post(createSeat);

module.exports = router;
