const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const adminController = require('../controllers/adminController');

router.use(authMiddleware);
router.use(roleMiddleware(['administrador']));

router.get('/alumnos', adminController.listAlumnos);
router.post('/alumnos', adminController.createAlumno);

router.get('/tutores-profesores', adminController.listTutoresProfesores);
router.post('/tutores-profesores', adminController.createTutorProfesor);

router.get('/tutores-empresas', adminController.listTutoresEmpresas);
router.post('/tutores-empresas', adminController.createTutorEmpresa);

module.exports = router;
