const SeatPriceModel = require("../db/models/SeatPriceModel");

const createSeatPrice = async (req, res, next) => {
  if (!req?.body) return res.status(400).json({ message: "Required data!" });

  try {
    const { roomId, rowName, seatPrice } = req?.body;
    const priceLists = await SeatPriceModel.create({
      RoomId: roomId,
      RowName: rowName,
      SeatPrice: seatPrice,
    });
    return res.status(200).json({
      status: "Success",
      message: "Successfully created seat price",
      RespData: priceLists,
    });
  } catch (error) {
    res.status(400).json({ message: error?.message });
  }
};

module.exports = { createSeatPrice };
