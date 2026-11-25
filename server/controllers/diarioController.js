import Diario from '../models/Diario.js';
async function crearEntrada(req, res) {
  const { fecha, horas, descripcion } = req.body;
  const dni = req.user?.dni; // si el middleware auth extrae el dni del token
  const nif = req.body.nif; // o lo pasas en el cuerpo de la solicitud
  //const id = req.params.id; // si el ID del diario se pasa como parámetro de ruta
  try {
    await Diario.create({ fecha, horas,descripcion, dni, nif, validado: false, observaciones_tutor: '' });
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
    const dni = req.user?.dni;

    if (!dni) {
      return res.status(401).json({ message: 'Usuario no autenticado' });
    }

    const entradas = await Diario.findAll({
      where: { dni },
      order: [['fecha', 'DESC'], ['id', 'DESC']],
    });

    return res.status(200).json(entradas);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: 'Error al obtener las entradas del diario',
    });
  }
}
  
  export default { visualizarEntradas, crearEntrada };