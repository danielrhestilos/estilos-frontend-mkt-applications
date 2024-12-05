import React, { useEffect, useState } from 'react'
import { useProduct } from 'vtex.product-context'
import Product from './components/Product'
import useLocalStorage from '../../hooks/localStorageHook'
const BuyTogetherCustom = () => {
  const [skuItems, setSkuItems] = useLocalStorage('skuItems', [])
  const [buyTogether, setBuyTogether] = useState([])
  const [products, setProducts] = useState<any>([])
  const producto = useProduct()
  const { product, selectedItem } = producto || {}
  const { productId } = product || {}
  const itemId = selectedItem?.itemId || null
  const images = selectedItem?.images

  useEffect(() => {
    const getDataProduct = () => {
      fetch(`/api/catalog_system/pub/products/search?fq=productId:${productId}`)
        .then((res) => res.json())
        .then((res) => {
          const { items } = res[0]
          const { sellers } = items[0]
          const {
            commertialOffer: { BuyTogether },
          } = sellers[0]
          setBuyTogether(BuyTogether)
        })
    }

    if (productId) {
      getDataProduct()
    }
  }, [producto])

  useEffect(() => {
    products.forEach((product: any) => {
      if (product.id !== selectedItem.itemId) {
        product.master = selectedItem.itemId
      } else {
        product.master = null
      }
    })
    setSkuItems(products)
    setSkuItems((prevValue: any) => {
      return prevValue.map((item: any) => ({
        id: item.id,
        master: item.master,
      }))
    })
    console.log('skuItems: ', skuItems)
  }, [products])

  const renderedProducts = () => {
    console.log('buyTogether ', buyTogether)
    console.log('products ', products)

    return buyTogether.map((product: any, i: any) => (
      <>
        {/* {console.log('product : ', product)} */}
        <Product
          products={products}
          setProducts={setProducts}
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
    <div
      style={{
        marginTop: '1.5em',
        background: '#f5f5f5',
        borderRadius: '1rem',
      }}
    >
      <div
        style={{
          padding: '1rem',
          fontWeight: '700',
          borderRadius: '.8rem',
          background: '#f5f5f5;',
          color: '#222',
        }}
        className="f4"
      >
        Llévalos juntos
      </div>
      {buyTogether && renderedProducts()}
    </div>
  ) : (
    <></>
  )
}

export default BuyTogetherCustom
