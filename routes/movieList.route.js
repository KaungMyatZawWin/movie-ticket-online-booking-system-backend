const express = require("express");
const ApiRoute = require("../constants/routeConstant");
const { addNewMovie } = require("../controllers/movieList.controller");
const router = express.Router();

router.route(ApiRoute.MOVIE_LISTS_ROUTE).post(addNewMovie);

module.exports = router;
