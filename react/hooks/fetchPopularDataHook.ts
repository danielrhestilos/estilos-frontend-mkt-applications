import { useState, useEffect } from 'react'

const useFetchPopularData = (url: string) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {

    const fetchData = async (url: string) => {
        try {
          setLoading(true);
          const response = await fetch(url);
          if (!response.ok) {
            
            throw new Error('Network response was not ok ' + response.statusText);
          }
          let data = await response.json(); 
          console.log('data -> ',data );
          
          data = data.map((item:any) =>  {return {...item,referenceId: item?.items[0]?.referenceId[0]?.Value}})   
          
          

          const fetchPrices = async (item: any) => {
            const response = await fetch(`/api/catalog_system/pub/products/variations/${item.productId}`);
            if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
            }
            return await response.json();
          };
    
          const dataPrices = await Promise.all(data.map((item:any )=> fetchPrices(item.productId)));

          console.log("dataPrices ->",dataPrices);
          
          setData(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
    };
    fetchData(url)
  }, [url])

  return { data, loading, error }
}

export default useFetchPopularData