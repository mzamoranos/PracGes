import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NormativaPage from './pages/NormativaPage';
import LoginPage from './pages/LoginPage';
import AlumnoDashboard from './pages/AlumnoDashboard';
import PlanFormativoPage from './pages/PlanFormativoPage';
import DiarioPage from './pages/DiarioPage';
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
          <Route path="/plan-formativo/visualizar" element={<PlanFormativoVisualizar />} />
          <Route path="/plan-formativo/resultados" element={<ResultadosAprendizaje />} />
          <Route path="/diario/registrar" element={<RegistrarDiario />} />
          <Route path="/diario/ver" element={<VerDiario />} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;