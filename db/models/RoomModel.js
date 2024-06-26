// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = require("../dbconnection");
// const CinemaModel = require("./CinemaModel");
import Sequelize from "sequelize";
import { DataTypes } from "sequelize";
import sequelize from "../dbconnection.js";
import CinemaModel from "./CinemaModel.js";

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
  allowNull: false,
});
// RoomModel.belongsTo(CinemaModel);

// module.exports = RoomModel;
export default RoomModel;
