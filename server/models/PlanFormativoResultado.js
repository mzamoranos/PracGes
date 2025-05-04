const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const PlanFormativoResultado = sequelize.define('PlanFormativoResultado', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    id_plan: {
      type: DataTypes.INTEGER,
      references: { model: 'planes_formativos', key: 'id' }
    },
    cod_RA: {
      type: DataTypes.INTEGER,
      references: { model: 'resultados_aprendizaje', key: 'cod_RA' }
    },
    estado_calificacion: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'plan_formativo_resultados',
    timestamps: false
  });
  
  module.exports = PlanFormativoResultado;