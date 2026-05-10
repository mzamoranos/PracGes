import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { fetchWithAuth } from "../utils/auth";
import "./Dashboard.css";

const ProfesorDashboard = () => {
  const navigate = useNavigate();
  const [profesor, setProfesor] = useState({
    dni: "",
    nombre: "",
    apellidos: "",
    telefono: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadProfile() {
      try {
        const response = await fetchWithAuth("/profesor/me");
        const data = await response.json();

        if (isMounted) {
          setProfesor(data);
        }
      } catch (error) {
        navigate("/login", { replace: true });
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadProfile();

    return () => {
      isMounted = false;
    };
  }, [navigate]);

  if (isLoading) {
    return <p>Cargando perfil del profesor...</p>;
  }

  return (
    <div className="page-layout">
      <Navbar />

      <h2 className="page-title">Panel del Profesor</h2>

      <main className="dashboard-main">
        <div className="dashboard-card">
          <h1 className="dashboard-heading">Perfil</h1>
          <div className="dashboard-text">
            <p>
              Usuario conectado con DNI: <strong>{profesor.dni}</strong>
            </p>
            <p>
              Nombre:{" "}
              <strong>
                {profesor.nombre} {profesor.apellidos}
              </strong>
            </p>
            <p>
              Telefono: <strong>{profesor.telefono}</strong>
            </p>
            <strong>Gracias por supervisar las practicas.</strong>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProfesorDashboard;

