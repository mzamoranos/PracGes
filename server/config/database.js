require('dotenv').config();
const { Sequelize } = require('sequelize');
const config = require('./config');
const {db} = require('./config');

const { user, host, database, password, port } = config.db;

const sequelize = new Sequelize(database, user, password, {
  host,
  port,
  dialect: 'postgres',
  logging: false
});

module.exports = sequelize;

