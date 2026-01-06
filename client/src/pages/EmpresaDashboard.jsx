import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { jwtDecode } from 'jwt-decode';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Dashboard.css';

const EmpresaDashboard = () => {
  const navigate = useNavigate();
   const [tutor_empresa, setTutorEmpresa] = useState({ dni: '', nombre: '', apellidos: '', telefono: '' }); 
  
   //const [userData, setUserData] =  useState(null); useState({ dni: '', nombre: '', apellidos: '', telefono: '' }); 
   
 useEffect(() => {
    const token = localStorage.getItem('token');
    const rol = localStorage.getItem('rol');

    if (!token || rol !== 'tutor_profesor') {
      navigate('/login');
      return;
    }

    fetch('http://localhost:5000/api/tutor_empresa/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => {
        if (!res.ok) throw new Error('No autorizado');
        return res.json();
      })
      .then(data => setProfesor(data))
      .catch(() => navigate('/login'));
  }, [navigate]);

  if (!profesor) return <p>Cargando perfil del profesor...</p>;

  return (
    <div className="page-layout">
      <Navbar />

      <h2 className="page-title">
        Panel del Profesor
      </h2>

      <main className="dashboard-main">
        <div className="dashboard-card">
          <h1 className="dashboard-heading">Perfil {tutor_empresa.rol}</h1>
          <div className="dashboard-text">
            <p>Usuario conectado con DNI: <strong>{tutor_empresa.dni}</strong></p> 
            <p>Nombre: <strong>{tutor_empresa.nombre} {tutor_empresa.apellidos}</strong></p> 
            <p>Telefono: <strong>{tutor_empresa.telefono}</strong></p> 
            
            <strong>¡Gracias por ser parte de nuestra comunidad!</strong>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EmpresaDashboard;
