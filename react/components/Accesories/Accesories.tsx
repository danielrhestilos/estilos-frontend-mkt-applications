import React, { useState, useEffect } from 'react'
// import axios from 'axios';
import useProduct from 'vtex.product-context/useProduct'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import { useOrderItems } from 'vtex.order-items/OrderItems'
import styles from './styles.css'

function Accesories() {
  const productContext = useProduct()
  const { product } = productContext || {}
  const productId = product ? product.productId : null

  const [productCJ, setProductCJ] = useState<any>(null)
  const [total, setTotal] = useState<any>(null)
  const [originalPrice, setOriginalPrice] = useState<any>(null)
  const [ids, setIds] = useState<any>([])
  const [quantity, setQuantity] = useState<any>(0)
  const [loadingCJ, setLoadingCJ] = useState<any>(true)
  const { addItem } = useOrderItems()
  const { orderForm } = useOrderForm()

  useEffect(() => {
    if (!productId) return

    // console.log('se viene le fetch')

    fetch(
      `/api/catalog_system/pub/products/crossselling/accessories/${productId}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        if (data.length !== 0) {
          let nuevo = [
            {
              productId: productId,
              id: product.items[0].itemId,
              imageUrl: product.items[0].images[0].imageUrl,
              quantity: 1,
              seller: product.items[0].sellers[0].sellerId,
              name: product.productName,
              price: product.items[0].sellers[0].commertialOffer.Price,
              listPrice: product.items[0].sellers[0].commertialOffer.ListPrice,
              brand: product.brand,
              linkText: product.linkText,
            },
            ...data.slice(0, 4).map((p: any) => ({
              productId: p.productId,
              id: p.items[0].itemId,
              imageUrl: p.items[0].images[0].imageUrl,
              quantity: 1,
              seller: p.items[0].sellers[0].sellerId,
              name: p.productName,
              price: p.items[0].sellers[0].commertialOffer.Price,
              listPrice: p.items[0].sellers[0].commertialOffer.ListPrice,
              brand: p.brand,
              linkText: p.linkText,
            })),
          ]

          let ac = nuevo.reduce((total, item) => total + item.price, 0)
          let origPrice = nuevo.reduce(
            (total, item) => total + item.listPrice,
            0
          )

          setTotal(ac)
          setOriginalPrice(origPrice)
          setProductCJ(nuevo)
          setIds(nuevo.map((item) => item.id))
          setQuantity(nuevo.length)
        } else {
          setTotal(0)
          setOriginalPrice(0)
          setProductCJ([])
          setIds([])
          setQuantity(0)
        }
        setLoadingCJ(false)
      })
      .catch((error) => {
        console.error('Error fetching cross-selling data:', error)
        setLoadingCJ(false)
      })
  }, [productId])

  const searchInProductCJ = (id: any) => {
    for (const item of productCJ) if (item.id == id) return item
    return null
  }

  const select = (selectedId: any) => {
    const product = searchInProductCJ(selectedId)
    // console.log('precio: ',product.price)
    if (ids.includes(selectedId)) {
      const newIds = ids.filter((id: any) => id !== selectedId)
      setIds(newIds)
      setTotal(total - product.price)
      setOriginalPrice(originalPrice - product.listPrice)
      setQuantity(quantity - 1)
    } else {
      const newIds = [...ids]
      newIds.push(selectedId)
      setIds(newIds)
      setQuantity(quantity + 1)
      setTotal(total + product.price)
      setOriginalPrice(originalPrice + product.listPrice)
    }
  }

  const onClickBuy = () => {
    const arreglo: any = []
    for (const prod of productCJ) if (ids.includes(prod.id)) arreglo.push(prod)
    orderForm.items.map((itemCart: any) => {
      if (product.productId === itemCart.productId) {
        for (let i = 0; i < arreglo.length; i++) {
          arreglo[i].productId === product.productId ? arreglo.splice(i, 1) : {}
        }
      }
    })
    new Promise((resolver: any) => {
      addItem(arreglo)
      resolver()
    }).then(() => {
      window.location.href = '/checkout/#/cart'
    })
  }

  const CheckBoxChange = (e: any) => {
    const { target } = e
    const { value } = target
    select(value)
  }

  return (
    <>
      <div id="buyTogether" className={styles.marginContainer}>
        {loadingCJ === false && productCJ && productCJ.length > 0 && (
          <div className={styles.containerMaxWidth}>
            {/* Contenido de productos */}
            {/* Precio final y */}
            <div className={styles.containerContent}>
              <span className={styles.sentencePrice}>
                Complementos indispensables para tu compra
              </span>
            </div>

            {originalPrice - total != 0 && (
              <div className={styles.titlePrice} style={{ margin: 'auto' }}>
                <span>
                  Ahorras :S/{' '}
                  <span className={styles.discountPrice}>
                    {(originalPrice - total).toFixed(2)}
                  </span>
                </span>
              </div>
            )}

            <div className={styles.containerContent}>
              {productCJ.map((item: any, index: any) =>
                ids.includes(item.id) ? (
                  <>
                    <div className={styles.contentProduct} key={item.id}>
                      <input
                        type="checkbox"
                        id={`${item.id}`}
                        onChange={CheckBoxChange}
                        value={item.id}
                        checked={ids.includes(item.id)}
                        disabled={item.id === product.items[0].itemId}
                        className={
                          styles.checkboxCompreJunto + `-` + `${index}`
                        }
                      />
                      <label htmlFor={`${item.id}`}>
                        <a href={'/' + item.linkText + '/p'}>
                          <img
                            className={styles.imageProduct}
                            src={item.imageUrl}
                            alt={item.name}
                          />
                          <span className={styles.productName}>
                            {item.name}
                          </span>
                          {item.price === item.listPrice ? (
                            <span className={styles.productPrice}>
                              {item.price.toFixed(2)}
                            </span>
                          ) : (
                            <div className={styles.productContainerPrice}>
                              <span className={styles.productOldPrice}>
                                {item.listPrice.toFixed(2)}
                              </span>
                              <span className={styles.productPrice}>
                                {item.price.toFixed(2)}
                              </span>
                            </div>
                          )}
                        </a>
                      </label>
                    </div>
                    {index === 0 && (
                      <span className={styles.plusProduct}>+</span>
                    )}
                  </>
                ) : (
                  <>
                    <div className={styles.contentProduct} key={item.id}>
                      <input
                        type="checkbox"
                        id={`${item.id}`}
                        onChange={CheckBoxChange}
                        value={item.id}
                        checked={ids.includes(item.id)}
                        disabled={item.id === product.items[0].itemId}
                      />
                      <label htmlFor={`${item.id}`}>
                        <a href={'/' + item.linkText + '/p'}>
                          <img
                            className={styles.imageProduct}
                            src={item.imageUrl}
                            alt={item.name}
                          />
                          <span className={styles.productName}>
                            {item.name}
                          </span>
                          {item.price === item.listPrice ? (
                            <span className={styles.productPrice}>
                              {item.price.toFixed(2)}
                            </span>
                          ) : (
                            <div className={styles.productContainerPrice}>
                              <span className={styles.productOldPrice}>
                                {item.listPrice.toFixed(2)}
                              </span>
                              <span className={styles.productPrice}>
                                {item.price.toFixed(2)}
                              </span>
                            </div>
                          )}
                        </a>
                      </label>
                    </div>
                  </>
                )
              )}
            </div>
            {total != null && (
              <div className={styles.containerMaxWidth}>
                <div className={styles.contentPrice}>
                  {/* Subtotal: */}
                  <span className={styles.titlePrice}>Total:</span>
                  <span className={styles.valuePrice}>{total.toFixed(2)}</span>

                  <div className={styles.buttonsBuyTogether}>
                    {/* <button onClick={onClickAddToCart} className={styles.buttonPriceAdd}>Agregar al carrito</button> */}
                    <button onClick={onClickBuy} className={styles.buttonPrice}>
                      ¡LOS QUIERO!
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default Accesories
