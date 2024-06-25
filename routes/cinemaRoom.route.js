// const { createCinemaRoom } = require("../controllers/cinemaRoom.controller");
// const express = require("express");
// const ApiRoute = require("../constants/routeConstant");
// const router = express.Router();
import express from "express";
import ApiRoute from "../constants/routeConstant";
import { Router } from "express";
import { createCinemaRoom } from "../controllers";

const router = Router();

router.route(ApiRoute.CINEMA_ROOM_LISTS_ROUTE).post(createCinemaRoom);

// module.exports = router;
export default router;
