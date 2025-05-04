import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.png'; 


const Navbar = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <nav className="bg-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-10 w-10" />
          <div className="text-xl font-bold text-center">Gestión de Prácticas</div>
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)}>
              ☰
            </button>
          </div>
  
          <div className="hidden md:flex gap-4">
            <Link to="/">Inicio</Link>
            <Link to="/normativa">Normativa</Link>
            <Link to="/login">Login</Link>
          </div>
        </div>
  
        {/* Menú móvil */}
        {open && (
  <div className="fixed top-0 left-0 h-full w-1/2 bg-red-800 text-white p-6 z-50 transition-transform transform translate-x-0 md:hidden shadow-lg">
    <div className='flex justify-between items-center'>
    <img src={logo} alt="Logo" className="h-10 w-10" />
    <button
      className="mb-4 text-xl"
      onClick={() => setOpen(false)}
    >
      ✕

    </button>
    </div>
    <nav className="mt-6 flex flex-col gap-6">  
      <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>
      <Link to="/normativa" onClick={() => setOpen(false)}>Normativa</Link>
      <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
      {rol === 'alumno' && (
  <>
    <Link to="/plan-formativo" className="mx-2 text-white">Plan Formativo</Link>
    <Link to="/diario" className="mx-2 text-white">Diario</Link>
  </>
)}
      </nav>
  </div>
)}
      </nav>
    );
  };
  
  export default Navbar;