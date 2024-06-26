// const express = require("express");
// const ApiRoute = require("../constants/routeConstant");
// const { createSeat } = require("../controllers/seatList.controller");
import express from "express";
import { Router } from "express";
import ApiRoute from "../constants/routeConstant";
import { createSeat } from "../controllers";
const router = Router();

router.route(ApiRoute.SEAT_LIST_ROUTE).post(createSeat);

module.exports = router;
