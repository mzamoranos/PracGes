const sequelize = require('../config/database');
const TutorEmpresa = require('../models/TutorEmpresa');
const TutorProfesor = require('../models/TutorProfesor');
const { cifrarContraseña } = require('../utils/hashUtils');

async function actualizarPasswordsTutores() {
  try {
    await sequelize.authenticate();
    console.log('Conectado a la base de datos.');

    const tutoresEmpresa = await TutorEmpresa.findAll();
    const tutoresProfesor = await TutorProfesor.findAll();

    for (const tutor of tutoresEmpresa) {
      const hashed = await cifrarContraseña(tutor.dni);
      tutor.password = hashed;
      await tutor.save();
      console.log(`Contraseña actualizada para tutor de empresa ${tutor.dni}`);
    }

    for (const tutor of tutoresProfesor) {
      const hashed = await cifrarContraseña(tutor.dni);
      tutor.password = hashed;
      await tutor.save();
      console.log(`Contraseña actualizada para tutor de centro ${tutor.dni}`);
    }

    console.log('Todas las contraseñas de tutores han sido actualizadas.');
    process.exit(0);
  } catch (error) {
    console.error('Error al actualizar contraseñas de tutores:', error);
    process.exit(1);
  }
}

actualizarPasswordsTutores();