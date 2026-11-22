import { Router } from 'express';
const router = Router();

import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
import alumnoController from '../controllers/alumnoController.js';

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
  roleMiddleware(['alumno']),
  alumnoController.getAlumnoByDni
);


export default router;