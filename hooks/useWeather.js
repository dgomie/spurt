import { useEffect, useState } from 'react';
import { getWeather } from '../utils/getWeather';

export default function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getWeather();
      setWeather(data);
      setLoading(false);
    })();
  }, []);

  return { weather, loading };
}
