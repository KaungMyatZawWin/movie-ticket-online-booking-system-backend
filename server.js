const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./db/dbconnection");
const movieListRouter = require("./routes/movieList.route");
const cinemaListRouter = require("./routes/cinemaList.route");
const cinemaRoomListRouter = require("./routes/cinemaRoom.route");
const ApiRoute = require("./constants/routeConstant");
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(ApiRoute.VERSION_1_BASE_ROUTE, movieListRouter);
app.use(ApiRoute.VERSION_1_BASE_ROUTE, cinemaListRouter);
app.use(ApiRoute.VERSION_1_BASE_ROUTE, cinemaRoomListRouter);

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  console.log(`Server start listen on port ${port}`);
});
