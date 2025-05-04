import React, { useState } from 'react';
import RegistrarDiario from '../components/diario/RegistrarDiario';
import VerDiario from '../components/diario/VerDiario';

const DiarioPage = () => {
  const [vista, setVista] = useState('registrar'); // registrar | visualizar

  return (
    <div className="max-w-4xl mx-auto mt-6 p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Gestión del Diario</h1>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => setVista('registrar')}
          className={`px-4 py-2 rounded ${vista === 'registrar' ? 'bg-red-800 text-white' : 'bg-gray-200'}`}
        >
          Registrar actividades
        </button>
        <button
          onClick={() => setVista('visualizar')}
          className={`px-4 py-2 rounded ${vista === 'visualizar' ? 'bg-red-800 text-white' : 'bg-gray-200'}`}
        >
          Visualizar diario
        </button>
      </div>

      {vista === 'registrar' ? <RegistrarDiario /> : <VerDiario />}
    </div>
  );
};

export default DiarioPage;