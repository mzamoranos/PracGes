import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import todoFPLogo from '../images/todofp.png';
import educacionNavarraLogo from '../images/educacionnavarra.png';
import centroEducativoLogo from '../images/centroeducativo.png';
import './NormativaPage.css';

const NormativaPage = () => {
  return (
    <div className="page-layout">
      <Navbar />

      <main className="normativa-container">
        <h1 className="page-title">
          Normativa y más
        </h1>

        <div className="normativa-grid">

          <a
            href="https://www.todofp.es"
            target="_blank"
            rel="noopener noreferrer"
            className="normativa-card"
          >
            <img src={todoFPLogo} alt="TodoFP" />
            <h2>TodoFP</h2>
            <p>Información oficial del Ministerio sobre Formación Profesional.</p>
          </a>

          <a
            href="https://www.educacion.navarra.es"
            target="_blank"
            rel="noopener noreferrer"
            className="normativa-card"
          >
            <img src={educacionNavarraLogo} alt="Educación Navarra" />
            <h2>Educación Navarra</h2>
            <p>Portal educativo del Gobierno de Navarra.</p>
          </a>

          <a
            href="https://cipetitudela.web.educacion.navarra.es/"
            target="_blank"
            rel="noopener noreferrer"
            className="normativa-card"
          >
            <img src={centroEducativoLogo} alt="Centro Educativo" />
            <h2>IES Centro Educativo</h2>
            <p>Página web oficial del centro educativo.</p>
          </a>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NormativaPage;
