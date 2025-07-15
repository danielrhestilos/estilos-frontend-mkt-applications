import React from 'react'
import { usePromotionData } from './../../hooks/usePromotionData'
import useProduct from 'vtex.product-context/useProduct'

// Helpers
const isPromotionExpired = (to: string): boolean => {
  if (!to) return false
  const now = new Date()
  const endDate = new Date(to)
  return now > endDate
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

  if (loading) return <p>Cargando promoción...</p>
  if (error) return <p>Error al cargar promoción: {error.message}</p>
  if (!data?.data) return null

  const precioNormal = data.data[0]?.value ?? 0
  const precioPromo = data.data[1]?.value ?? 0
  const fechaFinPromo = data.data[1]?.dateRange?.to
  const expirado = isPromotionExpired(fechaFinPromo)

  const descuento =
    precioNormal && precioPromo
      ? Math.round(((precioNormal - precioPromo) / precioNormal) * 100)
      : 0

  // Estilos comunes
  const styles = {
    precioDestacado: { color: '#e53935', fontWeight: 'bold', margin: 0 },
    tachado: { textDecoration: 'line-through', color: '#999', margin: 0 },
    contenedor: { marginTop: '1rem' },
  }

  if (expirado) {
    return <p style={styles.precioDestacado}>{formatPrice(precioNormal)}</p>
  }

  return (
    <div style={styles.contenedor}>
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
