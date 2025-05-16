import { useEffect, useState } from 'react'

export default function usePromotionData(selectedItem: any) {
  console.log("selectedItem: ", selectedItem);

  const itemId = selectedItem?.itemId
  const [promotionData, setPromotionData] = useState({
    value: 0,
    installments: 0,
  })


  useEffect(() => {
    setPromotionData({ value: 0, installments: 0 });

    fetch(`https://vtexest.estilos.com.pe/integrations/promotions/estilos-dsct/${selectedItem?.itemId}`)
      .then(async (resp) => {
        console.log("itemId: ", itemId);

        if (!resp.ok) {
          console.warn("Respuesta no OK del servidor:", resp.status);
          return null;
        }

        const contentType = resp.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          return resp.json();
        } else {
          const text = await resp.text();
          console.warn("Respuesta no JSON:", text);
          return null;
        }
      })
      .then((data: any) => {
        if (!data) return;

        console.log('data: ', data);

        setPromotionData({
          value: data?.value || 0,
          installments: data?.installments || 0,
        });
      })
      .catch((error) => {
        console.log('Error en itemId:', itemId);
        console.error('Error inesperado en fetch:', error);
      });
  }, [itemId]);


  return promotionData
}
