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
                  <span style={{ fontSize: '13px', fontWeight: '600' }}>
                    {'⚠️ No disponible en '} {localDistrito},{' '}
                    {
                      'Puedes optar por delivery o recogerlo en una tienda de otra ciudad.'
                    }
                  </span>
                  <br />
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
