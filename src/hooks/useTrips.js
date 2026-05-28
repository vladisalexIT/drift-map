import { useEffect, useState } from 'react';

export const useTrips = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadTrips = async () => {
      try {
        setLoading(true);
        setError(false);

        const response = await fetch(`${import.meta.env.BASE_URL}mock/data.json`);

        if (!response.ok) {
          throw new Error('Failed to fetch trips');
        }

        const data = await response.json();

        if (isMounted) {
          setTrips(data);
        }
      } catch {
        if (isMounted) {
          setError(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadTrips();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    trips,
    loading,
    error,
  };
};