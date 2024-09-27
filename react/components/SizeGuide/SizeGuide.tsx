import React from 'react'
import { useProduct } from 'vtex.product-context'
function SizeGuide() {
  const contextPdp = useProduct()
  console.log('contextPdp ', contextPdp)

  return <div>Guia de tallas daniel</div>
}

export default SizeGuide
