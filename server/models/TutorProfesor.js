import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const TutorProfesor = sequelize.define('TutorProfesor', {
    dni: { 
        type: DataTypes.STRING(9), 
        primaryKey: true },
    nombre: { 
        type: DataTypes.STRING(100), 
        allowNull: false },
    apellidos: { 
        type: DataTypes.STRING(150), 
        allowNull: false },
    email: { 
        type: DataTypes.STRING(150), 
        allowNull: false, 
        unique: true },
    telefono: DataTypes.STRING(20),
    password: { 
        type: DataTypes.STRING(255), 
        allowNull: false }
   
}, {
    timestamps: false,
    tableName: 'tutores_profesores'
});

export default TutorProfesor;