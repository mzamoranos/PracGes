import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/Home';
import NormativaPage from './pages/Normativa';
import LoginPage from './pages/Login';
import AlumnoDashboard from './pages/Alumno';
import PlanFormativoPage from './components/planFormativo/PlanFormativo';
import DiarioPage from './pages/Diario';
import VerDiario from './components/diario/VerDiario';
import RegistrarDiario from './components/diario/RegistrarDiario';
import PlanFormativoVisualizar from './components/planFormativo/PlanFormativoVisualizar';
import ResultadosAprendizaje from './components/planFormativo/ResultadosAprendizaje';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/normativa" element={<NormativaPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/alumno/dashboard" element={<AlumnoDashboard />} />
          <Route path="/plan-formativo" element={<PlanFormativoPage />} />
          <Route path="/diario" element={<DiarioPage />} />
          <Route path="/plan-formativo/:id/visualizar" element={<PlanFormativoVisualizar />} />
          <Route path="/plan-formativo/:id/resultados" element={<ResultadosAprendizaje />} />
          <Route path="/diario/registrar" element={<RegistrarDiario />} />
          <Route path="/diario/:id" element={<VerDiario />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;