// const express = require("express");
// const ApiRoute = require("../constants/routeConstant");
// const { addNewMovie } = require("../controllers/movieList.controller");
import express from "express";
import { Router } from "express";
import ApiRoute from "../constants/routeConstant";
import { addNewMovie } from "../controllers";
const router = express.Router();

router.route(ApiRoute.MOVIE_LISTS_ROUTE).post(addNewMovie);

module.exports = router;
