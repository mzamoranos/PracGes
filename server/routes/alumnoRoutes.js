const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const alumnoController = require('../controllers/alumnoController');

// Alumno autenticado (por token)
router.get(
  '/me',
  authMiddleware,
  roleMiddleware(['alumno']),
  alumnoController.getAlumnoMe
);

// Alumno por DNI (solo si lo necesitas)
router.get(
  '/:dni',
  authMiddleware,
  roleMiddleware(['tutor_profesor', 'tutor_empresa', 'admin']),
  alumnoController.getAlumnoByDni
);


module.exports = router;