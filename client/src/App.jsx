import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NormativaPage from './pages/NormativaPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import AlumnoDashboard from './pages/AlumnoDashboard';
import EmpresaDashboard from './pages/EmpresaDashboard';
import ProfesorDashboard from './pages/ProfesorDashboard';

import PlanFormativoPage from './components/planFormativo/PlanFormativo';
import DiarioPage from './pages/DiarioPage';
import VerDiario from './components/diario/VerDiario';
import RegistrarDiario from './components/diario/RegistrarDiario';
import PlanFormativoVisualizar from './components/planFormativo/PlanFormativoVisualizar';
import ResultadosAprendizaje from './components/planFormativo/ResultadosAprendizaje';
import ProtectedRoute from './components/ProtectedRoute';

const AUTHENTICATED_ROLES = ['administrador', 'alumno', 'tutor_profesor', 'tutor_empresa'];

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/normativa" element={<NormativaPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/dashboard" element={<ProtectedRoute rolPermitido="administrador"><AdminDashboard /></ProtectedRoute>} />
          <Route path="/alumno/dashboard" element={<ProtectedRoute rolPermitido="alumno"><AlumnoDashboard /></ProtectedRoute>} />
          <Route path="/empresa/dashboard" element={<ProtectedRoute rolPermitido="tutor_empresa"><EmpresaDashboard /></ProtectedRoute>} />
          <Route path="/profesor/dashboard" element={<ProtectedRoute rolPermitido="tutor_profesor"><ProfesorDashboard /></ProtectedRoute>} />
          <Route path="/diario" element={<ProtectedRoute rolesPermitidos={AUTHENTICATED_ROLES}><DiarioPage /></ProtectedRoute>} />
          <Route path="/plan-formativo" element={<ProtectedRoute rolesPermitidos={AUTHENTICATED_ROLES}><PlanFormativoPage /></ProtectedRoute>} />
          <Route path="/plan-formativo/:id/visualizar" element={<ProtectedRoute rolesPermitidos={AUTHENTICATED_ROLES}><PlanFormativoVisualizar /></ProtectedRoute>} />
         {/* error <Route path="/plan-formativo/:id/resultados" element={<ProtectedRoute rolesPermitidos={AUTHENTICATED_ROLES}><ResultadosAprendizaje /></ProtectedRoute>} /> */}
         
          <Route path="/diario/registrar" element={<ProtectedRoute rolesPermitidos={AUTHENTICATED_ROLES}><RegistrarDiario /></ProtectedRoute>} />
          <Route path="/diario/:id" element={<ProtectedRoute rolesPermitidos={AUTHENTICATED_ROLES}><VerDiario /></ProtectedRoute>} />
          {/* Agrega mas rutas segun sea necesario */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
