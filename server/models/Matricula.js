const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Matricula = sequelize.define('Matricula', {
    dni: {
      type: DataTypes.STRING(9),
      references: { model: 'alumnos', key: 'dni' },
      primaryKey: true
    },
    cod_modulo: {
      type: DataTypes.INTEGER,
      references: { model: 'modulos', key: 'cod_modulo' },
      primaryKey: true
    },
    año: { type: DataTypes.STRING, allowNull: false }
  }, {
    tableName: 'matricula',
    timestamps: false
  });
  
  module.exports = Matricula;