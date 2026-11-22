import { Router } from 'express';
const router = Router();

import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
import getAlumnoMe from '../controllers/alumnoController.js';
import getAlumnoByDni from '../controllers/alumnoController.js';

// Alumno autenticado (por token)
router.get(
  '/me',
  authMiddleware,
  roleMiddleware(['alumno']),
  getAlumnoMe
);

// Alumno por DNI (solo si lo necesitas)
router.get(
  '/:dni',
  authMiddleware,
  roleMiddleware(['alumno']),
  getAlumnoByDni
);


export default router;