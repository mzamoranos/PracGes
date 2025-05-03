const sequelize = require('../config/database');
const Alumnos = require('../models/Alumno');
const { cifrarContraseña } = require('../utils/hashUtils');

async function actualizarPasswordsAlumno() {
  try {
    await sequelize.authenticate();
    console.log('Conectado a la base de datos.');

    const alumnos = await Alumnos.findAll();

    for (const alumno of alumnos) {
      const hashed = await cifrarContraseña(alumno.dni); // usa el DNI como contraseña por defecto
      alumno.password = hashed;
      await alumno.save();
      console.log(`Contraseña actualizada para ${alumno.dni}`);
    }

    console.log('Todas las contraseñas han sido actualizadas.');
    process.exit(0);
  } catch (error) {
    console.error('Error al actualizar contraseñas:', error);
    process.exit(1);
  }
}

actualizarPasswordsAlumno();