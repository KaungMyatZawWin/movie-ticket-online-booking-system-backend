const CinemaModel = require("../db/models/CinemaModel");

const createCinema = async (req, res, next) => {
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

module.exports = { createCinema };
