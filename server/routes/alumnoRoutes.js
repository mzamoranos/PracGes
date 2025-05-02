const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/perfil', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Token no proporcionado' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ dni: decoded.dni, rol: decoded.rol });
  } catch (error) {
    res.status(401).json({ message: 'Token inválido' });
  }
});

module.exports = router;