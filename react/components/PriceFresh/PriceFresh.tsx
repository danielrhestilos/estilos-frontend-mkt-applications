import React from 'react'
import { usePromotionData } from './../../hooks/usePromotionData'
import useProduct from 'vtex.product-context/useProduct'

// Helpers
const isPromotionDisabled = (from: string, to: string): boolean => {
  // const now = new Date()
  const now = new Date().toISOString()
  const utcnow = new Date(now)
  console.log('utcnow ', now)
  if (to && utcnow > new Date(to)) return true
  if (from && utcnow < new Date(from)) return true
  return false
}

const formatPrice = (value: number): string =>
  new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 2,
  }).format(value)

const PriceFresh: React.FC = () => {
  const { product } = useProduct() || {}
  const selectedItem = product?.items?.[0]
  const itemId = selectedItem?.itemId

  const { data, loading, error } = usePromotionData(itemId)
  console.log('data: ', JSON.stringify(data))

  if (loading) return <p>Cargando promoción...</p>
  if (error || !data?.data) return null

  const precioNormal = data.data[0]?.value ?? 0
  const precioPromo = data.data[1]?.value ?? 0
  const fechaInicioPromo = data.data[1]?.dateRange?.from
  const fechaFinPromo = data.data[1]?.dateRange?.to
  const expirado = isPromotionDisabled(fechaInicioPromo, fechaFinPromo)
  console.log('expirado ', expirado)

  const descuento =
    precioNormal && precioPromo
      ? Math.round(((precioNormal - precioPromo) / precioNormal) * 100)
      : 0

  // Estilos comunes
  const styles = {
    precioDestacado: { color: '#e53935', fontWeight: 'bold', margin: 0 },
    tachado: { textDecoration: 'line-through', color: '#999', margin: 0 },
  }

  if (expirado) {
    return <p style={styles.precioDestacado}>{formatPrice(precioNormal)}</p>
  }

  return (
    <div>
      {descuento > 0 ? (
        <>
          <p style={styles.precioDestacado}>
            {formatPrice(precioPromo)} (-{descuento}%)
          </p>
          <p style={styles.tachado}>{formatPrice(precioNormal)}</p>
        </>
      ) : (
        <p style={styles.precioDestacado}>{formatPrice(precioNormal)}</p>
      )}
    </div>
  )
}

export default PriceFresh
