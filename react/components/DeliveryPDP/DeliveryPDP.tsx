import React, { useEffect, useState } from 'react'
import styles from './styles.css'
import { Modal } from 'vtex.styleguide'
import useProduct from 'vtex.product-context/useProduct'
import Simulation from '../Simulation/Simulation'
import { useSimulation } from '../../hooks/simulationHook'
import useLocalStorage from '../../hooks/localStorageHook'

interface SimulationPDPProps {
  isPickUp: boolean
  isCity: boolean
}

const DeliveryPDP: React.FC<SimulationPDPProps> = ({ isPickUp }) => {
  const [show, setShow] = useState(false)
  const [localZipCode] = useLocalStorage('localZipCode', '')
  const [localDistrito] = useLocalStorage('localDistrito', '')
  const { deliveryData, simulate, pickUpPoints, loading } = useSimulation(
    localZipCode
    // isPickUp
  )
  const productContext = useProduct()

  useEffect(() => {
    simulate(productContext?.selectedItem?.itemId || '')
  }, [productContext])

  function capitalizeFirstLetter(val: string) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1)
  }

  // const formatCurrency = (value: number) =>
  //   new Intl.NumberFormat('es-PE', {
  //     style: 'currency',
  //     currency: 'PEN',
  //     minimumFractionDigits: 2,
  //   }).format(value / 100)

  const renderIcon = () => {
    if (isPickUp) {
      return localZipCode && pickUpPoints.length > 0
        ? '/arquivos/Location-store-ICON-V1224-red-30.svg'
        : '/arquivos/Location-store-ICON-V1224-grey-30.svg'
    }
    return deliveryData
      ? '/arquivos/Delivery-on-ICON-V1224-red-30.svg'
      : '/arquivos/Delivery-on-ICON-V1224-grey-30.svg'
  }
  const getClassDeliveryCircle = () => {
    if (isPickUp) {
      return localZipCode && pickUpPoints.length > 0
        ? styles.deliveryCircle
        : styles.deliveryCircleDisabled
    }
    return deliveryData ? styles.deliveryCircle : styles.deliveryCircleDisabled
  }

  const renderMessage = () => {
    if (!localDistrito)
      return isPickUp ? (
        <>
          <p className={styles.DeliveryTitle}>Retiro en tienda</p>{' '}
          <button
            id={'seeMoreWhiteLabel'}
            className={styles.seeMore}
            onClick={() => setShow(true)}
          >
            Ver más
          </button>
        </>
      ) : (
        <>
          <p className={styles.DeliveryTitle}>Envío a domicilio</p>{' '}
          <button
            id={'seeMoreWhiteLabel'}
            className={styles.seeMore}
            onClick={() => setShow(true)}
          >
            Ver más
          </button>
        </>
      )

    if (isPickUp) {
      return pickUpPoints?.length > 0 ? (
        <>
          <p className={styles.DeliveryTitle}>Retiro en tienda</p>
          {/* <p className={styles.seeMoreParagraph}> */}
          <button
            id={'seeMoreWhiteLabel'}
            className={styles.seeMore}
            onClick={() => setShow(true)}
          >
            Ver más
          </button>
          {/* </p> */}
        </>
      ) : (
        <span>No disponible para retiro en tienda</span>
      )
    }

    return deliveryData?.price ? (
      <>
        <p className={styles.DeliveryTitle}>Envío a domicilio </p>
        {/* <p className={styles.seeMoreParagraph}> */}
        <button
          id={'seeMoreWhiteLabel'}
          className={styles.seeMore}
          onClick={() => setShow(true)}
        >
          Ver más
        </button>
        {/* </p> */}
      </>
    ) : (
      <>No disponible para delivery</>
    )
  }

  const renderStores = () => {
    if (!localDistrito) return ''

    if (isPickUp) {
      return (
        <ul className={styles.pickUpPoints}>
          {pickUpPoints.length > 0 &&
            pickUpPoints
              .slice(0, 3) // Solo toma los primeros 3 elementos
              .map((point: any) => (
                <li key={point?.id} className={styles.paragraphFriendlyName}>
                  {capitalizeFirstLetter(
                    point.friendlyName
                      .toLocaleLowerCase()
                      .replaceAll('tda.', 'Tienda')
                  )}
                </li>
              ))}
        </ul>
      )
    }
    return ''
  }

  return (
    <>
      {!loading && (
        <>
          <div className={styles.deliveryPDP}>
            <div className={getClassDeliveryCircle()}>
              <img src={`${renderIcon()}`} width="43" height="43" />
            </div>
            <div className={styles.optionsBlock}>
              <div className={styles.optionsResumeBlock}>
                <>{renderMessage()}</>
              </div>
              <>{renderStores()}</>
            </div>
          </div>
        </>
      )}
      {show && (
        <Modal centered isOpen={show} onClose={() => setShow(false)}>
          <h3>
            {!isPickUp
              ? 'Selecciona tu ubicación para delivery'
              : 'Tiendas disponibles para tu producto'}
          </h3>
          <Simulation isPickup={isPickUp} />
        </Modal>
      )}
    </>
  )
}

export default DeliveryPDP
