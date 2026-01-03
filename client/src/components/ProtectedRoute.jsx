import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, rolPermitido }) => {
  const token = localStorage.getItem('token');
  const rol = localStorage.getItem('rol');

  if (!token) {
    return <Navigate to="/login" />;
  }

  if (rol !== rolPermitido) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
