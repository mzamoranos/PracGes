const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Empresa = sequelize.define('Empresa', {
    nif: { 
        type: DataTypes.STRING(9), 
        primaryKey: true 
    },
    nombre: { 
        type: DataTypes.STRING(255), 
        allowNull: false 
    },
    direccion: DataTypes.TEXT,
    telefono: DataTypes.STRING(20),
    email: { 
        type: DataTypes.STRING(150), 
        allowNull: false, 
        unique: true 
    }
  }, 
  
  {
    tableName: 'empresas',
    timestamps: false
  });
  
  module.exports = Empresa;