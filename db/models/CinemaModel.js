const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../dbconnection");

const CinemaModel = sequelize.define(
  "Tbl_CinemaLists",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    CinemaName: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    CinemaLocation: {
      allowNull: false,
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
      type: Sequelize.STRING,
    },
  },
  {
    paranoid: true,
    freezeTableName: true,
    modelName: "Tbl_CinemaLists",
  }
);
// await CinemaModel.sync({ alter: true });
module.exports = CinemaModel;
