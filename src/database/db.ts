import { Sequelize } from 'sequelize';

let sequelize = new Sequelize(
  "SpaComments",
  "postgres",
  "16121976",
  {
    dialect: "postgres",
    dialectOptions: {},
    host: "postgres",
    port: 5432,
  },
);

module.exports = sequelize;