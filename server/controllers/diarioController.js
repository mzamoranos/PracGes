import Diario from '../models/Diario.js';
async function crearEntrada(req, res) {
  const { fecha, horas, descripcion } = req.body;
  const dni = req.userId; // si el middleware auth extrae el dni del token
  const nif = req.body.nif; // o lo pasas en el cuerpo de la solicitud
  const id = req.params.id; // si el ID del diario se pasa como parámetro de ruta
  try {
    await Diario.create({ id, fecha, horas, descripcion, dni, nif });
    console.log('Datos recibidos:', { fecha, horas, descripcion, dni, nif });
    res.status(201).json({
      message: 'Entrada registrada correctamente'
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error al guardar entrada en la base de datos' });
  }
}

  async function visualizarEntradas(req, res) {
  try {
    // Lógica para obtener las entradas del diario
    res.status(200).json({ message: 'Entradas obtenidas correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las entradas del diario' });
  }
}
  
  export default { visualizarEntradas, crearEntrada };