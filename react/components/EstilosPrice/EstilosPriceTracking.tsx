import { useEffect } from 'react';

/**
 * The function fetchDataFromApi fetches data from an API endpoint, stores it in sessionStorage, and
 * handles any errors that occur.
 */
const fetchDataFromApi = async () => {
  try {
    const response = await fetch('https://vtexest.estilos.com.pe/integrations/promotions/estilos-discounts');
    if (!response.ok) {
      throw new Error('La solicitud no pudo ser completada');
    }
    const jsonData = await response.json();

    // Almacena los datos en sessionStorage
    sessionStorage.setItem('PromotionsEstilosCard', JSON.stringify(jsonData));
  } catch (err) {
    console.error('Error al realizar la consulta y almacenar los datos:', err);
  }
};

const EstilosPriceTracking = () => {
  useEffect(() => {
    const existingData = sessionStorage.getItem('PromotionsEstilosCard');

    if (!existingData) {
      fetchDataFromApi();
    }
  }, []);

  return null;
};

export default EstilosPriceTracking;
