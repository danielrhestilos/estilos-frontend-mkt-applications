import React, { useEffect, useState } from "react";
import { useProduct } from 'vtex.product-context'
import Product from "./components/Product";

const BuyTogetherCustom = () => {
  const [buyTogether, setBuyTogether] = useState([])

  const producto = useProduct()
  const { product, selectedItem } = producto || {};
  const { productId } = product || {};
  const itemId = selectedItem?.itemId || null;
  const images = selectedItem?.images;

  useEffect(() => {
    const getDataProduct = () => {
      fetch(`/api/catalog_system/pub/products/search?fq=productId:${productId}`)
        .then((res) => res.json())
        .then((res) => {
          const { items } = res[0]
          const { sellers } = items[0]
          const {
            commertialOffer: { BuyTogether }
          } = sellers[0]
          // console.log("another",sellerId )
          setBuyTogether(BuyTogether)
        })
    }

    if (productId) {
      getDataProduct()
    }
  }, [producto])

  const renderedProducts = () => {
    // const { commertialOffer } = sellers[0]


    return buyTogether.map((product: any, i: any) => (
      <>
        <Product
          key={i}
          product={product}
          // sellerId={sellers[0].sellerId}
          currentProductId={itemId}
          currentProductImage={images[0].imageUrl}
        // cv={CacheVersionUsedToCallCheckout}
        />
      </>
    ))
  }

  return buyTogether.length > 0 ? (
    <div style={{ marginTop: '1.5em', borderTop: '1px solid #C4C4C4' }}>
      <div style={{ marginTop: '1.5em', marginBottom: '1.5em' }} className="f4">Llévalos juntos</div>
      {buyTogether && renderedProducts()}
    </div>
  ) : (
    <></>
  )
}

export default BuyTogetherCustom
