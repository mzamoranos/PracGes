const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    dni: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rol: {
        type: DataTypes.ENUM('alumno', 'tutor_profesor', 'tutor_empresa'),
        allowNull: false
    }
}, {
    timestamps: true,
    tableName: 'usuarios'  // nombre de la tabla
});

module.exports = User;