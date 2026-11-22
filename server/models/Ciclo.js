import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

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
  
  export default Ciclo;
  