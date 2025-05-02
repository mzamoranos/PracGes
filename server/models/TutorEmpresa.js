const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TutorEmpresa = sequelize.define('TutorEmpresa', {
    dni: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
   
}, {
    timestamps: false,
    tableName: 'tutores_empresas'
});

module.exports = TutorEmpresa;