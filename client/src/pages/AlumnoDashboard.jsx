import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { jwtDecode } from 'jwt-decode';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AlumnoDashboard.css';

const AlumnoDashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ dni: '', nombre: '', apellidos: '', telefono: '' }); 

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/login');
      return;
    } 
    fetch(`http://localhost:5000/api/alumno/me`
    , {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })  
    .then(res => {
      if (res.status === 401 || res.status === 403) {
        throw new Error('No autorizado');
      }
        return res.json();
      
      })
      .then(data => setUserData(data))
      .catch(err => {
        console.error(err);
        navigate('/login');
      });

     }
  , [navigate]);

  return (
    <div className="page-layout">
      <Navbar />

      <h2 className="page-title">
        Panel del Alumno
      </h2>

      <main className="dashboard-main">
        <div className="dashboard-card">
          <h1 className="dashboard-heading">Bienvenido {userData.rol}</h1>
          <div className="dashboard-text">
            <p>Usuario conectado con DNI: <strong>{userData.dni}</strong></p> 
            <p>Nombre: <strong>{userData.nombre} {userData.apellidos}</strong></p> 
            <p>Telefono: <strong>{userData.telefono}</strong></p> 
            
            <strong>¡Gracias por ser parte de nuestra comunidad!</strong>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AlumnoDashboard;
