const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Modulo = sequelize.define('Modulo', {
    cod_modulo: { 
        type: DataTypes.INTEGER, 
        primaryKey: true },
    nombre: { 
        type: DataTypes.STRING(255), 
        allowNull: false }
  }, {
    tableName: 'modulos',
    timestamps: false
  });
  
  module.exports = Modulo;