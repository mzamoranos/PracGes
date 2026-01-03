import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  const [dni, setDni] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(e) {
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
console.log('Login exitoso:', data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('rol', data.rol);

      if (data.rol === 'alumno') {
        navigate('/alumno/dashboard');
      } else if (data.rol === 'tutor_profesor') {
        navigate('/profesor/dashboard');
      } else if (data.rol === 'tutor_empresa') {
        navigate('/empresa/dashboard');
      }

    } catch (err) {
      console.error(err);
      setError('DNI o contraseña incorrectos');
    }
  }

  return (
    <div className="page-layout">
      <Navbar />

      <h2 className="page-title">
        Iniciar sesión
      </h2>

      <main className="login-main">
        <div className="login-card">
          <form className="login-form" onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="dni">Usuario</label>
              <input
                type="text"
                id="dni"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                placeholder="Introduce tu DNI"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Introduce tu contraseña"
              />
            </div>

            {error && <p className="form-error">{error}</p>}

            <button type="submit" className="btn-primary">
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
