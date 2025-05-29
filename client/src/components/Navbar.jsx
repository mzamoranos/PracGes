import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.png'; 

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dropdownPlanOpen, setDropdownPlanOpen] = useState(false);
  const [dropdownDiarioOpen, setDropdownDiarioOpen] = useState(false);
  const userData = JSON.parse(localStorage.getItem('userData'));  //el rol se guarda en el localStorage
  const rol = userData?.rol || null;
  const handleLogout = () => {
    localStorage.removeItem('userData');
    window.location.href = '/';
  };
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

            {rol === 'alumno' && (
            <>
              {/* Plan Formativo Dropdown */}
              <div
                className="relative"
                onClick={() => setDropdownPlanOpen(true)}
                onMouseDown={() => setDropdownDiarioOpen(false)}
              >
                <button className="hover:underline">Plan Formativo</button>
                {dropdownPlanOpen && (
                  <div className="absolute bg-white text-black rounded shadow-lg mt-2">
                    <Link to="/planformativo/visualizar" className="block px-4 py-2 hover:bg-gray-200">Visualizar Plan</Link>
                    <Link to="/planformativo/resultados" className="block px-4 py-2 hover:bg-gray-200">Resultados de Aprendizaje</Link>
                  </div>
              
               )}
              </div>

              {/* Diario Dropdown */}
              <div
                className="relative"
                onClick={() => setDropdownDiarioOpen(true)}
                onMouseDown={() => setDropdownPlanOpen(false)}
              >
                <button className="hover:underline">Diario</button>
                {dropdownDiarioOpen && (
                  <div className="absolute bg-white text-black rounded shadow-lg mt-2">
                    <Link to="/diario/registrar" className="block px-4 py-2 hover:bg-gray-200" >Registrar Actividades</Link>
                    <Link to="/diario/ver" className="block px-4 py-2 hover:bg-gray-200">Visualizar Diario</Link>
                  </div>
                )}
              </div>
              <div className="relative">
                <button className="hover:underline focus-visible:outline-none" onClick={handleLogout}>Logout</button>
                </div>
            </>

          )}

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
                <div className="mt-2">
                  <div className="font-semibold">Plan Formativo</div>
                  <Link to="/planformativo/visualizar" onClick={() => setOpen(false)} className="block pl-4 mt-4">Visualizar Plan</Link>
                  <Link to="/planformativo/RA" onClick={() => setOpen(false)} className="block pl-4 mt-4">Resultados de Aprendizaje</Link>
                </div>
                <div className="mt-2">
                  <div className="font-semibold">Diario</div>
                  <Link to="/diario/registrar" onClick={() => setOpen(false)} className="block pl-4 mt-4">Registrar Actividades</Link>
                  <Link to="/diario/ver" onClick={() => setOpen(false)} className="block pl-4 mt-4">Visualizar Diario</Link>
                </div>
                <div className="mt-2">
                <button className="hover:underline focus-visible:outline-none" onClick={handleLogout}>Logout</button>
                </div>
              </>
            )}
      </nav>

      
  </div>
)}
      </nav>
    );
  };
  
  export default Navbar;