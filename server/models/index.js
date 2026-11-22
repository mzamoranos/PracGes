const Alumno = require('./Alumno').default;
const Diario = require('./Diario');
const Empresa = require('./Empresa').default;
const Ciclo = require('./Ciclo').default;
const Matricula = require('./Matricula').default;
const OfertaFormativa = require('./OfertaFormativa').default;
const Modulo = require('./Modulo').default;
const PlanFormativo = require('./PlanFormativo').default;
const PlanFormativoResultado = require('./PlanFormativoResultado').default;
const ResultadoAprendizaje = require('./ResultadoAprendizaje').default;
const TutorEmpresa = require('./TutorEmpresa').default;
const TutorProfesor = require('./TutorProfesor').default;

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