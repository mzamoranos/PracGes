function roleMiddleware(rolesPermitidos) {
  // Devuelve la función middleware real
  return (req, res, next) => {
    // req.user viene de authMiddleware (después de verificar el token)
    const { rol } = req.user;

    if (!rol) {
      return res.status(401).json({ message: 'No se ha definido el rol del usuario' });
    }

    // Comprueba si el rol del usuario está dentro de los permitidos
    if (!rolesPermitidos.includes(rol)) {
      return res.status(403).json({ message: 'Acceso no autorizado' });
    }

    next();
  };
}

module.exports = roleMiddleware;
