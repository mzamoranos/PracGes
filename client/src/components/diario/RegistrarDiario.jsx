import React, { useState }  from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';


const RegistrarDiario = () => {
  const [fecha, setFecha] = useState('');
  const [horas, setHoras] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const nuevoRegistro = {
      fecha,
      horas: parseInt(horas),
      descripcion,
    };

    try {
      const res = await fetch('http://localhost:5000/api/diario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${token}`, ← si usas autenticación
        },
        body: JSON.stringify(nuevoRegistro),
      });

      if (res.ok) {
        alert('Registro guardado');
        setFecha('');
        setHoras('');
        setDescripcion('');
      } else {
        const errorMessage = await res.text();
        alert(`Error al guardar: ${errorMessage}`);
      }
    } catch (err) {
      console.error(err);
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