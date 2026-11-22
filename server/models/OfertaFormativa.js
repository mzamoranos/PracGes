import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const OfertaFormativa = sequelize.define('OfertaFormativa', {
    cod_ciclo: {
      type: DataTypes.INTEGER,
      references: { model: 'ciclos', key: 'cod_ciclo' }
    },
    cod_modulo: {
      type: DataTypes.INTEGER,
      references: { model: 'modulos', key: 'cod_modulo' }
    }
  }, {
    tableName: 'oferta_formativa',
    timestamps: false
  });
  
  export default OfertaFormativa;