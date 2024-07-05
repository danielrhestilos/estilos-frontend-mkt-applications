import { useState, useEffect } from 'react'

const useFetchPopularData = (urls: string[]) => {
  const [data, setData] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async (urls: string[]) => {
        try {
          setLoading(true);
          const responses = await Promise.all(urls.map(url => fetch(url)));
          responses.forEach(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
            }
          });
          const data = await Promise.all(responses.map(response => response.json())); 
          setData(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
    };
    fetchData(urls)
  }, [urls])

  return { data, loading, error }
}

export default useFetchPopularData