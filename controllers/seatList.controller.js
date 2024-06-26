const SeatModel = require("../db/models/SeatModel");

const createSeat = async (req, res, next) => {
  if (!req?.body) res.status(400).json({ message: "Required data!" });
  try {
    const { seatNo, rowName, seatType, roomId } = req?.body;

    const seatLists = await SeatModel.create({
      SeatNo: seatNo,
      RowName: rowName,
      SeatType: seatType,
      RoomId: roomId,
    });
    return res.status(200).json({
      status: "Success",
      message: "Successfully created seat",
      RespData: seatLists,
    });
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
};

module.exports = { createSeat };
