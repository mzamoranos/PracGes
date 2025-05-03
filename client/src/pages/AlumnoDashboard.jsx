import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode} from 'jwt-decode';

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold text-red-800 mb-4">Bienvenido Alumno</h1>
      <p className="text-lg text-gray-700">DNI: {userData.dni}</p>
      {/* Aquí podrías mostrar datos del alumno obtenidos del backend */}
    </div>
  );
};

export default AlumnoDashboard;