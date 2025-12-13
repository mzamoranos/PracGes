import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

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
                    throw new Error('Error fetching plan data');
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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Plan Formativo: {planData?.name}</h1>
            <p>Description: {planData?.description}</p>
            {/* Add more fields as needed */}
        </div>
    );
};

export default PlanFormativoVisualizar;