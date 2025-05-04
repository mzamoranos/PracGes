const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Diario = sequelize.define('Diario', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    dni: {
      type: DataTypes.STRING(9),
      references: { model: 'alumnos', key: 'dni' }
    },
    nif: {
      type: DataTypes.STRING(9),
      references: { model: 'empresas', key: 'nif' }
    },
    fecha: { type: DataTypes.DATE, allowNull: false },
    horas: { type: DataTypes.INTEGER, allowNull: false },
    descripcion: DataTypes.TEXT
  }, {
    tableName: 'diario',
    timestamps: false
  });
  
  module.exports = Diario;