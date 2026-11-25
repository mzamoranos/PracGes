import React, { useState } from 'react';
import RegistrarDiario from '../components/diario/RegistrarDiario';
import VerDiario from '../components/diario/VerDiario';
import './DiarioPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DiarioPage = () => {
  const [vista, setVista] = useState('registrar'); // registrar | visualizar

  return (
    <div className="diario-container">
      <Navbar />
      <h1 className="diario-title">Gestión del Diario</h1>

      <div className="diario-tabs">
        <button
          onClick={() => setVista('registrar')}
          className={`tab-button ${vista === 'registrar' ? 'active' : ''}`}
        >
          Registrar actividades
        </button>

        <button
          onClick={() => setVista('visualizar')}
          className={`tab-button ${vista === 'visualizar' ? 'active' : ''}`}
        >
          Visualizar diario
        </button>
      </div>

      {vista === 'registrar' ? <RegistrarDiario /> : <VerDiario />}
      <Footer />
    </div>
  );
};

export default DiarioPage;
