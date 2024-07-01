import React from 'react'
import { useProduct } from 'vtex.product-context'
// import { useRuntime } from 'vtex.render-runtime'
function CardShelfCTA() {
  // const { navigate } = useRuntime()
  const productContext = useProduct()
  const product = productContext?.product

  // const handleRedirect = (linkText: any) => {
  //   navigate({
  //     to: linkText,
  //   })
  // }

  function onNavigateClick() {
    if (typeof window !== 'undefined') {
      window.open(
        'https://www.tarjetaestilos.com.pe/solicitartarjeta',
        '_blank'
      )
    }
  }

  return (
    <a
      href={`https://www.tarjetaestilos.com.pe/solicitartarjeta`}
      target="__blank"
      style={{
        border: 'none',
        background: 'transparent',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: '#222',
        fontWeight: '600',
      }}
      onClick={onNavigateClick}
      id={`ctaCardPLP-${product?.productId}`}
    >
      <span>Solicita tu tarjeta ahora</span>
      <img src="https://estilospe.vtexassets.com/assets/vtex.file-manager-graphql/images/a13e9229-c244-428f-bd70-ab9e5fc46c64___e74fd41af0b2c18bfb1365e5758991da.svg" />
    </a>
  )
}

export default CardShelfCTA
