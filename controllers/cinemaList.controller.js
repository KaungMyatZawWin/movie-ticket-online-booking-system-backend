const cinemaModel = require("../db/models/tbl_cinemalists");

const createCinema = (req, res, next) => {
  const body = req?.body;
  if (!body) return res.status(400).json({ message: "Please add data." });
  const cinemaList = cinemaModel.create({
    CinemaName: body?.cinemaName,
    CinemaLocation: body?.cinemaLocation,
  });
  console.log(cinemaList);
  return res.status(201).json({ message: "New Cinema was created." });
};

module.exports = { createCinema };
