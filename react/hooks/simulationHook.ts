import { useEffect, useState } from 'react'
import useProduct from 'vtex.product-context/useProduct'
export const useSimulation = (zipcode: string, isPickup: boolean) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [deliveryData, setDeliveryData] = useState<any>(null)
    const [pickUpPoints, setPickUpPoints] = useState<any>([])
    const productContext = useProduct()

    useEffect(() => {
        simulate(productContext?.selectedItem?.itemId.toString(), 'PER')
    }, [zipcode, productContext])
    console.log('zipcode: ', zipcode)
    const simulate = async (itemId: string, country = 'PER') => {
        console.log('itemId: ', itemId)
        if (!zipcode) return
        setLoading(true)
        try {
            console.log('try')
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
            console.log('response -> ', response)
            console.log('data -> ', data)
            if (isPickup) {
                setPickUpPoints(data.pickupPoints || [])
            } else {
                const logisticsInfo = data.logisticsInfo[0]?.slas || []
                const cheapestDelivery = logisticsInfo
                    .filter((item: any) => item.deliveryChannel === 'delivery')
                    .reduce(
                        (prev: any, curr: any) => (prev.price < curr.price ? prev : curr),
                        { price: Infinity }
                    )
                console.log('cheapestDelivery ->', cheapestDelivery)

                setDeliveryData(
                    cheapestDelivery.price !== Infinity ? cheapestDelivery : null
                )
            }
        } catch (error) {
            console.error('Simulation error:', error)
        } finally {
            setLoading(false)
        }
    }

    return { loading, deliveryData, pickUpPoints, simulate }
}
