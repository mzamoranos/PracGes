import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AlumnoDashboard.css';

const AlumnoDashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ dni: '' });

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
    } else {
      try {
        const decoded = jwtDecode(token);
        setUserData({ dni: decoded.dni });
      } catch (error) {
        console.error('Token inválido:', error);
        navigate('/login');
      }
    }
  }, [navigate]);

  return (
    <div className="page-layout">
      <Navbar />

      <h2 className="page-title">
        Panel del Alumno
      </h2>

      <main className="dashboard-main">
        <div className="dashboard-card">
          <h1 className="dashboard-heading">Bienvenido Alumno</h1>
          <p className="dashboard-text">
            Usuario conectado con DNI: <strong>{userData.dni}</strong>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AlumnoDashboard;
