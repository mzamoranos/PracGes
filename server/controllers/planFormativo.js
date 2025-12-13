import React, { useState } from 'react';

const PlanFormativoPage = () => {
  const [formData, setFormData] = useState({
    id: '',
    dni: '',
    dni_TutProf: '',
    nif: '',
    fecha_inicio: '',
    fecha_fin: '',
    año: '',
    estado_PF: 'Activo',
  });
  const [planes, setPlanes] = useState([]);
  const [searchId, setSearchId] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCreate = async () => {
    try {
      const response = await fetch('/api/plan-formativo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message || 'Plan formativo creado correctamente');
    } catch (error) {
      console.error('Error al crear el plan formativo:', error);
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`/api/plan-formativo/${formData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message || 'Plan formativo actualizado correctamente');
    } catch (error) {
      console.error('Error al actualizar el plan formativo:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/api/plan-formativo/${formData.id}`, {
        method: 'DELETE',
      });
      const data = await response.json();
      alert(data.message || 'Plan formativo eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar el plan formativo:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`/api/plan-formativo/${searchId}`);
      const data = await response.json();
      setPlanes([data]);
    } catch (error) {
      console.error('Error al buscar el plan formativo:', error);
    }
  };

  return (
    <div>
      <h1>Gestión de Planes Formativos</h1>
      <div>
        <h2>Crear/Actualizar Plan</h2>
        <input name="dni" placeholder="DNI Alumno" value={formData.dni} onChange={handleChange} />
        <input name="dni_TutProf" placeholder="DNI Tutor" value={formData.dni_TutProf} onChange={handleChange} />
        <input name="nif" placeholder="NIF Empresa" value={formData.nif} onChange={handleChange} />
        <input name="fecha_inicio" type="date" value={formData.fecha_inicio} onChange={handleChange} />
        <input name="fecha_fin" type="date" value={formData.fecha_fin} onChange={handleChange} />
        <input name="año" placeholder="Año Académico" value={formData.año} onChange={handleChange} />
        <select name="estado_PF" value={formData.estado_PF} onChange={handleChange}>
          <option value="Activo">Activo</option>
          <option value="Finalizado">Finalizado</option>
          <option value="Cancelado">Cancelado</option>
        </select>
        <button onClick={handleCreate}>Crear</button>
        <button onClick={handleUpdate}>Actualizar</button>
      </div>

      <div>
        <h2>Buscar Plan</h2>
        <input placeholder="ID del Plan" value={searchId} onChange={(e) => setSearchId(e.target.value)} />
        <button onClick={handleSearch}>Buscar</button>
        <div>
          {planes.map((plan) => (
            <div key={plan.id}>
              <h3>{plan.nombre}</h3>
              <p>{plan.descripcion}</p>
              <p>Estado: {plan.estado_PF}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2>Eliminar Plan</h2>
        <input name="id" placeholder="ID del Plan" value={formData.id} onChange={handleChange} />
        <button onClick={handleDelete}>Eliminar</button>
      </div>
    </div>
  );
};

export default PlanFormativoPage;