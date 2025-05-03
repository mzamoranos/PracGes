const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ciclo = sequelize.define('Ciclo', {
    cod_ciclo: { 
        type: DataTypes.INTEGER, 
        primaryKey: true },
    nombre: { 
        type: DataTypes.STRING(255), 
        allowNull: false },
    nivel: { 
        type: DataTypes.INTEGER, 
        allowNull: false }
  }, {
    tableName: 'ciclos',
    timestamps: false
  });
  
  module.exports = Ciclo;
  