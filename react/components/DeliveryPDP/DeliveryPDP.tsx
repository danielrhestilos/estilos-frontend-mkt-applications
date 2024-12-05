import React, { useEffect, useState } from 'react'
import styles from './styles.css'
import { Modal } from 'vtex.styleguide'
import useProduct from 'vtex.product-context/useProduct'
import Simulation from '../Simulation/Simulation'
import { useSimulation } from '../../hooks/simulationHook'
import useLocalStorage from '../../hooks/localStorageHook'

interface SimulationPDPProps {
  isPickUp: boolean
}

const DeliveryPDP: React.FC<SimulationPDPProps> = ({ isPickUp }) => {
  const [show, setShow] = useState(false)
  const [localZipCode] = useLocalStorage('localZipCode', '')
  const [localDistrito] = useLocalStorage('localDistrito', '')
  const { deliveryData, simulate, pickUpPoints, loading } = useSimulation(
    localZipCode,
    isPickUp
  )
  const productContext = useProduct()

  useEffect(() => {
    simulate(productContext?.selectedItem?.itemId || '')
  }, [productContext])

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
      minimumFractionDigits: 2,
    }).format(value / 100)

  const renderIcon = () => {
    if (isPickUp) {
      return localZipCode && pickUpPoints.length > 0
        ? '/assets/vtex.file-manager-graphql/images/6912ff5b-5c22-47fc-8ebf-8090694c2fb3___c003a941599a517e6ad799b1072ef718.svg'
        : '/assets/vtex.file-manager-graphql/images/cf22c440-29e6-4891-87bd-4af736a9693b___10b9e9e44e4a8e7e63aaef663474a63c.svg'
    }
    return deliveryData
      ? '/assets/vtex.file-manager-graphql/images/83c6ee9f-d3ac-4d12-bc36-7e342a8152ae___68daf827e5a300345fe40c826754f822.svg'
      : '/assets/vtex.file-manager-graphql/images/bc7f0112-dee4-4190-bcb1-ece0acc79098___cc7ecc8bf7679884aafbf264e0b8b3f9.svg'
  }

  const renderMessage = () => {
    if (!localDistrito)
      return isPickUp ? 'Consultar retiro en tienda' : 'Consultar delivery'

    if (isPickUp) {
      return pickUpPoints.length > 0 ? (
        <span>Puedes retirarlo en nuestras tiendas :</span>
      ) : (
        <p className={styles.noneSim}>
          Retiros no disponibles en {localDistrito}
        </p>
      )
    }

    return deliveryData?.price ? (
      <>Delivery desde {formatCurrency(deliveryData.price)}</>
    ) : (
      <>Delivery a {localDistrito} no disponible</>
    )
  }

  const renderStores = () => {
    if (!localDistrito) return ''

    if (isPickUp) {
      return (
        <div>
          {pickUpPoints.length > 0 ? (
            pickUpPoints.map((point: any) => (
              <p key={point.id}>{point.friendlyName}</p>
            ))
          ) : (
            <div className={styles.noneSim}>
              Retiros no disponibles en {localDistrito}
            </div>
          )}
          <p>
            <button className={styles.seeMore} onClick={() => setShow(true)}>
              Ver más
            </button>
          </p>
        </div>
      )
    }

    return ''
  }

  return (
    <>
      {!loading && (
        <>
          <div className={styles.deliveryPDP}>
            <div className={styles.deliveryCircle}>
              <img src={`${renderIcon()}`} width="27" height="27" />
            </div>
            <div className={styles.optionsBlock}>
              <div className={styles.optionsResumeBlock}>
                <span>{renderMessage()}</span>
                {/* <br /> */}
                {isPickUp && !(pickUpPoints.length > 0) && (
                  <button
                    className={styles.seeMore}
                    onClick={() => setShow(true)}
                  >
                    Ver más
                  </button>
                )}
              </div>
              <div>{renderStores()}</div>
            </div>
          </div>
        </>
      )}
      {show && (
        <Modal centered isOpen={show} onClose={() => setShow(false)}>
          <Simulation isPickup={isPickUp} />
        </Modal>
      )}
    </>
  )
}

export default DeliveryPDP
