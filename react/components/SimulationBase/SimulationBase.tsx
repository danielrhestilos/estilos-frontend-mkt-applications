import React, { /* useState, */ useEffect } from 'react'
import styles from './styles.css'
import { geo } from '../../utils/geo'
import useLocalStorage from '../../hooks/localStorageHook'
import { useOrderForm } from 'vtex.order-manager/OrderForm'

// interface Data {
//   [departamento: string]: {
//     [provincia: string]: {
//       [distrito: string]: string
//     }
//   }
// }

const SimulationBase: StorefrontFunctionComponent = () => {
  const { orderForm } = useOrderForm()

  // const [data, setData] = useState<Data>({})
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
      console.log('orderForm->', orderForm)

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

  // Maneja la lógica de la asignación de código postal en el último useEffect
  useEffect(() => {
    if (localZipcode) {
      try {
        console.log('Zipcode disponible:', localZipcode)
      } catch (error) {
        console.error('Error al obtener el código postal:', error)
      }
    }
  }, [localZipcode])
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

    // window.dataLayer = window.dataLayer || [];
    // window.dataLayer.push({
    //    'formLocation': 'footer',
    //    'event': 'new_subscriber'
    //  });
    ;(window as any).dataLayer = (window as any).dataLayer || []
    ;(window as any).dataLayer.push({
      event: 'select_location_white',
      selectedDepartamento: localDepartamento,
      selectedProvincia: localProvincia,
      selectedDistrito: distrito,
      selectedEmail: orderForm?.clientProfileData?.email || '',
    })

    window.location.reload()
  }

  return (
    <div className={styles.containerSimulation}>
      <div className={styles.containerSim}>
        <div className={styles.blockSim}>
          <p className={styles.labelSim}>
            <label>Departamento</label>
          </p>
          <span className={styles.spanSim}>▼</span>
          <select
            value={localDepartamento}
            className={styles.selectSim}
            onChange={handleDepartamentoChange}
          >
            <option value="">Seleccione un departamento</option>
            {departamentos.map((departamento: any) => (
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
            value={localProvincia}
            onChange={handleProvinciaChange}
            disabled={!localDepartamento}
            className={styles.selectSim}
          >
            <option value="">Seleccione una provincia</option>
            {provincias.map((provincia: any) => (
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
            value={localDistrito}
            onChange={handleDistritoChange}
            disabled={!localProvincia}
          >
            <option value="">Seleccione un distrito</option>
            {distritos.map((distrito: any) => (
              <option key={distrito} value={distrito}>
                {distrito}
              </option>
            ))}
          </select>
        </div>
        {/* <div className={styles.blockSim}>
          <p className={styles.labelSim}>
            <button
              onClick={() => {
                window.location.reload()
              }}
            >
              Aceptar
            </button>
          </p>
        </div> */}
      </div>
    </div>
  )
}

SimulationBase.defaultProps = {
  isPickup: true,
}

SimulationBase.schema = {
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

export default SimulationBase
