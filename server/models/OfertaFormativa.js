const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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
  
  module.exports = OfertaFormativa;