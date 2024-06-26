const { Sequelize } = require("sequelize");
const sequelize = require("../dbconnection");
const RoomModel = require("./RoomModel");

const SeatModel = sequelize.define(
  "Tbl_RoomSeat",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    SeatNo: {
      allowNull: false,
      type: Sequelize.INTEGER,
    },
    RowName: {
      type: Sequelize.STRING,
    },
    SeatType: {
      type: Sequelize.STRING,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    deletedAt: {
      type: Sequelize.DATE,
    },
  },
  {
    freezeTableName: true,
    modelName: "Tbl_RoomSeat",
  }
);

RoomModel.hasMany(SeatModel, {
  foreignKey: "RoomId",
  allowNull: false,
});
// SeatModel.belongsTo(RoomModel);

module.exports = SeatModel;
