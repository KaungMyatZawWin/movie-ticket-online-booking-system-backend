// const express = require("express");
import express from "express";
import { Router } from "express";
// const ApiRoute = require("../constants/routeConstant");
import ApiRoute from "../constants/routeConstant";
import { createCinema } from "../controllers";
import { getCinemaList } from "../controllers";

const router = Router();
// const {
//   createCinema,
//   getCinemaList,
// } = require("../controllers/cinemaList.controller");

router.route(ApiRoute.CINEMA_LISTS_ROUTE).post(createCinema);
router.route(ApiRoute.CINEMA_LISTS_ROUTE).get(getCinemaList);

// module.exports = router;

export default router;
