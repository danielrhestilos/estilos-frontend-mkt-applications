import React from 'react'
import { useProduct } from 'vtex.product-context'
import styles from './styles.css'

function CardShelfCTA() {
  const productContext = useProduct()
  const product = productContext?.product ?? {}
  const loadingItem = productContext?.loadingItem ?? false
  const sku = product?.sku ?? {}
  const referenceId = sku?.referenceId ?? []
  const reference = referenceId?.[0] ?? {}
  const valueRefId = reference?.Value ?? 'no-sku'

  function onNavigateClick(e: React.MouseEvent) {
    e.preventDefault()
    e.stopPropagation()
    if (typeof window !== 'undefined') {
      window.open(
        'https://www.tarjetaestilos.com.pe/solicitartarjeta',
        '_blank'
      )
    }
  }

  return (
    !loadingItem && (
      <a
        className={styles.shelfCTACard}
        id={`cardBtn${valueRefId}`}
        target="__blank"
        onClick={onNavigateClick}
        href="https://www.tarjetaestilos.com.pe/solicitartarjeta"
      ></a>
    )
  )
}

export default CardShelfCTA
