import React, {useState, useEffect} from 'react';  
import Navbar from '../Navbar';
import Footer from '../Footer'; 


const VerDiario = () => {
  /**  pruebba
  const entradasFicticias = [
    { fecha: '2025-05-01', horas: 4, descripcion: 'Configuración de entorno de desarrollo' },
    { fecha: '2025-05-02', horas: 3, descripcion: 'Implementación de login con JWT' }
  ];*/
  const [entradas, setEntradas] = useState([]);
  const [loading, setLoading] = useState(true);
  const userData = JSON.parse(localStorage.getItem('userData'));

  useEffect(() => {
    const fetchEntradas = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/diario/${userData.dni}`);
        if (!response.ok) throw new Error('Error al obtener el diario');
        const data = await response.json();
        setEntradas(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    if (userData?.dni) {
      fetchEntradas();
    }
  }, [userData]);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1 bg-gray-50 p-6">
        <h1 className="text-3xl font-bold text-red-800 mb-4 text-center">Diario del alumno</h1>

        {userData && (
          <p className="text-center text-gray-700 mb-6">
            Usuario conectado: {userData.nombre} {userData.apellidos} — DNI: {userData.dni}
          </p>
        )}

        {loading ? (
          <p className="text-center">Cargando entradas...</p>
        ) : entradas.length === 0 ? (
          <p className="text-center text-gray-500">No hay entradas registradas aún.</p>
        ) : (
          <div className="max-w-3xl mx-auto space-y-4">
            {entradas.map((entrada, i) => (
              <div key={i} className="border p-4 rounded shadow bg-white">
                <div><strong>Fecha:</strong> {entrada.fecha}</div>
                <div><strong>Horas:</strong> {entrada.horas}</div>
                <div><strong>Descripción:</strong> {entrada.descripcion}</div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default VerDiario;