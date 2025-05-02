import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import NormativaPage from './pages/NormativaPage';
import LoginPage from './pages/LoginPage';
import AlumnoDashboard from './pages/AlumnoDashboard';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/normativa" element={<NormativaPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/alumno/dashboard" element={<AlumnoDashboard />} />
          {/* Aquí puedes agregar más rutas según sea necesario */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;