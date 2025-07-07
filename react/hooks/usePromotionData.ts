import { useEffect, useState } from 'react'


export function usePromotionData(itemId?: string) {
    const [data, setData] = useState<any | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        if (!itemId) return

        const fetchData = async () => {
            setLoading(true)
            setError(null)
            try {
                const response = await fetch(
                    `https://vtexest.estilos.com.pe/integrations/promotions/promotion-price/${itemId}`
                )
                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`)
                }
                const result: any = await response.json()
                console.log('result ', result)
                setData(result)
            } catch (err) {
                setError(err instanceof Error ? err : new Error(String(err)))
            } finally {
                setLoading(false)
            }
        }

        fetchData()
    }, [itemId])

    return { data, loading, error }
}