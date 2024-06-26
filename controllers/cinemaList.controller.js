// const CinemaModel = require("../db/models/CinemaModel");
import CinemaModel from "../db/models/CinemaModel.js";

export const createCinema = async (req, res, next) => {
  try {
    const body = req?.body;
    if (!body) return res.status(400).json({ message: "Please add data." });
    const cinemaList = await CinemaModel.create({
      CinemaName: body?.cinemaName,
      CinemaLocation: body?.cinemaLocation,
    });
    console.log(cinemaList);
    return res.status(201).json({ message: "New Cinema was created." });
  } catch (error) {
    res.status(400).json({ message: error });
  }
  // res.json({ message: "Wait I am developing" });
};

export const getCinemaList = async (req, res, next) => {
  try {
    const cinemaLists = await CinemaModel.findAll();

    return res.status(200).json({
      status: "Success",
      isSuccess: true,
      isError: false,
      RespData: cinemaLists,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Failed",
      isSuccess: false,
      isError: true,
      message: "Can't get lists",
    });
  }
};

// module.exports = { createCinema, getCinemaList };
