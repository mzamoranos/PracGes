import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

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
  
  export default Modulo;