const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Route for user registration. de momento no se usa 
//router.post('/register', authController.register);

// Route for user login
router.post('/login', authController.login);
router.post('/diario', authMiddleware, diarioController.crearEntrada);
router.post('/diario/visualizar', authMiddleware, diarioController.visualizarEntradas);
router.post('/plan-formativo', authMiddleware, planFormativoController.crearPlanFormativo);
router.post('/plan-formativo/visualizar', authMiddleware, planFormativoController.visualizarPlanFormativo);
// Route for getting user profile (protected)
//router.get('/profile', authController.getProfile);


  module.exports = router;