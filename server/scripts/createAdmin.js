require('dotenv').config();
const bcrypt = require('bcrypt');
const sequelize = require('../config/database');
const Administrador = require('../models/Administrador');

const SALT_ROUNDS = 10;

async function createAdmin() {
  const dni = (process.env.ADMIN_DNI || 'ADMIN0001').trim().toUpperCase();
  const nombre = process.env.ADMIN_NOMBRE || 'Administrador';
  const apellidos = process.env.ADMIN_APELLIDOS || 'Principal';
  const email = process.env.ADMIN_EMAIL || 'admin@pracges.local';
  const telefono = process.env.ADMIN_TELEFONO || null;
  const plainPassword = process.env.ADMIN_PASSWORD || 'admin1234';

  await sequelize.authenticate();
  await Administrador.sync();

  const password = await bcrypt.hash(plainPassword, SALT_ROUNDS);

  const [admin, created] = await Administrador.upsert({
    dni,
    nombre,
    apellidos,
    email,
    telefono,
    password,
  });

  console.log(created ? 'Administrador creado' : 'Administrador actualizado');
  console.log(`DNI: ${dni}`);
  console.log(`Email: ${email}`);
}

createAdmin()
  .catch((error) => {
    console.error('Error al crear administrador:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await sequelize.close();
  });
