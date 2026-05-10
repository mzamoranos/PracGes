import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { fetchWithAuth } from "../utils/auth";
import "./AdminDashboard.css";

const USER_TYPES = {
  alumno: {
    label: "Alumno",
    endpoint: "/admin/alumnos",
  },
  tutor_profesor: {
    label: "Tutor profesor",
    endpoint: "/admin/tutores-profesores",
  },
  tutor_empresa: {
    label: "Tutor empresa",
    endpoint: "/admin/tutores-empresas",
  },
};

const initialForm = {
  dni: "",
  nombre: "",
  apellidos: "",
  email: "",
  telefono: "",
  password: "",
  nif: "",
};

const AdminDashboard = () => {
  const [userType, setUserType] = useState("alumno");
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  }

  function handleUserTypeChange(event) {
    setUserType(event.target.value);
    setStatus({ type: "", message: "" });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "", message: "" });
    setIsSubmitting(true);

    const payload = {
      dni: formData.dni.trim().toUpperCase(),
      nombre: formData.nombre.trim(),
      apellidos: formData.apellidos.trim(),
      email: formData.email.trim(),
      telefono: formData.telefono.trim(),
      password: formData.password,
    };

    if (userType === "tutor_empresa" && formData.nif.trim()) {
      payload.nif = formData.nif.trim().toUpperCase();
    }

    try {
      const response = await fetchWithAuth(USER_TYPES[userType].endpoint, {
        method: "POST",
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "No se pudo crear el usuario");
      }

      setFormData(initialForm);
      setStatus({
        type: "success",
        message: `${USER_TYPES[userType].label} creado correctamente`,
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "No se pudo crear el usuario",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="page-layout">
      <Navbar />

      <h2 className="page-title">Panel de Administrador</h2>

      <main className="admin-main">
        <section className="admin-panel">
          <div className="admin-panel-header">
            <h1>Alta de usuarios</h1>
            <p>Registra alumnos, tutores profesores y tutores de empresa.</p>
          </div>

          <form className="admin-form" onSubmit={handleSubmit}>
            <label>
              Tipo de usuario
              <select value={userType} onChange={handleUserTypeChange}>
                {Object.entries(USER_TYPES).map(([value, config]) => (
                  <option key={value} value={value}>{config.label}</option>
                ))}
              </select>
            </label>

            <div className="admin-form-grid">
              <label>
                DNI
                <input name="dni" value={formData.dni} onChange={handleChange} required />
              </label>

              <label>
                Nombre
                <input name="nombre" value={formData.nombre} onChange={handleChange} required />
              </label>

              <label>
                Apellidos
                <input name="apellidos" value={formData.apellidos} onChange={handleChange} required />
              </label>

              <label>
                Email
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
              </label>

              <label>
                Telefono
                <input name="telefono" value={formData.telefono} onChange={handleChange} />
              </label>

              <label>
                Contrasena inicial
                <input type="password" name="password" value={formData.password} onChange={handleChange} required />
              </label>

              {userType === "tutor_empresa" && (
                <label>
                  NIF empresa
                  <input name="nif" value={formData.nif} onChange={handleChange} />
                </label>
              )}
            </div>

            {status.message && <p className={`admin-status ${status.type}`}>{status.message}</p>}

            <button type="submit" className="admin-submit" disabled={isSubmitting}>
              {isSubmitting ? "Guardando..." : `Crear ${USER_TYPES[userType].label.toLowerCase()}`}
            </button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AdminDashboard;