const Alumnos = require('../models/Alumno');

async function getAlumnoByDni(req, res) {
  try {
    const { dni } = req.params;

    const alumno = await Alumnos.findOne({
      where: { dni },
      attributes: ['dni', 'nombre', 'apellidos', 'telefono']
    });

    if (!alumno) {
      return res.status(404).json({ message: 'Alumno no encontrado' });
    }

    res.status(200).json(alumno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener datos de alumno' });
  }
}

module.exports = { getAlumnoByDni };
