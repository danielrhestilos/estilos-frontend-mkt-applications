import React, { useState, useEffect } from 'react'
function KlaviyoForm(props: any) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer) // Limpiar el temporizador si el componente se desmonta
  }, [])

  return (
    <>
      {loading ? (
        <div
          style={{
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
          }}
        >
          <img
            style={{ display: 'block', height: '40px' }}
            src="https://estilospe.vtexassets.com/assets/vtex.file-manager-graphql/images/3164cf61-4213-4d7b-b029-54f8a4581a9e___df2ddf41ed9dc9522f6eb3f32abc5572.gif"
          />
        </div> // Aquí puedes reemplazar el texto por un componente de loader si lo deseas
      ) : (
        <div className={props.embedForm}></div>
      )}
    </>
  )
}

KlaviyoForm.defaultProps = {
  embedForm: 'klaviyo-form-UQtnkH',
}

KlaviyoForm.schema = {
  title: 'Klaviyo form',
  description: 'Klaviyo form',
  type: 'object',
  properties: {
    embedForm: {
      type: 'string',
    },
  },
}

export default KlaviyoForm
