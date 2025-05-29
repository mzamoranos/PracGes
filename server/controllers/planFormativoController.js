const PlanFormativo = require('../models/PlanFormativo');

// Crear un nuevo plan formativo
exports.crearPlanFormativo = async (req, res) => {
  const { dni_TutProf, nif, fecha_inicio, fecha_fin, año, estado_PF } = req.body;
  const dni = req.user.dni; // el middleware extrae el dni del token

  try {
    await PlanFormativo.create({
      dni,
      dni_TutProf,
      nif,
      fecha_inicio,
      fecha_fin,
      año,
      estado_PF: estado_PF || 'Activo'
    });

    res.status(201).json({ message: 'Plan formativo creado correctamente' });
  } catch (error) {
    console.error('Error al crear el plan formativo:', error);
    res.status(500).json({ error: 'Error al guardar el plan formativo en la base de datos' });
  }
};

// Visualizar plan formativo de un alumno por su dni
exports.visualizarPlanFormativo = async (req, res) => {
  const dni = req.user.dni;

  try {
    const planes = await PlanFormativo.findAll({ where: { dni } });

    if (planes.length === 0) {
      return res.status(404).json({ message: 'No se encontraron planes formativos para este alumno' });
    }

    res.status(200).json(planes);
  } catch (error) {
    console.error('Error al recuperar el plan formativo:', error);
    res.status(500).json({ error: 'Error al recuperar el plan formativo de la base de datos' });
  }
};