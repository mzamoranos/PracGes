import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ dni, password }),
    });

    if (!response.ok) {
      throw new Error('Credenciales incorrectas');
    }

    const data = await response.json();

    localStorage.setItem('token', data.token);
    localStorage.setItem('rol', data.rol);

    // Redirige según el rol
    if (data.rol === 'alumno') {
      window.location.href = '/alumno/dashboard';
    } else if (data.rol === 'tutor_profesor') {
      window.location.href = '/profesor/dashboard';
    } else if (data.rol === 'tutor_empresa') {
      window.location.href = '/empresa/dashboard';
    }

  } catch (err) {
    console.error(err);
    setError('DNI o contraseña incorrectos');
  }
};


    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <h2 className="text-3xl font-bold text-center text-red-800 mb-4 p-4">Iniciar sesión</h2>

            <main className="flex items-center justify-center flex-1">
      
        
        <div className="bg-stone-200 p-8 border border-stone-300 rounded-2xl shadow-md w-full max-w-md">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="dni" className="bd-stone-200 block text-gray-800 font-medium mb-2">Usuario</label>
            <input
              type="text"
              id="dni"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-500"
              placeholder="Introduce tu dni"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-300"
              placeholder="Introduce tu contraseña"
            />
          </div>
              {error && <p className="text-red-600">{error}</p>}
          <button
            type="submit"
            className="bg-maroon-600 hover:bg-maroon-700 bg-red-800 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Entrar
          </button>
        </form>
      </div>
    
            </main>
            <Footer />
        </div>
    );
};
export default LoginPage;