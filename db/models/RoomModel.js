const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../dbconnection");
const CinemaModel = require("./CinemaModel");

const RoomModel = sequelize.define(
  "Tbl_CinemaRooms",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    RoomNumber: {
      type: Sequelize.INTEGER,
    },
    RoomName: {
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
    paranoid: true,
    freezeTableName: true,
    modelName: "Tbl_CinemaRooms",
  }
);

CinemaModel.hasMany(RoomModel, {
  foreignKey: "CinemaId",
});
RoomModel.belongsTo(CinemaModel);

// await RoomModel.sync({ alter: true });

module.exports = RoomModel;
