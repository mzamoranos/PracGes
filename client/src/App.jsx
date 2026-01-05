import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NormativaPage from './pages/NormativaPage';
import LoginPage from './pages/LoginPage';
import AlumnoDashboard from './pages/AlumnoDashboard';
import PlanFormativoPage from './components/planFormativo/PlanFormativo';
import DiarioPage from './pages/DiarioPage';
import VerDiario from './components/diario/VerDiario';
import RegistrarDiario from './components/diario/RegistrarDiario';
import PlanFormativoVisualizar from './components/planFormativo/PlanFormativoVisualizar';
import ResultadosAprendizaje from './components/planFormativo/ResultadosAprendizaje';
import ProtectedRoute from './components/ProtectedRoute';



const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/normativa" element={<NormativaPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/alumno/dashboard" element={<ProtectedRoute rolPermitido="alumno"><AlumnoDashboard /></ProtectedRoute>} />

          <Route path="/diario" element={<ProtectedRoute rolPermitido="alumno"><DiarioPage /></ProtectedRoute>} />
          <Route path="/plan-formativo" element={<ProtectedRoute rolPermitido="alumno"><PlanFormativoPage /></ProtectedRoute>} />
          <Route path="/plan-formativo/:id/visualizar" element={<ProtectedRoute rolPermitido="alumno"><PlanFormativoVisualizar /></ProtectedRoute>} />
         {/* error <Route path="/plan-formativo/:id/resultados" element={<ProtectedRoute rolPermitido="alumno"><ResultadosAprendizaje /></ProtectedRoute>} /> */}
         
          <Route path="/diario/registrar" element={<ProtectedRoute rolPermitido="alumno"><RegistrarDiario /></ProtectedRoute>} />
          <Route path="/diario/:id" element={<ProtectedRoute rolPermitido="alumno"><VerDiario /></ProtectedRoute>} />
          {/* Agrega más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;