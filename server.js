const express = require("express");
const dotenv = require("dotenv");
const movieListRouter = require("./routes/movieList.route");
const cinemaListRouter = require("./routes/cinemaList.route");
const ApiRoute = require("./constants/routeConstant");
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(ApiRoute.VERSION_1_BASE_ROUTE, movieListRouter);
app.use(ApiRoute.VERSION_1_BASE_ROUTE, cinemaListRouter);

app.listen(port, () => {
  console.log(`Server start listen on port ${port}`);
});
