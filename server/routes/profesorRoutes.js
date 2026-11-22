import { Router } from 'express';
const router = Router();

import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
import { getProfesor, getProfesorByDni } from '../controllers/profesorController.js';

router.get(
    '/me',
    authMiddleware,
    roleMiddleware('tutor_profesor'),
    getProfesor
  );

  router.get(
  '/:dni',
  authMiddleware,
  roleMiddleware([ 'tutor_profesor']),
  getProfesorByDni
);
  export default router;