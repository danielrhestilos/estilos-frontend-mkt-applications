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
            src="https://estilospe.vtexassets.com/assets/vtex.file-manager-graphql/images/5e0d4997-cc7b-4c36-9ed6-6164dca8905c___b4f4d1d401c8cfd7d3fbbc01d83465fc.gif"
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
