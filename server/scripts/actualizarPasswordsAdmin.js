const sequelize = require('../config/database').default;
const { cifrarContraseña } = require('../utils/hashUtils');
const Administradores = require('../models/Administrador').default;
const { findAll } = Administradores;

async function actualizarPasswordsAdmin() {
  try {
    await sequelize.authenticate();
    //console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
    //console.log('tipo DB_PASSWORD:', typeof process.env.DB_PASSWORD);
    console.log('Conectado a la base de datos.');

    const administradores = await findAll();

    for (const administrador of administradores) {
      const hashed = await cifrarContraseña(administrador.dni); // usa el DNI como contraseña por defecto
      administrador.password = hashed;
      await administrador.save();
      console.log(`Contraseña actualizada para ${administrador.dni}`);
    }

    console.log('Todas las contraseñas han sido actualizadas.');
    process.exit(0);
  } catch (error) {
    console.error('Error al actualizar contraseñas:', error);
    process.exit(1);
  }
}

actualizarPasswordsAdmin();