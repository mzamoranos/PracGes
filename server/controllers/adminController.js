const bcrypt = require('bcrypt');
const Alumnos = require('../models/Alumno');
const TutoresProfesores = require('../models/TutorProfesor');
const TutoresEmpresas = require('../models/TutorEmpresa');

const SALT_ROUNDS = 10;

function normalizeDni(dni) {
  return String(dni || '').trim().toUpperCase();
}

function buildRequiredError(fields, body) {
  const missingFields = fields.filter((field) => !body[field]);

  if (missingFields.length) {
    return `Faltan campos obligatorios: ${missingFields.join(', ')}`;
  }

  return null;
}

function sanitizeUser(user) {
  const data = user.toJSON();
  delete data.password;
  return data;
}

async function createUser(req, res, model, requiredFields, extraFields = []) {
  try {
    const missingError = buildRequiredError(requiredFields, req.body);

    if (missingError) {
      return res.status(400).json({ message: missingError });
    }

    const password = await bcrypt.hash(req.body.password, SALT_ROUNDS);
    const payload = {
      dni: normalizeDni(req.body.dni),
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      email: req.body.email,
      telefono: req.body.telefono || null,
      password,
    };

    extraFields.forEach((field) => {
      if (req.body[field] !== undefined) {
        payload[field] = req.body[field];
      }
    });

    const user = await model.create(payload);
    return res.status(201).json(sanitizeUser(user));
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ message: 'Ya existe un usuario con ese DNI o email' });
    }

    console.error(error);
    return res.status(500).json({ message: 'Error al crear el usuario' });
  }
}

async function listUsers(req, res, model) {
  try {
    const users = await model.findAll({
      attributes: { exclude: ['password'] },
      order: [['apellidos', 'ASC'], ['nombre', 'ASC']],
    });

    return res.status(200).json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error al obtener usuarios' });
  }
}

function createAlumno(req, res) {
  return createUser(req, res, Alumnos, ['dni', 'nombre', 'apellidos', 'email', 'password']);
}

function createTutorProfesor(req, res) {
  return createUser(req, res, TutoresProfesores, ['dni', 'nombre', 'apellidos', 'email', 'password']);
}

function createTutorEmpresa(req, res) {
  return createUser(
    req,
    res,
    TutoresEmpresas,
    ['dni', 'nombre', 'apellidos', 'email', 'password'],
    ['nif']
  );
}

function listAlumnos(req, res) {
  return listUsers(req, res, Alumnos);
}

function listTutoresProfesores(req, res) {
  return listUsers(req, res, TutoresProfesores);
}

function listTutoresEmpresas(req, res) {
  return listUsers(req, res, TutoresEmpresas);
}

module.exports = {
  createAlumno,
  createTutorProfesor,
  createTutorEmpresa,
  listAlumnos,
  listTutoresProfesores,
  listTutoresEmpresas,
};
