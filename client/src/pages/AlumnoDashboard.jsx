import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { fetchWithAuth } from "../utils/auth";
import "./Dashboard.css";

const AlumnoDashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
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
        const response = await fetchWithAuth("/alumno/me");
        const data = await response.json();

        if (isMounted) {
          setUserData(data);
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
    return <p>Cargando perfil del alumno...</p>;
  }

  return (
    <div className="page-layout">
      <Navbar />

      <h2 className="page-title">Panel del Alumno</h2>

      <main className="dashboard-main">
        <div className="dashboard-card">
          <h1 className="dashboard-heading">Bienvenido</h1>
          <div className="dashboard-text">
            <p>
              Usuario conectado con DNI: <strong>{userData.dni}</strong>
            </p>
            <p>
              Nombre:{" "}
              <strong>
                {userData.nombre} {userData.apellidos}
              </strong>
            </p>
            <p>
              Telefono: <strong>{userData.telefono}</strong>
            </p>
            <strong>Gracias por ser parte de nuestra comunidad.</strong>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AlumnoDashboard;
