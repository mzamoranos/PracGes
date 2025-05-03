const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TutorEmpresa = sequelize.define('TutorEmpresa', {
    dni: {
        type: DataTypes.STRING,
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
       type: DataTypes.STRING(255), 
      allowNull: false 
    },
    nif: { 
      type: DataTypes.STRING(9), 
      references: { 
         model: 'empresas', 
         key: 'nif' 
       }  
    }
    }, 
{
    timestamps: false,
    tableName: 'tutores_empresas'
});

module.exports = TutorEmpresa;