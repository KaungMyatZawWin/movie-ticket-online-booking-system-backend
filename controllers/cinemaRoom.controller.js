const { QueryTypes } = require("sequelize");
const sequelize = require("../db/dbconnection");
const RoomModel = require("../db/models/RoomModel");

const createCinemaRoom = async (req, res, next) => {
  const body = req?.body;
  if (!body) return res.status(400).json({ message: "Required data field" });

  const room = await RoomModel.create({
    RoomNumber: body?.roomNumber,
    RoomName: body?.roomName,
    CinemaId: body?.cinemaId,
  });

  return res.status(201).json({
    status: "Success",
    message: "Successfully created room ",
    RespData: room,
  });
};

const getAllRooms = async (req, res, next) => {
  try {
    const rooms = await RoomModel.findAll();
    return res.status(200).json({
      status: "Success",
      isSuccess: true,
      isError: false,
      RespData: rooms,
    });
  } catch (error) {
    return res.status(400).json({
      status: "Failed",
      isSuccess: false,
      isError: true,
      message: error?.message,
    });
  }
};

const getRoomsWithTheirCinema = async (req, res, next) => {
  try {
    const rooms = await sequelize.query(
      `SELECT * FROM "Tbl_CinemaLists" JOIN "Tbl_CinemaRooms" ON "Tbl_CinemaLists".id = "Tbl_CinemaRooms".CinemaId;`,
      {
        type: QueryTypes.SELECT,
      }
    );

    return res.status(200).json({
      status: "Success",
      isSuccess: true,
      isError: false,
      RespData: rooms,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Failed",
      isSuccess: false,
      isError: true,
      message: error?.message,
    });
  }
};

module.exports = { createCinemaRoom, getAllRooms, getRoomsWithTheirCinema };
