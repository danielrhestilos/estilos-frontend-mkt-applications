import { useEffect, useState } from 'react'
import useProduct from 'vtex.product-context/useProduct'
export const useSimulation = (zipcode: string /* isPickup: boolean*/) => {
    console.log('--------------------------')
    console.log('zipcode: ', zipcode)

    const [loading, setLoading] = useState<boolean>(false)
    const [deliveryData, setDeliveryData] = useState<any>(null)
    const [pickUpPoints, setPickUpPoints] = useState<any>([])
    const productContext = useProduct()

    useEffect(() => {
        simulate(productContext?.selectedItem?.itemId.toString(), 'PER')
    }, [zipcode, productContext])

    const simulate = async (itemId: string, country = 'PER') => {
        if (!zipcode) return
        setLoading(true)
        try {
            const response = await fetch('/api/checkout/pub/orderForms/simulation', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    items: [{ id: itemId, quantity: 1, seller: 1 }],
                    postalCode: zipcode,
                    country,
                }),
            })
            const data = await response.json()
            // if (isPickup) {
            setPickUpPoints(data.pickupPoints || [])
            // } else {
            const logisticsInfo = data.logisticsInfo[0]?.slas || []
            const cheapestDelivery = logisticsInfo
                .filter((item: any) => item.deliveryChannel === 'delivery')
                .reduce(
                    (prev: any, curr: any) => (prev.price < curr.price ? prev : curr),
                    { price: Infinity }
                )
            setDeliveryData(
                cheapestDelivery.price !== Infinity ? cheapestDelivery : null
            )
            // }
        } catch (error) {
            console.error('Simulation error:', error)
        } finally {
            setLoading(false)
        }
    }

    return { loading, deliveryData, pickUpPoints, simulate }
}
