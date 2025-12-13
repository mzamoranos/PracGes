const { PlanFormativo } = require('../models');

// Crear un plan formativo
const crearPlanFormativo = async (req, res) => {
  const { dni, dni_TutProf, nif, fecha_inicio, fecha_fin, año } = req.body;

  try {
    const nuevoPlan = await PlanFormativo.create({
      dni,
      dni_TutProf,
      nif,
      fecha_inicio,
      fecha_fin,
      año,
      estado_PF: 'Activo',
    });

    res.status(201).json({ message: 'Plan formativo creado correctamente', plan: nuevoPlan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el plan formativo' });
  }
};

// Actualizar un plan formativo
const actualizarPlanFormativo = async (req, res) => {
  const { id } = req.params;
  const { dni, dni_TutProf, nif, fecha_inicio, fecha_fin, año, estado_PF } = req.body;

  try {
    const plan = await PlanFormativo.findByPk(id);
    if (!plan) {
      return res.status(404).json({ error: 'Plan formativo no encontrado' });
    }

    await plan.update({ dni, dni_TutProf, nif, fecha_inicio, fecha_fin, año, estado_PF });
    res.status(200).json({ message: 'Plan formativo actualizado correctamente', plan });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el plan formativo' });
  }
};

// Eliminar un plan formativo
const eliminarPlanFormativo = async (req, res) => {
  const { id } = req.params;

  try {
    const plan = await PlanFormativo.findByPk(id);
    if (!plan) {
      return res.status(404).json({ error: 'Plan formativo no encontrado' });
    }

    await plan.destroy();
    res.status(200).json({ message: 'Plan formativo eliminado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el plan formativo' });
  }
};

// Visualizar un plan formativo
const visualizarPlanFormativo = async (req, res) => {
  const { id } = req.params;

  try {
    const plan = await PlanFormativo.findByPk(id);
    if (!plan) {
      return res.status(404).json({ error: 'Plan formativo no encontrado' });
    }

    res.status(200).json(plan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el plan formativo' });
  }
};

module.exports = {
  crearPlanFormativo,
  actualizarPlanFormativo,
  eliminarPlanFormativo,
  visualizarPlanFormativo,
};