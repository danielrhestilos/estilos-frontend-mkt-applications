import { useEffect, useState } from 'react'

export default function usePromotionData(selectedItem: any) {
  const itemId = selectedItem?.itemId
  const [promotionData, setPromotionData] = useState({
    value: 0,
    installments: 0,
  })

  useEffect(() => {
    setPromotionData({ value: 0, installments: 0 })
    fetch(
      `https://vtexest.estilos.com.pe/integrations/promotions/estilos-dsct/${selectedItem?.itemId}`
    )
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Network response was not ok')
        }
        return resp.json() as Promise<any>
      })
      .then((data: any) => {
        setPromotionData({
          value: data?.value || 0,
          installments: data?.installments || 0,
        })
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error)
      })
  }, [itemId])
  return promotionData
}
