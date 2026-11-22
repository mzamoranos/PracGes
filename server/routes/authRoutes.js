import { Router } from 'express';
const router = Router();
import login from '../controllers/authController.js';

import authMiddleware from '../middleware/authMiddleware.js';
import diarioController from '../controllers/diarioController.js';
import planFormativoController from '../controllers/planFormativoController.js';
//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');
require('dotenv').config();

// Route for user registration. de momento no se usa 
  //router.post('/register', authController.register);
// Route for user login
router.post('/login', login);
//router.post('/diario', authMiddleware, diarioController.crearEntrada);
//router.get('/diario', authMiddleware, diarioController.visualizarEntradas);
//router.post('/plan-formativo', authMiddleware, planFormativoController.crearPlanFormativo);
//router.put('/plan-formativo/:id', authMiddleware, planFormativoController.actualizarPlanFormativo); 
//router.delete('/plan-formativo/:id', authMiddleware, planFormativoController.eliminarPlanFormativo);
//router.get('/plan-formativo/:id', authMiddleware, planFormativoController.visualizarPlanFormativo);
router.get('/profile, getProfile', authMiddleware); //, getProfile- Route for getting user profile (protected)
//router.get('/alumno', authMiddleware, authController.getAllAlumnos); // Route for getting all alumnos (protected)
  export default router;