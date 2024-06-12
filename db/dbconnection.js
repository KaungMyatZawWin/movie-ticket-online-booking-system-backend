const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "movie_ticket_management_db",
  "postgres",
  "kaizen",
  {
    host: "localhost",
    dialect: "postgres",
  },
  {
    logging: (...msg) => console.log(msg),
  }
);

module.exports = sequelize;
