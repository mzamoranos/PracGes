const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
//const diarioController = require('../controllers/diarioController');
//const planFormativoController = require('../controllers/planFormativoController');
const Alumnos = require ('../models/Alumno');
const TutoresProfesores = require ('../models/TutorProfesor');
const TutoresEmpresas = require ('../models/TutorEmpresa');
const authController = require('../controllers/authController');

require('dotenv').config();

async function login  (req, res) {
    const { dni, password } = req.body;  
    console.log('Hash contraseña de frontend:', password);
        console.log('Hash contraseña en BD:', user.password);
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

            return res.status(401).json({ message: 'No existe DNI' });
        }
        
        console.log('Contraseña enviada:', password);
        const password = await bcrypt.hash(password, 10);
        console.log('Contraseña enviada y encriptada:', password);
        console.log('Contraseña en BD:', user.password);
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const token = jwt.sign(
            { dni: user.dni, rol },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ message: 'Login autenticado', token, rol,dni: user.dni});
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el login', error });
       
        
        
    }
}
module.exports = {login};