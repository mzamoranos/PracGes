import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { clearAuthSession, getStoredRole, validateSession} from "../utils/auth.jsx";


function ProtectedRoute({ children, rolPermitido }) {
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    let isMounted = true;

    async function checkAccess() {
      const storedRole = getStoredRole();

      if (storedRole !== rolPermitido) {
        clearAuthSession();
        if (isMounted) {
          setStatus("denied");
        }
        return;
      }

      const session = await validateSession();

      if (!isMounted) {
        return;
      }

      if (!session.isValid || session.user?.rol !== rolPermitido) {
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
  }, [rolPermitido]);

  if (status === "checking") {
    return <p>Cargando sesion...</p>;
  }

  if (status === "denied") {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;

