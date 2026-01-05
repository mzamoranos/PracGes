const express = require('express');
const router = express.Router();

const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const empresaController = require('../controllers/empresaController');


router.get(
    '/me',
    authMiddleware,
    roleMiddleware('tutor_empresa'),
    empresaController.getEmpresa
  );
  
  router.get(
  '/:dni',
  authMiddleware,
  roleMiddleware([ 'admin']),
  empresaController.getEmpresaByDni
);
  module.exports = router;