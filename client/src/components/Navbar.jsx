import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/Logo.png';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownPlanOpen, setDropdownPlanOpen] = useState(false);
  const [dropdownDiarioOpen, setDropdownDiarioOpen] = useState(false);

  const rol = 'alumno'; // luego vendrá del backend / auth

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img src={logo} alt="Logo" className="navbar-logo" />

          <div className="navbar-title">Gestión de Prácticas</div>

          <button className="navbar-toggle" onClick={() => setOpen(!open)}>
            ☰
          </button>

          <div className="navbar-links">
            <Link to="/">Inicio</Link>
            <Link to="/normativa">Normativa</Link>
            <Link to="/login">Login</Link>

            {rol === 'alumno' && (
              <>
                <div
                  className="dropdown"
                  onMouseEnter={() => setDropdownPlanOpen(true)}
                  onMouseLeave={() => setDropdownPlanOpen(false)}
                >
                  <button>Plan Formativo</button>
                  {dropdownPlanOpen && (
                    <div className="dropdown-menu">
                      <Link to="/plan-formativo/visualizar">Visualizar Plan</Link>
                      <Link to="/plan-formativo/resultados">Resultados de Aprendizaje</Link>
                    </div>
                  )}
                </div>

                <div
                  className="dropdown"
                  onMouseEnter={() => setDropdownDiarioOpen(true)}
                  onMouseLeave={() => setDropdownDiarioOpen(false)}
                >
                  <button>Diario</button>
                  {dropdownDiarioOpen && (
                    <div className="dropdown-menu">
                      <Link to="/diario/registrar">Registrar Actividades</Link>
                      <Link to="/diario/ver">Visualizar Diario</Link>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu">
          <div className="mobile-header">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <nav className="mobile-links">
            <Link to="/" onClick={() => setOpen(false)}>Inicio</Link>
            <Link to="/normativa" onClick={() => setOpen(false)}>Normativa</Link>
            <Link to="/login" onClick={() => setOpen(false)}>Login</Link>

            {rol === 'alumno' && (
              <>
                <div className="mobile-section">
                  <strong>Plan Formativo</strong>
                  <Link to="/plan-formativo/visualizar" onClick={() => setOpen(false)}>Visualizar Plan</Link>
                  <Link to="/plan-formativo/RA" onClick={() => setOpen(false)}>Resultados de Aprendizaje</Link>
                </div>

                <div className="mobile-section">
                  <strong>Diario</strong>
                  <Link to="/diario/registrar" onClick={() => setOpen(false)}>Registrar Actividades</Link>
                  <Link to="/diario/ver" onClick={() => setOpen(false)}>Visualizar Diario</Link>
                </div>
              </>
            )}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
