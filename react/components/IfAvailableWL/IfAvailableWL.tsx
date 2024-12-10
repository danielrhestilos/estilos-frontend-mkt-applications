import React, { useEffect } from 'react'
import { useSimulation } from '../../hooks/simulationHook'
import useLocalStorage from '../../hooks/localStorageHook'
import useProduct from 'vtex.product-context/useProduct'

function IfAvailableWL({ children }: { children: React.ReactNode }) {
  const [localZipCode] = useLocalStorage('localZipCode', '')
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
          {deliveryData?.price && pickUpPoints.length > 0 ? (
            <>{children}</>
          ) : (
            <>Tu rpoducto no esta disponible en esta ubicación</>
          )}
        </>
      ) : (
        <>CArgando ..</>
      )}
    </div>
  )
}

export default IfAvailableWL
