import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import todoFPLogo from '../images/todofp.png';
import educacionNavarraLogo from '../images/educacionnavarra.png';
import centroEducativoLogo from '../images/centroeducativo.png';

const NormativaPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
        <Navbar /> 

    <div className="flex flex-col min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4 text-red-800 text-center">Normativa y más</h1>

      <div className="flex flex-col md:flex-row flex-1 gap-4">
        <a
          href="https://www.todofp.es"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-white border border-red-300 rounded-lg shadow-lg p-8 flex flex-col items-center justify-center hover:bg-red-100 transition"
        >
            <img src={todoFPLogo} alt="TodoFP" className="w-24 h-24 object-contain mb-4" />
          <h2 className="text-2xl font-semibold text-red-800 mb-4 text-center">TodoFP</h2>
          <p className="text-gray-600 text-center">Información oficial del Ministerio sobre Formación Profesional.</p>
        </a>

        <a
          href="https://www.educacion.navarra.es"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-white border border-red-300 rounded-lg shadow-lg p-8 flex flex-col items-center justify-center hover:bg-red-100 transition"
        >
            <img src={educacionNavarraLogo} alt="Educación Navarra" className="w-24 h-24 object-contain mb-4" />
          <h2 className="text-2xl font-semibold text-red-800 mb-4 text-center">Educación Navarra</h2>
          <p className="text-gray-600 text-center">Portal educativo del Gobierno de Navarra.</p>
        </a>

        <a
          href="https://cipetitudela.web.educacion.navarra.es/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-white border border-red-300 rounded-lg shadow-lg p-8 flex flex-col items-center justify-center hover:bg-red-100 transition"
        >
         <img src={centroEducativoLogo} alt="Centro Educativo" className="w-24 h-24 object-contain mb-4" />
          <h2 className="text-2xl font-semibold text-red-800 mb-4 text-center">IES Centro Educativo</h2>
          <p className="text-gray-800 text-center">Página web oficial del centro educativo.</p>
        </a>
      </div>

        </div>
            <Footer />
        </div>
    );
};

export default NormativaPage;