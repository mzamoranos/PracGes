import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex items-center justify-center flex-1">
      <div className="bg-red-50 p-8 border border-red-300 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-red-800 mb-6">Iniciar sesión</h2>
        
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="block text-gray-800 font-medium mb-2">Correo electrónico</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-500"
              placeholder="Introduce tu correo"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Contraseña</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon-300"
              placeholder="Introduce tu contraseña"
            />
          </div>

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