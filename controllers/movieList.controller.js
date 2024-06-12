const cinemaModel = require("../db/models/tbl_cinemalists");

const addNewMovie = (req, res, next) => {
  res.json({
    status: "Success",
    message: "This is Movie List Controller",
  });
};

module.exports = { addNewMovie };
