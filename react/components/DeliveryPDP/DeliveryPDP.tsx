import React, { useEffect, useState } from 'react'
import styles from './styles.css'
import { Modal } from 'vtex.styleguide'
// useSimulation
import useProduct from 'vtex.product-context/useProduct'
import Simulation from '../Simulation/Simulation'
import { useSimulation } from '../../hooks/simulationHook'
import useLocalStorage from '../../hooks/localStorageHook'

const DeliveryPDP: StorefrontFunctionComponent = () => {
  const [show, setShow] = useState<boolean>(false)
  const [localZipCode] = useLocalStorage('localZipCode', '')
  const [localDistrito] = useLocalStorage('localDistrito', '')
  const { deliveryData, simulate } = useSimulation(localZipCode, false)
  const productContext = useProduct()

  useEffect(() => {
    simulate(`${productContext?.selectedItem?.itemId.toString()}`)
  }, [productContext])

  function onClickClose() {
    setShow(false)
  }
  function onClickOpen() {
    setShow(true)
  }
  const formatCurrency = (value: any) => {
    return new Intl.NumberFormat('es-PE', {
      style: 'currency',
      currency: 'PEN',
      minimumFractionDigits: 2,
    }).format(value / 100)
  }
  return (
    <>
      <div className={styles.deliveryPDP}>
        <img
          src="https://estilospe.vtexassets.com/arquivos/help_deli.png"
          className={
            deliveryData?.price
              ? styles.iconDeliveryPDP
              : styles.iconDeliveryPDPDisabled
          }
        />
        <div className={styles.optionsBlock}>
          {localDistrito !== '' ? (
            <span>
              {deliveryData?.price ? (
                <>
                  Delivery a {localDistrito} desde sólo:{' '}
                  {formatCurrency(deliveryData?.price)}
                </>
              ) : (
                <>Delivery a {localDistrito} no disponible</>
              )}
            </span>
          ) : (
            <span>Consultar delivery </span>
          )}
          <button className={styles.seeMore} onClick={onClickOpen}>
            ver más
          </button>
        </div>
      </div>
      {/* ) : (
        <div>Delivery a {localDistrito} no disponible</div>
      )} */}
      {show && (
        <Modal centered isOpen={show} onClose={onClickClose}>
          <Simulation isPickup={true} />
        </Modal>
      )}
    </>
  )
}

export default DeliveryPDP
