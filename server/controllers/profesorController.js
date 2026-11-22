import jwt from 'jsonwebtoken';
//require('dotenv').config();   
import TutoresProfesores from '../models/TutorProfesor.js';

async function getProfesor(req, res) {
    try {
        // El DNI y rol vienen del token (authMiddleware)
        const { dni, rol } = req.user;
        
        // Seguridad: solo tutores de profesor
        if (rol !== 'tutor_profesor') {
            return res.status(403).json({ message: 'Acceso no autorizado' });
        }
        const profesor = await TutoresProfesores.findOne({
            where: { dni },
            attributes: ['dni', 'nombre', 'apellidos', 'telefono']
        });
        
        if (!profesor) {
            return res.status(404).json({ message: 'Profesor no encontrado' });
        }
                
        res.status(200).json(profesor);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error al obtener datos del profesor' });
    }
}

async function getProfesorByDni(req, res) {
    try {
      const { dni } = req.params;
  
      const profesor = await TutoresProfesores.findOne({
        where: { dni },
        attributes: ['dni', 'nombre', 'apellidos', 'telefono']
      });
  
      if (!profesor) {
        return res.status(404).json({ message: 'Profesor no encontrado' });
      }
  
      res.status(200).json(profesor);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener datos del profesor' });
    }
  }
  
  export default { getProfesor, getProfesorByDni };    