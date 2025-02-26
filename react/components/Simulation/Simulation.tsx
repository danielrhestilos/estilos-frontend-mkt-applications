import React, { useState, useEffect } from 'react'
import useProduct from 'vtex.product-context/useProduct'
import styles from './styles.css'
import { geo } from '../../utils/geo'
import { useSimulation } from '../../hooks/simulationHook'
import useLocalStorage from '../../hooks/localStorageHook'
// import useLocalStorage from '../../hooks/localStorageHook'
interface Data {
  [departamento: string]: {
    [provincia: string]: {
      [distrito: string]: string
    }
  }
}

interface SimulationProps {
  isPickup: boolean
}
const Simulation = (props: SimulationProps) => {
  const [data, setData] = useState<Data>({})
  const [localDepartamento] = useLocalStorage('localDepartamento', '')
  const [localProvincia] = useLocalStorage('localProvincia', '')
  const [localDistrito] = useLocalStorage('localDistrito', '')
  const [localZipCode] = useLocalStorage('localZipCode', '')
  const [selectedDepartamento, setSelectedDepartamento] = useState<string>('')
  const [selectedProvincia, setSelectedProvincia] = useState<string>('')
  const [selectedDistrito, setSelectedDistrito] = useState<string>('')
  const [zipcode, setZipcode] = useState<string>('')
  const { loading, deliveryData, pickUpPoints, simulate } = useSimulation(
    zipcode
    // props.isPickup
  )
  ///propios
  // const [loading, setLoading] = useState<boolean>(false)
  // const [pickUpPoints, setPickUpPoints] = useState<any>(null)
  // const [deliveryData, setDeliveryData] = useState<any>(null)

  const productContext = useProduct()

  // const { product } = productContext

  // const idSku = product.items[0].itemId
  useEffect(() => {
    setZipcode(localZipCode)
  }, [])
  const mini = 500000
  useEffect(() => {
    setData(geo)
    setSelectedDepartamento(localDepartamento)
    setSelectedDistrito(localDistrito)
    setSelectedProvincia(localProvincia)
    setZipcode(localZipCode)
    simulate(`${productContext?.selectedItem?.itemId.toString()}`)
    console.log('deliveryData montado', deliveryData)
  }, [])

  useEffect(() => {
    simulate(`${productContext?.selectedItem?.itemId.toString()}`)
    console.log('deliveryData ', deliveryData)

    // if (zipcode != '') {
    //   try {
    //     setLoading(true)
    //     fetch('/api/checkout/pub/orderForms/simulation', {
    //       method: 'POST',
    //       headers: {
    //         Accept: 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         items: [
    //           {
    //             id: `${productContext?.selectedItem?.itemId.toString()}`,
    //             quantity: 1,
    //             seller: 1,
    //           },
    //         ],
    //         postalCode: `${zipcode.toString()}`,
    //         country: 'PER',
    //       }),
    //     })
    //       .then((response) => response.json())
    //       .then((data) => {
    //         setLoading(false)
    //         setDeliveryData(
    //           data.logisticsInfo[0].slas
    //             .filter((item: any) => item.deliveryChannel == 'delivery')
    //             .reduce(
    //               (prev: any, curr: any) =>
    //                 prev.price < curr.price ? prev : curr,
    //               { price: mini }
    //             )
    //         )
    //         setPickUpPoints(data.pickupPoints)
    //       })
    //   } catch (error) {
    //     console.error('error sucedio: ', error.toString())
    //   }
    // }
  }, [
    productContext,
    selectedDepartamento,
    selectedDistrito,
    selectedProvincia,
  ])

  const formatCurrency = (value: any) => {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
      minimumFractionDigits: 2,
    }).format(value / 100)
  }

  const handleDepartamentoChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedDepartamento(event.target.value)
    setSelectedProvincia('')
    setSelectedDistrito('')
    setZipcode('')
    // setPickUpPoints([])
    // setDeliveryData(null)
  }

  const handleProvinciaChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedProvincia(event.target.value)
    setSelectedDistrito('')
    setZipcode('')
    // setPickUpPoints([])
    // setDeliveryData(null)
  }

  const handleDistritoChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const distrito = event.target.value
    setSelectedDistrito(distrito)

    const zipcode =
      data[selectedDepartamento]?.[selectedProvincia]?.[distrito] || ''
    setZipcode(zipcode)
    // setPickUpPoints([])
    // setDeliveryData(null)
  }

  const departamentos = Object.keys(data)
  const provincias = selectedDepartamento
    ? Object.keys(data[selectedDepartamento])
    : []
  const distritos = selectedProvincia
    ? Object.keys(data[selectedDepartamento]?.[selectedProvincia] || {})
    : []

  return (
    <div className={styles.containerSimulation}>
      <div className={styles.containerSim}>
        <div className={styles.blockSim}>
          <p className={styles.labelSim}>
            <label>Departamento</label>
          </p>
          <span className={styles.spanSim}>▼</span>
          <select
            value={selectedDepartamento}
            className={styles.selectSim}
            onChange={handleDepartamentoChange}
          >
            <option value="">Seleccione un departamento</option>
            {departamentos.map((departamento) => (
              <option key={departamento} value={departamento}>
                {departamento}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.blockSim}>
          <p className={styles.labelSim}>
            <label>Provincia</label>
          </p>
          <span className={styles.spanSim}>▼</span>
          <select
            value={selectedProvincia}
            onChange={handleProvinciaChange}
            disabled={!selectedDepartamento}
            className={styles.selectSim}
          >
            <option value="">Seleccione una provincia</option>
            {provincias.map((provincia) => (
              <option key={provincia} value={provincia}>
                {provincia}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.blockSim}>
          <p className={styles.labelSim}>
            <label>Distrito</label>
          </p>
          <span className={styles.spanSim}>▼</span>
          <select
            className={styles.selectSim}
            value={selectedDistrito}
            onChange={handleDistritoChange}
            disabled={!selectedProvincia}
          >
            <option value="">Seleccione un distrito</option>
            {distritos.map((distrito) => (
              <option key={distrito} value={distrito}>
                {distrito}
              </option>
            ))}
          </select>
        </div>
      </div>
      {!loading && (
        <div className={styles.containerResults}>
          {props.isPickup && (
            <>
              {pickUpPoints && pickUpPoints.length > 0 ? (
                <div>
                  {pickUpPoints.map((pickUpPoint: any) => (
                    <div className={styles.pickUpPointBlock}>
                      <p className={styles.storeName}>
                        {pickUpPoint.friendlyName
                          .toLocaleLowerCase()
                          .replaceAll('tda.', 'Tienda')}
                      </p>
                      <p>
                        {pickUpPoint.address.street.split('|')[1]?.trim()} #
                        {pickUpPoint.address.number}, {pickUpPoint.address.city}
                        ,{pickUpPoint.address.neighborhood},{' '}
                        {pickUpPoint.address.state}{' '}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {selectedDistrito && pickUpPoints.length == 0 && (
                    <p className={styles.noneSim}>
                      ¡Lo sentimos! <br />
                      No contamos con cobertura en esta ubicación. Por favor,
                      prueba con otra dirección cercana
                    </p>
                  )}
                </>
              )}
            </>
          )}
          {!props.isPickup && (
            <>
              {deliveryData && deliveryData.price != mini ? (
                <>
                  <p style={{ fontWeight: '800' }}>Envío regular</p>
                  <p className={styles.deliverySim}>
                    Delivery desde sólo: {formatCurrency(deliveryData?.price)}
                  </p>
                </>
              ) : (
                <>
                  {console.log('deliveryData : ', deliveryData)}
                  {deliveryData == null && (
                    <p className={styles.noneSim}>
                      ¡Lo sentimos! <br />
                      El destino seleccionado está fuera de nuestra zona de
                      reparto por el momento
                    </p>
                  )}
                </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  )
}

Simulation.defaultProps = {
  isPickup: true,
}

Simulation.schema = {
  title: 'Simulation',
  description: 'Simulation',
  type: 'object',
  properties: {
    isPickup: {
      title: 'Pickup',
      description: 'Pickup',
      type: 'boolean',
      default: true,
    },
  },
}

export default Simulation
