import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const PlanFormativo = sequelize.define('PlanFormativo', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    dni: {
      type: DataTypes.STRING(9),
      references: { model: 'alumnos', key: 'dni' }
    },
    dni_TutProf: {
      type: DataTypes.STRING(9),
      references: { model: 'tutores_profesores', key: 'dni' }
    },
    nif: {
      type: DataTypes.STRING(9),
      references: { model: 'empresas', key: 'nif' }
    },
    fecha_inicio: { type: DataTypes.DATE, allowNull: false },
    fecha_fin: { type: DataTypes.DATE, allowNull: false },
    año: { type: DataTypes.INTEGER, allowNull: false },
    estado_PF: { type: DataTypes.STRING(50), defaultValue: 'Activo' }
  }, {
    tableName: 'planes_formativos',
    timestamps: false
  });

export default PlanFormativo;