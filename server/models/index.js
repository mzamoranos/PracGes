const Alumno = require('./Alumno');
const Diario = require('./Diario');
const Empresa = require('./Empresa');
const Ciclo = require('./Ciclo');
const Matricula = require('./Matricula');
const OfertaFormativa = require('./OfertaFormativa');
const Modulo = require('./Modulo');
const PlanFormativo = require('./PlanFormativo');
const PlanFormativoResultado = require('./PlanFormativoResultado');
const ResultadoAprendizaje = require('./ResultadoAprendizaje');
const TutorEmpresa = require('./TutorEmpresa');
const TutorProfesor = require('./TutorProfesor');

// Aquí puedes definir las asociaciones entre los modelos si es necesario
// Por ejemplo:
// Alumno.hasMany(Matricula, { foreignKey: 'dni' });
// Matricula.belongsTo(Alumno, { foreignKey: 'dni' });

module.exports = {
  Alumno,
  Diario,
  Ciclo,
  Empresa,
  Matricula,
  OfertaFormativa,
  Modulo,
  PlanFormativo,
  PlanFormativoResultado,  
  ResultadoAprendizaje,
  TutorEmpresa,
  TutorProfesor,
};