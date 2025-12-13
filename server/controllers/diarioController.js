const { Diario } = require('../models');
const crearEntrada = async (req, res) => {
    const { fecha, horas, descripcion } = req.body;
    const dni = req.userId; // si el middleware auth extrae el dni del token
  
    try {
      //await Diario.create({ fecha, horas, descripcion, dni });
      console.log('Datos recibidos:', { fecha, horas, descripcion, dni });
      res.status(201).json({ 
        message: 'Entrada registrada correctamente' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Error al guardar entrada en la base de datos' });
    }
  };
  module.exports = { crearEntrada };