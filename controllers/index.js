// const { createCinema, getCinemaList } = require("./cinemaList.controller");
// const { createCinemaRoom } = require("./cinemaRoom.controller");
// module.exports = {
//   createCinema,
//   getCinemaList,
//   createCinemaRoom,
// };


import {
  createCinema,
  getCinemaList,
} from "../controllers/cinemaList.controller.js";
import {
  createCinemaRoom,
  getAllRooms,
  getRoomsWithTheirCinema,
} from "../controllers/cinemaRoom.controller.js";
import { createSeat } from "./seatList.controller.js";
import { addNewMovie } from "./movieList.controller.js";

export {
  createCinema,
  getCinemaList,
  createCinemaRoom,
  getAllRooms,
  getRoomsWithTheirCinema,
  addNewMovie,
  createSeat,
};
