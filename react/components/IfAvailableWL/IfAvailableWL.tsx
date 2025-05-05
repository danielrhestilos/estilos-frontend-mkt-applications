import React, { useEffect } from 'react'
import { useSimulation } from '../../hooks/simulationHook'
import useLocalStorage from '../../hooks/localStorageHook'
import useProduct from 'vtex.product-context/useProduct'
// import styles from './styles.module.css'

function IfAvailableWL({
  children,
  type,
}: {
  children: React.ReactNode
  type: string
}) {
  const [localZipCode] = useLocalStorage('localZipCode', '')
  const [localDistrito] = useLocalStorage('localDistrito', '')
  const { deliveryData, simulate, pickUpPoints, loading } = useSimulation(
    localZipCode
  )
  const productContext = useProduct()

  useEffect(() => {
    simulate(productContext?.selectedItem?.itemId || '')
  }, [productContext])

  return (
    <div>
      {!loading ? (
        <>
          {deliveryData?.price ||
          pickUpPoints.length > 0 ||
          localZipCode == '' ? (
            <>{children}</>
          ) : (
            <>
              {type == 'moreProducts' ? (
                <>
                  {' '}
                  <p
                    style={{
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#5a5a5a',
                      marginTop: '10px',
                      fontFamily: 'Outfit',
                    }}
                  >
                    {'Delivery no disponible en '} {localDistrito},{' '}
                    {'Puedes optar por recogerlo o recibirlo en otra ciudad.'}
                  </p>
                  <>{children}</>
                </>
              ) : (
                <></>
              )}
            </>
          )}
        </>
      ) : (
        <>Cargando ..</>
      )}
    </div>
  )
}

export default IfAvailableWL
