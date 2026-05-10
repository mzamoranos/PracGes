import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../images/Logo.png';
import { clearAuthSession, getAuthToken, getStoredRole } from '../utils/auth.jsx';
import './Navbar.css';

const PRIVATE_ROLES = ['administrador', 'alumno', 'tutor_profesor', 'tutor_empresa'];

const dashboardRoutes = {
  administrador: '/admin/dashboard',
  alumno: '/alumno/dashboard',
  tutor_profesor: '/profesor/dashboard',
  tutor_empresa: '/empresa/dashboard',
};

const dashboardLabels = {
  administrador: 'Panel admin',
  alumno: 'Panel alumno',
  tutor_profesor: 'Panel profesor',
  tutor_empresa: 'Panel empresa',
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dropdownPlanOpen, setDropdownPlanOpen] = useState(false);
  const [dropdownDiarioOpen, setDropdownDiarioOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const token = getAuthToken();
  const rol = getStoredRole();
  const isLoggedIn = Boolean(token && PRIVATE_ROLES.includes(rol));
  const isAdmin = rol === 'administrador';
  const dashboardRoute = dashboardRoutes[rol];
  const dashboardLabel = dashboardLabels[rol];

  function closeMobileMenu() {
    setOpen(false);
  }

  function handleLogout() {
    clearAuthSession();
    setOpen(false);
    navigate('/login');
  }

  const privateLinks = isLoggedIn && (
    <>
      {dashboardRoute && <Link to={dashboardRoute}>{dashboardLabel}</Link>}
      {isAdmin && <Link to="/admin/dashboard">Gestion usuarios</Link>}

      <div
        className="dropdown"
        onMouseEnter={() => setDropdownPlanOpen(true)}
        onMouseLeave={() => setDropdownPlanOpen(false)}
      >
        <button type="button">Plan Formativo</button>
        {dropdownPlanOpen && (
          <div className="dropdown-menu">
            <Link to="/plan-formativo">Planes formativos</Link>
          </div>
        )}
      </div>

      <div
        className="dropdown"
        onMouseEnter={() => setDropdownDiarioOpen(true)}
        onMouseLeave={() => setDropdownDiarioOpen(false)}
      >
        <button type="button">Diario</button>
        {dropdownDiarioOpen && (
          <div className="dropdown-menu">
            <Link to="/diario">Ver diario</Link>
            <Link to="/diario/registrar">Registrar actividades</Link>
          </div>
        )}
      </div>

      <button type="button" onClick={handleLogout}>Cerrar sesion</button>
    </>
  );

  const mobilePrivateLinks = isLoggedIn && (
    <>
      {dashboardRoute && (
        <Link to={dashboardRoute} onClick={closeMobileMenu}>{dashboardLabel}</Link>
      )}
      {isAdmin && <Link to="/admin/dashboard" onClick={closeMobileMenu}>Gestion usuarios</Link>}

      <div className="mobile-section">
        <strong>Plan Formativo</strong>
        <Link to="/plan-formativo" onClick={closeMobileMenu}>Planes formativos</Link>
      </div>

      <div className="mobile-section">
        <strong>Diario</strong>
        <Link to="/diario" onClick={closeMobileMenu}>Ver diario</Link>
        <Link to="/diario/registrar" onClick={closeMobileMenu}>Registrar actividades</Link>
      </div>

      <button type="button" className="mobile-logout" onClick={handleLogout}>Cerrar sesion</button>
    </>
  );

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img src={logo} alt="Logo" className="navbar-logo" />

          <div className="navbar-title">Gestion de Practicas</div>

          <button type="button" className="navbar-toggle" onClick={() => setOpen(!open)}>
            ☰
          </button>

          <div className="navbar-links" key={location.pathname}>
            <Link to="/">Inicio</Link>
            <Link to="/normativa">Normativa</Link>

            {!isLoggedIn && <Link to="/login">Login</Link>}

            {privateLinks}
          </div>
        </div>
      </nav>

      {open && (
        <div className="mobile-menu">
          <div className="mobile-header">
            <img src={logo} alt="Logo" className="navbar-logo" />
            <button type="button" onClick={closeMobileMenu}>✕</button>
          </div>

          <nav className="mobile-links">
            <Link to="/" onClick={closeMobileMenu}>Inicio</Link>
            <Link to="/normativa" onClick={closeMobileMenu}>Normativa</Link>

            {!isLoggedIn && <Link to="/login" onClick={closeMobileMenu}>Login</Link>}

            {mobilePrivateLinks}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
