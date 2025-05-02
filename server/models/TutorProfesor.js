const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TutorProfesor = sequelize.define('TutorProfesor', {
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
    tableName: 'tutores_profesores'
});

module.exports = TutorProfesor;