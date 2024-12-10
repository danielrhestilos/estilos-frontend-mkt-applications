import React, { useEffect, useState } from 'react'
import { useProduct } from 'vtex.product-context'
// import { useRuntime } from 'vtex.render-runtime'

function CustomDescription() {
  const contextPdp = useProduct()
  // const { route } = useRuntime()
  const { product } = contextPdp
  const productId = product?.productId
  // const { productId } = product
  const [content, setContent] = useState<any>(null)
  // const hasFetched = useRef(false) // Para rastrear si ya se realizó el fetch

  useEffect(() => {
    if (!product) return

    const productId = product?.productId
    // hasFetched.current = true // Marcar como true para que no vuelva a hacer fetch

    fetch('/_v/validate-product/' + productId)
      .then((resp: any) => resp.json())
      .then((data: any) => {
        setContent(data?.targetProduct?.DescriptionShort)
      })
  }, [productId])

  useEffect(() => {
    if (!product) return

    const productId = product?.productId
    // hasFetched.current = true // Marcar como true para que no vuelva a hacer fetch

    fetch('/_v/validate-product/' + productId)
      .then((resp: any) => resp.json())
      .then((data: any) => {
        setContent(data?.targetProduct?.DescriptionShort)
      })
  }, [])

  if (content == null) {
    return (
      <div style={{ margin: 'auto', textAlign: 'center' }}>
        <img
          style={{ height: '40px' }}
          src="https://estilospe.vtexassets.com/assets/vtex.file-manager-graphql/images/5e0d4997-cc7b-4c36-9ed6-6164dca8905c___b4f4d1d401c8cfd7d3fbbc01d83465fc.gif"
        />
      </div>
    )
  }

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

export default CustomDescription
