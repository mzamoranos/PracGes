import { compare } from 'bcrypt';
import pkg from 'jsonwebtoken';
const { sign } = pkg;
//import { sign } from 'jsonwebtoken';
//require('dotenv').config();

import Administradores from '../models/Administrador.js';
import Alumnos from '../models/Alumno.js';
import TutoresProfesores from '../models/TutorProfesor.js';
import TutoresEmpresas from '../models/TutorEmpresa.js';

async function login(req, res) {
    const { dni, password } = req.body;
    const normalizedDni = String(dni || '').trim().toUpperCase();

    try {
        let user = await Administradores.findOne({ where: { dni: normalizedDni } });
        let rol = 'administrador';

        if (!user) {
            user = await Alumnos.findOne({ where: { dni: normalizedDni } });
            rol = 'alumno';
        }
        if (!user) {
            user = await TutoresProfesores.findOne({ where: { dni: normalizedDni } });
            rol = 'tutor_profesor';
        }
        if (!user) {
            user = await TutoresEmpresas.findOne({ where: { dni: normalizedDni } });
            rol = 'tutor_empresa';
        }

        if (!user) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const isMatch = await compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const token = sign(
            { dni: user.dni, rol },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ message: 'Login autenticado', token, rol });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el login', error });
    }
}

async function getProfile(req, res) {
    try {
      res.status(200).json({
        message: 'Perfil del usuario',
        user: req.user
      });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el perfil' });
    }
  }

 
  export default { login, getProfile };