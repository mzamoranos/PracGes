import React, { useState }  from 'react';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer';
import { fetchWithAuth } from '../../utils/auth';

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
    <div className="flex flex-col min-h-screen">
    <Navbar />
    <h2 className="text-3xl font-bold text-center text-red-800 mb-4 p-4">Registro de Actividad</h2>

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
    <Footer />
    </div>
  );
};

export default RegistrarDiario;