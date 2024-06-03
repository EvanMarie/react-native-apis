// useDataUSA.ts

import { useState, useEffect } from 'react';
import { getData, DataItem } from '@/services/usDataAPI';

interface UseDataUSAResult {
  data: DataItem[] | null;
  loading: boolean;
  error: Error | null;
}

const useDataUSA = (params: Record<string, string>): UseDataUSAResult => {
  const [data, setData] = useState<DataItem[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(params);
        setData(result.data);
      } catch (error) {
        setError(error as any);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params]);

  return { data, loading, error };
};

export default useDataUSA;
