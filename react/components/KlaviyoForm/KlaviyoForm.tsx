import React from 'react'

function KlaviyoForm(props: any) {
  return <div className={props.embedForm}></div>
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
