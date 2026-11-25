import React, { useEffect, useState } from 'react';
import { fetchWithAuth } from '../../utils/auth';

const VerDiario = () => {
  const [entradas, setEntradas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let cancelado = false;

    async function cargarEntradas() {
      try {
       //llamada a la API para obtener las entradas del diario del usuario actual
        const response = await fetchWithAuth('/diario/diario');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.message || data.error || 'Error al obtener el diario'
          );
        }

        if (!Array.isArray(data)) {
          throw new Error('El servidor no devolvió una lista de entradas');
        }

        if (!cancelado) {
          setEntradas(data);
        }
      } catch (err) {
        if (!cancelado) {
          setError(err.message || 'No se pudo cargar el diario');
        }
      } finally {
        if (!cancelado) {
          setLoading(false);
        }
      }
    }

    cargarEntradas();

    return () => {
      cancelado = true;
    };
  }, []);

  const mostrarFecha = (fecha) => {
    const [year, month, day] = String(fecha).slice(0, 10).split('-');
    return year && month && day ? `${day}/${month}/${year}` : fecha;
  };

  return (
    <>
      <header className="diario-header">
        <p className="diario-eyebrow">Diario de prácticas</p>
        <p className="diario-subtitle">
          Actividades registradas y su estado de validación.
        </p>
      </header>

      <section className="diario-panel">
        <div className="diario-panel-header">
          <h2>Entradas del diario</h2>
          <p>Actividades asociadas a tus prácticas de empresa.</p>
        </div>

        {loading ? (
          <div className="diario-empty" role="status">
            Cargando tus entradas...
          </div>
        ) : error ? (
          <div className="diario-empty diario-error" role="alert">
            {error}
          </div>
        ) : entradas.length === 0 ? (
          <div className="diario-empty">
            Todavía no tienes actividades registradas.
          </div>
        ) : (
          <div className="diario-list">
            {entradas.map((entrada, index) => (
              <article
                key={entrada.id ?? `${entrada.fecha}-${index}`}
                className="diario-entry"
              >
                <div className="diario-entry-header">
                  <h3 className="diario-entry-date">
                    {mostrarFecha(entrada.fecha)}
                  </h3>

                  <span className="diario-entry-hours">
                    {entrada.horas} {entrada.horas === 1 ? 'hora' : 'horas'}
                  </span>
                </div>

                <p className="diario-entry-description">
                  {entrada.descripcion}
                </p>

                <div className="diario-entry-footer">
                  <span
                    className={`diario-entry-status ${
                      entrada.validado
                        ? 'diario-entry-status-approved'
                        : 'diario-entry-status-pending'
                    }`}
                  >
                    {entrada.validado ? 'Validada' : 'Pendiente de validación'}
                  </span>

                  {entrada.observaciones_tutor && (
                    <span>
                      Observaciones del tutor: {entrada.observaciones_tutor}
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
};

export default VerDiario;