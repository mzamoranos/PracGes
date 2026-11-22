const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.js');

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
    descripcion: { type: DataTypes.TEXT, allowNull: false }
  }, 
  {
    tableName: 'diario',
    timestamps: false
  });
  
export default Diario;