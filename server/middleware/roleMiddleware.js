module.exports = (rolesPermitidos) => {
  return (req, res, next) => {
    if (!rolesPermitidos.includes(req.user.rol)) {
      return res.status(403).json({ message: 'Acceso denegado' });
    }
    next();
  };
};

/*

async function login(req, res) {
    try {
        const { dni, password } = req.body;

        let user = await Alumnos.findOne({ where: { dni } });
        let rol = 'alumno';

        if (!user) {
            user = await Profesores.findOne({ where: { dni } });
            rol = 'profesor';
        }

        if (!user) {
            user = await Empresas.findOne({ where: { nif: dni } });
            rol = 'empresa';
        }

        if (!user) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        const token = jwt.sign(
            { dni: user.dni || user.nif, rol },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.status(200).json({ message: 'Login autenticado', token, rol });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el login', error });
    }
}

async function getProfile(req, res) {
    try {
      res.status(200).json({
        message: 'Perfil del usuario',
        user: req.user
      });
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el perfil' });
    }
  }

  async function getAlumnoByDni(req, res) {
    try {
      const { dni } = req.params;
  
      const alumno = await Alumnos.findOne({
        where: { dni },
        attributes: ['dni', 'nombre', 'apellidos', 'telefono']
      });
  
      if (!alumno) {
        return res.status(404).json({ message: 'Alumno no encontrado' });
      }
  
      res.status(200).json(alumno);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al obtener datos de alumno' });
    }
  }
module.exports = { login, getProfile, getAlumnoByDni };    */   