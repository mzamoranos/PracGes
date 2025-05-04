const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Alumno = sequelize.define('Alumno', {
    dni: {
        type: DataTypes.STRING(9),
        primaryKey: true,
        allowNull: false,
    },
    nombre: { 
        type: DataTypes.STRING(100), 
        allowNull: false 
    },
    apellidos: { 
         type: DataTypes.STRING(150), 
         allowNull: false 
    },
     email: { 
        type: DataTypes.STRING(150), 
         allowNull: false, 
         unique: true 
     },
     telefono: DataTypes.STRING(20),
     password: {
            type: DataTypes.STRING,
            allowNull: false,
    },
}, 

{
    timestamps: false,
    tableName: 'alumnos'
});

module.exports = Alumno;