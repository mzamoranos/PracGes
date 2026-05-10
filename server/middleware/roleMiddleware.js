function roleMiddleware(rolesPermitidos) {
  const roles = Array.isArray(rolesPermitidos) ? rolesPermitidos : [rolesPermitidos];

  return (req, res, next) => {
    const { rol } = req.user;

    if (!rol) {
      return res.status(401).json({ message: 'No se ha definido el rol del usuario' });
    }

    if (!roles.includes(rol)) {
      return res.status(403).json({ message: 'Acceso no autorizado' });
    }

    next();
  };
}

module.exports = roleMiddleware;
