const bcrypt = require('bcrypt');

const saltRounds = 10;

async function cifrarContraseña(contraseña) {
  return await bcrypt.hash(contraseña, saltRounds);
}

async function compararContraseña(contraseña, hash) {
  return await bcrypt.compare(contraseña, hash);
}

module.exports = {
  cifrarContraseña,
  compararContraseña,
};