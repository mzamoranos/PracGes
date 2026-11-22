import { Router } from 'express';
const router = Router();

import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
import { getEmpresa, getEmpresaByDni } from '../controllers/empresaController.js';


router.get(
    '/me',
    authMiddleware,
    roleMiddleware('tutor_empresa'),
    getEmpresa
  );
  
  router.get(
  '/:dni',
  authMiddleware,
  roleMiddleware([ 'tutor_empresa']),
  getEmpresaByDni
);
  export default router;