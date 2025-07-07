import React from 'react'
import { usePromotionData } from './../../hooks/usePromotionData'
import useProduct from 'vtex.product-context/useProduct'

const PriceFresh: React.FC = () => {
  const productContext = useProduct()
  const { product } = productContext || {}
  if (!product) return null

  const selectedItem = product.items?.[0]
  const itemId = selectedItem?.itemId

  const { data, loading, error } = usePromotionData(itemId)

  if (loading) return <p>Cargando promoción...</p>
  if (error) return <p>Error al cargar promoción: {error.message}</p>

  const precioNormal = data?.data?.[0]?.value ?? 0
  const precioPromo = data?.data?.[1]?.value ?? 0

  const descuento =
    precioNormal && precioPromo
      ? Math.round(((precioNormal - precioPromo) / precioNormal) * 100)
      : 0

  const formatPrice = (valor: number) =>
    new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
      minimumFractionDigits: 2,
    }).format(valor)

  return (
    <div style={{ marginTop: '1rem' }}>
      {descuento > 0 ? (
        <>
          <p style={{ color: '#e53935', fontWeight: 'bold', margin: '0' }}>
            {formatPrice(precioPromo)} (-{descuento}%)
          </p>
          <p
            style={{
              textDecoration: 'line-through',
              color: '#999',
              margin: '0',
            }}
          >
            {formatPrice(precioNormal)}
          </p>
        </>
      ) : (
        <p style={{ color: '#e53935', margin: '0', fontWeight: 'bold' }}>
          {formatPrice(precioNormal)}
        </p>
      )}
    </div>
  )
}

export default PriceFresh
