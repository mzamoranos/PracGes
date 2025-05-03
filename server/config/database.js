require('dotenv').config();
const { Sequelize } = require('sequelize');
const config = require('./config');
const {db} = require('./config');

const { user, host, database, password, port } = config.db;

const sequelize = new Sequelize(database, user, password, {
  host: 'localhost',
  port,
  dialect: 'postgres',
  logging: false
});

// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });
module.exports = sequelize;

