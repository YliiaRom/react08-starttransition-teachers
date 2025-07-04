import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [dataVal, setDataVal] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;

    const abortController = new AbortController();
    const signal = abortController.signal;

    setLoading(true);
    setError(false);
    const getData = async () => {
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error(`error fetch- ${response.status}`);
        }
        const data = await response.json();
        setDataVal(data);
      } catch (error) {
        setError(true);
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
    return () => {
      abortController.abort();
    };
  }, [url]);

  return {
    data: dataVal,
    loading,
    error,
  };
};
