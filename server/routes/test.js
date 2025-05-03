const express = require('express');
const router = express.Router();
const sequelize = require('../config/database');

router.get('/db-test', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.status(200).send('Conexión exitosa con la base de datos');
  } catch (error) {
    console.error('Error de conexión:', error);
    res.status(500).send('Error de conexión con la base de datos');
  }
});

module.exports = router;