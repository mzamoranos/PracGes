const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const profesorController = require('../controllers/profesorController');

router.get(
    '/me',
    authMiddleware,
    roleMiddleware('tutor_profesor'),
    profesorController.getProfesor
  );

  router.get(
  '/:dni',
  authMiddleware,
  roleMiddleware([ 'tutor_profesor']),
  profesorController.getProfesorByDni
);
  module.exports = router;