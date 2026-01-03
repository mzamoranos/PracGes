import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from '../images/Logo.png';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="page-layout">
      <Navbar />

      <main className="home-main">
        <img src={logo} alt="Gesprac" className="home-logo" />

        <h1 className="home-title">
          Bienvenido a GesPrac
        </h1>

        <p className="home-text">
          GesPrac surgió como una solución a la gestión de las prácticas de empresa que realizan
          los alumnos de la nueva FP Dual, manejando toda la documentación, calificación y
          comunicación entre el alumno, la empresa y el centro educativo.
        </p>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
