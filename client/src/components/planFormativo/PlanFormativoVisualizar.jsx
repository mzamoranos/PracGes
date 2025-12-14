import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';


const PlanFormativoVisualizar = () => {
  const { id } = useParams();
  const [planData, setPlanData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlanData = async () => {
      try {
        const response = await fetch(`/api/plan-formativo/${id}`);
        if (!response.ok) {
          throw new Error('Error al obtener el plan formativo');
        }
        const data = await response.json();
        setPlanData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanData();
  }, [id]);

  return (
    <div className="page-layout">
      <Navbar />

      <main className="plan-container">
        {loading && <p className="info-text">Cargando...</p>}
        {error && <p className="error-text">Error: {error}</p>}

        {!loading && !error && planData && (
          <div className="plan-card">
            <h1 className="plan-title">
              Plan Formativo
            </h1>

            <div className="plan-field">
              <strong>Nombre:</strong> {planData.name}
            </div>

            <div className="plan-field">
              <strong>Descripción:</strong> {planData.description}
            </div>

            {/* Añade aquí más campos cuando los tengas */}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default PlanFormativoVisualizar;
