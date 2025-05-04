import React, {useState, useEffect} from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

const PlanFormativoVisualizar = () => {
  /**Prueba
  const planEjemplo = [
    { modulo: 'Módulo 1', descripcion: 'Instalación y mantenimiento de sistemas' },
    { modulo: 'Módulo 2', descripcion: 'Redes y seguridad' },
  ];  */

 
    const [entradas, setEntradas] = useState([]);
    const [loading, setLoading] = useState(true);
    const userData = JSON.parse(localStorage.getItem('userData'));
  
    useEffect(() => {
      const fetchEntradas = async () => {
        try {
          const response = await fetch(`http://localhost:5000/api/planformativo/${userData.dni}`);
          if (!response.ok) throw new Error('Error al obtener el plan formativo');
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
      <main className="flex-1 p-6 bg-gray-50">
        <h1 className="text-3xl font-bold text-red-800 mb-6 text-center">Plan Formativo</h1>

        {loading ? (
          <p className="text-center text-gray-600">Cargando...</p>
        ) : error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : entradas.length === 0 ? (
          <p className="text-center text-gray-600">No hay datos disponibles.</p>
        ) : (
          <div className="max-w-4xl mx-auto space-y-4">
            //se ven todos los campos
            {entradas.map((item, index) => (
              <div key={index} className="border p-4 rounded shadow bg-white">
                {Object.entries(item).map(([key, value]) => (
                  <div key={key} className="mb-2">
                    <span className="font-semibold capitalize">{key}:</span>{' '}
                    <span>{value}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default PlanFormativoVisualizar;