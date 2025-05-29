const authMiddleware = require('../middleware/authMiddleware');
const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const diarioController = require('../controllers/diarioController');
const planFormativoController = require('../controllers/planFormativoController');
require('dotenv').config();

// Route for user registration. de momento no se usa 
//router.post('/register', authController.register);
// Route for user login
router.post('/login', login);
router.post('/diario', authMiddleware, diarioController.crearEntrada);
router.post('/diario/visualizar', authMiddleware, diarioController.visualizarEntradas);
router.post('/planFormativo/visualizar', authMiddleware, planFormativoController.visualizarPlanFormativo);
router.post('/planformativo', authMiddleware, planFormativoController.crearPlanFormativo);// Route for getting user profile (protected)
//router.get('/profile', authController.getProfile);

module.exports = router;