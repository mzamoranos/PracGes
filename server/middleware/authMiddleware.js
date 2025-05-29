const jwt = require('jsonwebtoken');

require('dotenv').config();

function authMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
  
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No se proporcionó token de autenticación' });
    }
    const token = authHeader.split(' ')[1]; // se extrae el token del encabezado
   
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // se guarda el payload del token
      next();
    } catch (error) {
      console.error('Error al verificar el token:', error);
      return res.status(403).json({ message: 'Token inválido o expirado' });
    }
  }
  module.exports = authMiddleware;