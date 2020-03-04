const Sequelize = require('sequelize');
const UserModel = require('./models/userModel');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql'
  }
);

const User = UserModel(sequelize, Sequelize);

module.exports = User;
