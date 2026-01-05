const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middleware/authMiddleware');
const diarioController = require('../controllers/diarioController');
const planFormativoController = require('../controllers/planFormativoController');
//const bcrypt = require('bcrypt');
//const jwt = require('jsonwebtoken');
require('dotenv').config();

// Route for user registration. de momento no se usa 
  //router.post('/register', authController.register);
// Route for user login
router.post('/login', authController.login);
//router.post('/diario', authMiddleware, diarioController.crearEntrada);
//router.get('/diario', authMiddleware, diarioController.visualizarEntradas);
//router.post('/plan-formativo', authMiddleware, planFormativoController.crearPlanFormativo);
//router.put('/plan-formativo/:id', authMiddleware, planFormativoController.actualizarPlanFormativo); 
//router.delete('/plan-formativo/:id', authMiddleware, planFormativoController.eliminarPlanFormativo);
//router.get('/plan-formativo/:id', authMiddleware, planFormativoController.visualizarPlanFormativo);
router.get('/profile', authMiddleware, authController.getProfile); // Route for getting user profile (protected)
router.get('/alumno', authMiddleware, authController.getAllAlumnos); // Route for getting all alumnos (protected)
  module.exports = router;