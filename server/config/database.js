const { Sequelize } = require('sequelize');
require('dotenv').config();
const host = process.env.DB_HOST;
const database = process.env.DB_NAME;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT || 5432;
const sequelize = new Sequelize(database, user, String(password), {
  host,
  port: Number(port),
  dialect: 'postgres',
  logging: false
});

// Test  de conexión a la base de datos
sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });
export default sequelize;

