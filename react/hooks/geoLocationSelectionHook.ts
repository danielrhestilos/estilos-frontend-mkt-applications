import { useEffect } from 'react'
import useLocalStorage from './localStorageHook'
import { geo } from './../../react/utils/geo'

interface UseGeolocationSelectorReturn {
    localDepartamento: string
    localProvincia: string
    localDistrito: string
    localZipcode: string
    departamentos: string[]
    provincias: string[]
    distritos: string[]
    handleDepartamentoChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    handleProvinciaChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
    handleDistritoChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const useGeolocationSelector = (): UseGeolocationSelectorReturn => {
    const [localDepartamento, setLocalDepartamento] = useLocalStorage(
        'localDepartamento',
        ''
    )
    const [localProvincia, setLocalProvincia] = useLocalStorage(
        'localProvincia',
        ''
    )
    const [localDistrito, setLocalDistrito] = useLocalStorage('localDistrito', '')
    const [localZipcode, setLocalZipcode] = useLocalStorage('localZipCode', '')

    const [departamentos, setDepartamentos] = useLocalStorage(
        'departamentos',
        Object.keys(geo)
    )
    const [provincias, setProvincias] = useLocalStorage('provincias', [])
    const [distritos, setDistritos] = useLocalStorage('distritos', [])

    useEffect(() => {
        if (geo) {
            setDepartamentos(Object.keys(geo))
            if (localDepartamento) {
                setProvincias(Object.keys(geo[localDepartamento] || {}))
            } else {
                setProvincias([])
                setDistritos([])
            }
        }
    }, [localDepartamento])

    useEffect(() => {
        if (localDepartamento && localProvincia) {
            setDistritos(Object.keys(geo[localDepartamento]?.[localProvincia] || {}))
        } else {
            setDistritos([])
        }
    }, [localDepartamento, localProvincia])

    const handleDepartamentoChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setLocalDepartamento(event.target.value)
        setLocalProvincia('')
        setLocalDistrito('')
        setLocalZipcode('')
    }

    const handleProvinciaChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        setLocalProvincia(event.target.value)
        setLocalDistrito('')
        setLocalZipcode('')
    }

    const handleDistritoChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const distrito = event.target.value
        setLocalDistrito(distrito)

        const localZipcode =
            geo[localDepartamento]?.[localProvincia]?.[distrito] || ''
        setLocalZipcode(localZipcode)
    }


    // useEffect(() => {
    //   if (zipcode != '') {
    //     try {
    //       setLoading(true)
    //       fetch('/api/checkout/pub/orderForms/simulation', {
    //         method: 'POST',
    //         headers: {
    //           Accept: 'application/json',
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({
    //           items: [
    //             {
    //               id: `${productContext?.selectedItem?.itemId.toString()}`,
    //               quantity: 1,
    //               seller: 1,
    //             },
    //           ],
    //           postalCode: `${zipcode.toString()}`,
    //           country: 'PER',
    //         }),
    //       })
    //         .then((response) => response.json())
    //         .then((data) => {
    //           setLoading(false)
    //           setDeliveryData(
    //             data.logisticsInfo[0].slas
    //               .filter((item: any) => item.deliveryChannel == 'delivery')
    //               .reduce(
    //                 (prev: any, curr: any) =>
    //                   prev.price < curr.price ? prev : curr,
    //                 { price: mini }
    //               )
    //           )
    //           setPickUpPoints(data.pickupPoints)
    //         })
    //     } catch (error) {
    //       console.error('error sucedio: ', error.toString())
    //     }
    //   }
    // }, [
    //   productContext,
    //   selectedDepartamento,
    //   selectedDistrito,
    //   selectedProvincia,
    // ])

    return {
        localDepartamento,
        localProvincia,
        localDistrito,
        localZipcode,
        departamentos,
        provincias,
        distritos,
        handleDepartamentoChange,
        handleProvinciaChange,
        handleDistritoChange,
    }
}

export default useGeolocationSelector
