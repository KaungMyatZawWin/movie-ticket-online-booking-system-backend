const { Sequelize } = require("sequelize");
const sequelize = require("../dbconnection");
const RoomModel = require("./RoomModel");

const SeatPriceModel = sequelize.define(
  "Tbl_SeatPrice",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    RowName: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    SeatPrice: {
      allowNull: false,
      type: Sequelize.INTEGER,
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
    modelName: "Tbl_SeatPrice",
  }
);
RoomModel.hasMany(SeatPriceModel, {
  foreignKey: "RoomId",
});

module.exports = SeatPriceModel;
