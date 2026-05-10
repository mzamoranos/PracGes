import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import {
  API_BASE_URL,
  getDefaultDashboardRoute,
  setAuthSession,
  validateSession,
} from "../utils/auth";
import "./LoginPage.css";

const LoginPage = () => {
  const [dni, setDni] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    async function redirectIfLoggedIn() {
      const session = await validateSession();

      if (isMounted && session.isValid && session.user?.rol) {
        navigate(getDefaultDashboardRoute(session.user.rol), { replace: true });
      }
    }

    redirectIfLoggedIn();

    return () => {
      isMounted = false;
    };
  }, [navigate]);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          dni: dni.trim().toUpperCase(),
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.token || !data.rol) {
        throw new Error(data.message || "Credenciales incorrectas");
      }

      setAuthSession({
        token: data.token,
        rol: data.rol,
      });

      navigate(getDefaultDashboardRoute(data.rol), { replace: true });
    } catch (err) {
      setError(err.message || "DNI o contrasena incorrectos");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="page-layout">
      <Navbar />

      <h2 className="page-title">Iniciar sesion</h2>

      <main className="login-main">
        <div className="login-card">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="dni">Usuario</label>
              <input
                type="text"
                id="dni"
                value={dni}
                onChange={(event) => setDni(event.target.value)}
                placeholder="Introduce tu DNI"
                autoComplete="username"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Contrasena</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Introduce tu contrasena"
                autoComplete="current-password"
                required
              />
            </div>

            {error && <p className="form-error">{error}</p>}

            <button type="submit" className="btn-primary" disabled={isSubmitting}>
              {isSubmitting ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;
