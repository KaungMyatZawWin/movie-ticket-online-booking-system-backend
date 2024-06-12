"use strict";
const { Sequelize } = require("sequelize");
const sequelize = require("../../config/database");

module.exports = sequelize.define(
  "Tbl_CinemaLists",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    CinemaName: {
      type: Sequelize.STRING,
    },
    CinemaLocation: {
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
