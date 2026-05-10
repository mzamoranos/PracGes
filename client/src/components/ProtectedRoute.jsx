import { useEffect, useMemo, useState } from "react";
import { Navigate } from "react-router-dom";
import { clearAuthSession, validateSession } from "../utils/auth.jsx";

function ProtectedRoute({ children, rolPermitido, rolesPermitidos }) {
  const [status, setStatus] = useState("checking");

  const allowedRoles = useMemo(() => {
    if (rolesPermitidos?.length) {
      return rolesPermitidos;
    }

    return rolPermitido ? [rolPermitido] : [];
  }, [rolPermitido, rolesPermitidos]);

  useEffect(() => {
    let isMounted = true;

    async function checkAccess() {
      const session = await validateSession();

      if (!isMounted) {
        return;
      }

      if (!session.isValid || !allowedRoles.includes(session.user?.rol)) {
        clearAuthSession();
        setStatus("denied");
        return;
      }

      setStatus("allowed");
    }

    checkAccess();

    return () => {
      isMounted = false;
    };
  }, [allowedRoles]);

  if (status === "checking") {
    return <p>Cargando sesion...</p>;
  }

  if (status === "denied") {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;


