const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const User = require('../models/User');
// Route for user registration. de momento no se usa 
//router.post('/register', authController.register);

// Route for user login
router.post('/login', authController.login);

// Route for getting user profile (protected)
//router.get('/profile', authController.getProfile);




  module.exports = router;