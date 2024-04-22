import React, { useEffect, useState } from 'react'
import { useOrder } from 'vtex.order-placed/OrderContext'
import { FormattedCurrency } from 'vtex.format-currency'
import { useDevice } from 'vtex.device-detector'
import { searchData, updateData } from './utils/utils'
import styles from './styles.css'

type contentProps = {
  name: string
  detailUrl: string
  imageUrl: string
  quantity: string
  sellingPrice: number
  priceDefinition: { total: number }
}

const RenderItemsOrderPlaced = () => {
  const order = useOrder()
  const [ordersDta, setOrdersData] = useState([])
  const { device } = useDevice()

  const isMobile = device === 'phone'

  useEffect(() => {
    const itemContent: any = []
    fetch(`/api/checkout/pub/orders/${order.orderId}`)
      .then((response): any => {
        if (response.ok) {
          return response.text()
        }

        throw new Error(response.status.toString())
      })
      .then(async (orderData) => {
        const dataExample = JSON.parse(orderData)
        dataExample.items.map(
          ({
            name,
            detailUrl,
            imageUrl,
            quantity,
            sellingPrice,
            priceDefinition
          }: contentProps) => {
            itemContent.push({
              name,
              detailUrl,
              imageUrl,
              quantity,
              sellingPrice,
              priceDefinition,
            })
          }
        )
        setOrdersData(itemContent)

        /* The code is making an asynchronous call to the `searchData` function with the `order` and
        `'CL'` parameters. The `searchData` function is expected to return a promise. */
        await searchData(order, 'CL')
          .then(data => {
            return updateData(data, order, 'CL');
          })
          .then(responses => {
            console.log(responses); // Manejar respuestas aquí si es necesario
          })
          .catch(error => {
            console.error(error.message);
          });
      })
  }, [])

  return (
    <>
      <section className={`center ${styles.hrStyle} bb b--muted-4`}></section>
      <div className={`${styles.tableContainerItem}`}>
        <table className="w-100">
          <tr className={styles.tableHeader}>
            <th className={`${styles.hideElementFontSize} center`}>Producto</th>
            <th className="center">Precio</th>
            <th className="center">Cantidad</th>
            <th className="center">Total</th>
          </tr>
          {ordersDta.map(
            ({
              name,
              imageUrl,
              detailUrl,
              quantity,
              // listPrice,
              // price,
              sellingPrice,
              priceDefinition,
            }: contentProps, id) => {
              return (
                <>
                  <tr key={id}>
                    <td className="w-50-ns w-60-s pb5">
                      <div className="flex items-center">
                        <div className="w-100-s mw3-l">
                          <img src={`${imageUrl}`} alt={`${name}`} />
                        </div>
                        <div className={`w-100-s ${styles.containerName}`}>
                          <div className={`${styles.productInfoColumn}`}>
                            <a
                              href={`${detailUrl}`}
                              className={`${styles.productName} vtex-order-placed-2-x-productName t-body c-muted-1 no-underline`}
                            >
                              {name}
                            </a>
                          </div>
                          {isMobile ? (
                            <div>
                              <div className="w-100 vtex-order-placed-2-x-productPrice">
                                <FormattedCurrency value={sellingPrice / 100} />
                              </div>
                              <div className="tc tl-l f6 flex vtex-order-placed-2-x-productQuantity">Cantidad: {quantity}</div>
                              <div className="w-100 vtex-order-placed-2-x-productPrice">
                                <FormattedCurrency
                                  value={priceDefinition.total / 100}
                                />
                              </div>
                            </div>
                          ) : ''}
                        </div>
                      </div>
                    </td>
                    {!isMobile ? (
                      <>
                        <td className="w-25 pb5">
                          <div className="w-100 vtex-order-placed-2-x-productPrice">
                            <FormattedCurrency value={sellingPrice / 100} />
                          </div>
                        </td>
                        <td className="w-25 tc pb5">
                          <div className="tc tl-l f6 flex justify-center vtex-order-placed-2-x-productQuantity">{quantity}</div>
                        </td>
                        <td className="w-25 pb5">
                          <div className="w-100 vtex-order-placed-2-x-productPrice">
                            <FormattedCurrency
                              value={priceDefinition.total / 100}
                            />
                          </div>
                        </td>
                      </>
                    ) : ''}
                  </tr>
                </>
              )
            }
          )}
        </table>
      </div>
      <section className={`center ${styles.hrStyle} bb b--muted-4`}></section>
    </>
  )
}

export default RenderItemsOrderPlaced
