import { Router } from 'express';
const router = Router();

import authMiddleware from '../middleware/authMiddleware.js';
import roleMiddleware from '../middleware/roleMiddleware.js';
import { listAlumnos, createAlumno, listTutoresProfesores, createTutorProfesor, listTutoresEmpresas, createTutorEmpresa } from '../controllers/adminController.js';

router.use(authMiddleware);
router.use(roleMiddleware(['administrador']));

router.get('/alumnos', listAlumnos);
router.post('/alumnos', createAlumno);

router.get('/tutores-profesores', listTutoresProfesores);
router.post('/tutores-profesores', createTutorProfesor);

router.get('/tutores-empresas', listTutoresEmpresas);
router.post('/tutores-empresas', createTutorEmpresa);

export default router;