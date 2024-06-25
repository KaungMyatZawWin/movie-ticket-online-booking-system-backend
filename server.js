// const express = require("express");
// const dotenv = require("dotenv");
// const sequelize = require("./db/dbconnection");
// const rootRouter = require("./routes/index");
// const ApiRoute = require("./constants/routeConstant");
import express from "express";
import dotenv from "dotenv";
import rootRouter from "./routes/index.js";
import sequelize from "./db/dbconnection.js";
import ApiRoute from "./constants/routeConstant.js";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use(ApiRoute.VERSION_1_BASE_ROUTE, rootRouter);
app.use(ApiRoute.UNIVERSAL_ROUTE, (req, res) => {
  res.status(400),
    json({ status: "Not Found!", message: "Your request route not found." });
});

app.listen(port, async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({alter:true});
    await sequelize.sync();
    console.log("🚀 - Database connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
  console.log(`Server start listen on port ${port}`);
});
