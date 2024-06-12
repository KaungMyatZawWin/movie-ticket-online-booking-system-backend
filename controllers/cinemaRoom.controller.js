const RoomModel = require("../db/models/RoomModel");

const createCinemaRoom = async (req, res, next) => {
  const body = req?.body;
  if (!body) return res.status(400).json({ message: "Required data field" });

  const room = await RoomModel.create({
    RoomNumber: body?.roomNumber,
    RoomName: body?.roomName,
    CinemaId: body?.cinemaId,
  });

  console.log("checking room ... ", room);
  return res
    .status(201)
    .json({ status: "Success", message: "Successfully created room " });
};

module.exports = { createCinemaRoom };
