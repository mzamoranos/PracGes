import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode} from 'jwt-decode';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

      <div className="flex flex-col min-h-screen">
          <Navbar />
          <h2 className="text-3xl font-bold text-center text-red-800 mb-4 p-4">Iniciar sesión</h2>

          <main className="flex items-center justify-center flex-1">
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold text-red-800 mb-4">Bienvenido Alumno:</h1>
      <p className="text-lg text-gray-700">Usuario conectado: {userData.nombre} {userData.apellidos}, con DNI: {userData.dni}</p>
    </div>
  </main>
          <Footer />
      </div>
      );
    };
export default AlumnoDashboard;