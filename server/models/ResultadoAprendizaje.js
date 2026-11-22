import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ResultadoAprendizaje = sequelize.define('ResultadoAprendizaje', {
    cod_RA: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true },
    cod_modulo: {
      type: DataTypes.INTEGER,
      references: { 
        model: 'modulos', 
        key: 'cod_modulo' }
    },
    descripcion: { 
        type: DataTypes.TEXT, 
        allowNull: false }
  }, 
  {
    tableName: 'resultados_aprendizaje',
    timestamps: false
  });
  
  export default ResultadoAprendizaje;