import React, { useState }  from 'react';
import { fetchWithAuth } from '../../utils/auth';
import './Diario.css';
const RegistrarDiario = () => {
  const [fecha, setFecha] = useState('');
  const [horas, setHoras] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();

  
  try {
    const res = await fetchWithAuth('/diario/diario', {
      method: 'POST',
      body: JSON.stringify({
        fecha,
        horas: Number(horas),
        descripcion,
      }),
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.message || data.error || 'No se pudo guardar la entrada');
    }

    alert('Registro guardado');
    setFecha('');
    setHoras('');
    setDescripcion('');
  } catch (err) {
    console.error(err);
    alert(`Error al guardar: ${err.message}`);
  }
};
return (
  <>
   <header className="diario-header">
      <p className="diario-eyebrow">Diario de prácticas</p>
      <p className="diario-subtitle">
        Anota la actividad realizada, el tiempo dedicado y una breve descripción.
      </p>
    </header>

    <section className="diario-panel">
      <div className="diario-panel-header">
        <h2>Nueva entrada</h2>
        <p>Los campos marcados con * son obligatorios.</p>
      </div>

      <form onSubmit={handleSubmit} className="diario-form">
        <div className="diario-form-grid">
          <div className="diario-field">
            <label htmlFor="fecha">
              Fecha <span className="diario-required">*</span>
            </label>
            <input id="fecha" type="date" value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required className="diario-input"
            />
          </div>

          <div className="diario-field">
            <label htmlFor="horas">
              Horas <span className="diario-required">*</span>
            </label>
            <input id="horas" type="number" name="horas"
              value={horas} min={1} max={8} step={1}
              onChange={(e) => setHoras(e.target.value)}
              required className="diario-input"
            />
            <p className="diario-help">Introduce un valor entre 1 y 8.</p>
          </div>
        </div>

        <div className="diario-field">
          <label htmlFor="descripcion">
            Descripción de la actividad{' '}
            <span className="diario-required">*</span>
          </label>
          <textarea
            id="descripcion"  value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            rows={5} required
            placeholder="Describe brevemente las tareas realizadas..."
            className="diario-textarea"
          />
        </div>

        <div className="diario-form-actions">
          <button type="submit" className="diario-button">
            Guardar actividad
          </button>
        </div>
      </form>
    </section>
    </>
);

 
/** 
  return (
    <div className="flex flex-col min-h-screen">
   
    <h2 className="text-3xl font-bold text-center text-red-800 mb-4 p-4">Entrada a registro de actividad</h2>

    <main className="flex items-center justify-center flex-1">


<div className="bg-stone-200 p-8 border border-stone-300 rounded-2xl shadow-md w-full max-w-md">
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block">Fecha:</label>
        <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} className="border p-2 w-full" required />
      </div>

      <div>
        <label className="block">Horas:</label>
        <input type="number" name="horas" value={horas}  min={1}
  max={8} onChange={(e) => setHoras(e.target.value)} className="border p-2 w-full" required />
      </div>

      <div>
        <label className="block">Descripción:</label>
        <textarea value={descripcion} onChange={(e) => setDescripcion(e.target.value)} className="border p-2 w-full" required />
      </div>

      <button type="submit" className="bg-red-800 text-white px-4 py-2 rounded">Guardar</button>
    </form>
    </div>
    </main>
    
    </div>
  );
  */
};

export default RegistrarDiario;