import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { fetchWithAuth } from "../utils/auth";
import "./Dashboard.css";

const EmpresaDashboard = () => {
  const navigate = useNavigate();
  const [empresaTutor, setEmpresaTutor] = useState({
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
        const response = await fetchWithAuth("/empresa/me");
        const data = await response.json();

        if (isMounted) {
          setEmpresaTutor(data);
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
    return <p>Cargando perfil de empresa...</p>;
  }

  return (
    <div className="page-layout">
      <Navbar />

      <h2 className="page-title">Panel de Empresa</h2>

      <main className="dashboard-main">
        <div className="dashboard-card">
          <h1 className="dashboard-heading">Perfil</h1>
          <div className="dashboard-text">
            <p>
              Usuario conectado con DNI: <strong>{empresaTutor.dni}</strong>
            </p>
            <p>
              Nombre:{" "}
              <strong>
                {empresaTutor.nombre} {empresaTutor.apellidos}
              </strong>
            </p>
            <p>
              Telefono: <strong>{empresaTutor.telefono}</strong>
            </p>
            <strong>Gracias por colaborar en las practicas.</strong>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EmpresaDashboard;
