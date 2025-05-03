const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Alumnos = require ('../models/Alumno');
const TutoresProfesores = require ('../models/TutorProfesor');
const TutoresEmpresas = require ('../models/TutorEmpresa');

async function login(req, res) {
    const { dni, password } = req.body;

    try {
        let user = await Alumnos.findOne({ where: { dni } });
        let rol = 'alumno';

        if (!user) {
            user = await TutoresProfesores.findOne({ where: { dni } });
            rol = 'tutor_profesor';
        }
        if (!user) {
            user = await TutoresEmpresas.findOne({ where: { dni } });
            rol = 'tutor_empresa';
        }

        if (!user) {

            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
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
module.exports = {login };