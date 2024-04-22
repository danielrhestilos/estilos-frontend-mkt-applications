
import React, { useMemo, useState } from "react"
import push from '../modules/push';
import getDataProduct from '../services/getDataProduct';
import { useProduct } from 'vtex.product-context'

const sednQuickviewEvent = () => {
  const { product, selectedItem } = useProduct()
  const [isAvailable, setIsAvailable] = useState(false)

  useMemo(() => {

    async function doPushEvent() {
      let internalProductDataRr = await getDataProduct(product, selectedItem);
      const productIds = Object.keys(internalProductDataRr.products).map((productId: string) => parseInt(productId));

      push(function () {
        if (isNaN(internalProductDataRr.oldPrice)) {
          delete internalProductDataRr.oldPrice
        }

        // @ts-ignore
        window.retailrocket?.productsGroup.post(internalProductDataRr);
        // @ts-ignore
        window.rrApi?.groupView(productIds);
        setIsAvailable(!isAvailable)
      });
    }

    !isAvailable ? doPushEvent() : ''
  }, [])

  return <div className="dn"></div>
}

export default sednQuickviewEvent
