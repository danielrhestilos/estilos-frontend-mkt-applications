import React, { useEffect, useState } from 'react'
import useLocalStorage from '../../hooks/localStorageHook'
import useProduct from 'vtex.product-context/useProduct'
function FakeWhiteLabelShelf(props: any) {
  const [localZipCode] = useLocalStorage('localZipCode', '')
  const [pickUpPoints, setPickUpPoints] = useState<any>(null)
  //   const [loading, setLoading] = useState<boolean>(false)
  const [deliveryData, setDeliveryData] = useState<any>(null)
  const productContext = useProduct()
  const mini = 500000
  useEffect(() => {
    if (localZipCode != '') {
      try {
        // setLoading(true)
        fetch('/api/checkout/pub/orderForms/simulation', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            items: [
              {
                id: `${productContext?.selectedItem?.itemId.toString()}`,
                quantity: 1,
                seller: 1,
              },
            ],
            postalCode: `${localZipCode.toString()}`,
            country: 'PER',
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            const temporalDeliveryData = data.logisticsInfo[0].slas
              .filter((item: any) => item.deliveryChannel == 'delivery')
              .reduce(
                (prev: any, curr: any) =>
                  prev.price < curr.price ? prev : curr,
                { price: mini }
              )
            // setLoading(false)
            setDeliveryData(temporalDeliveryData)
            setPickUpPoints(data.pickupPoints)
          })
      } catch (error) {
        console.error('error sucedio: ', error.toString())
      }
    }
  }, [localZipCode])
  return (
    <>
      {console.log('fake white label shelf')}
      {!true && (
        <>
          <div>{JSON.stringify(pickUpPoints)}</div>
          <div>{JSON.stringify(deliveryData)}</div>
          {props.children}
        </>
      )}
    </>
  )
}

export default FakeWhiteLabelShelf
