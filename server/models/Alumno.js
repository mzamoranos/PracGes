const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Alumno = sequelize.define('Alumno', {
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
    tableName: 'alumnos'
});

module.exports = Alumno;