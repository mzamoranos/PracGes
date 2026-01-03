import { findOne } from '../models/Alumno';

async function getAlumnoMe(req, res) {
  try {
    // El DNI viene del token (authMiddleware)
    const { dni, rol } = req.user;

    // Seguridad: solo alumnos
    if (rol !== 'alumno') {
      return res.status(403).json({ message: 'Acceso no autorizado' });
    }

    const alumno = await findOne({
      where: { dni },
      attributes: ['dni', 'nombre', 'apellidos', 'telefono']
    });

    if (!alumno) {
      return res.status(404).json({ message: 'Alumno no encontrado' });
    }

    res.status(200).json(alumno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener datos del alumno' });
  }
}

async function getAlumnoByDni(req, res) {
  try {
    const { dni } = req.params;

    const alumno = await findOne({
      where: { dni },
      attributes: ['dni', 'nombre', 'apellidos', 'telefono']
    });

    if (!alumno) {
      return res.status(404).json({ message: 'Alumno no encontrado' });
    }

    res.status(200).json(alumno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener datos del alumno' });
  }
}

export default { getAlumnoMe, getAlumnoByDni };
