import { useEffect, useState } from "react"

export const useJsonFetch = (url, opts) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url)
        if (!response.ok) {
          setError(response.status);
        }
        const data = await response.json();
        setData(data);
      } catch (e) { setError(e) }
      finally { setLoading(false) }
    }
    fetchData();
  }, []);

  return [{ data, isLoading, error }]
}