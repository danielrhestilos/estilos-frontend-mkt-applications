import React from 'react'
import { Helmet } from 'vtex.render-runtime'

const SupportChat = () => {
  return (
    <>
      <Helmet>
        <script
          src="https://chat.sleekflow.io/embed_iframe.js"
          data-id="travischatwidget"
          data-companyid="a395f2c2-d746-4a7b-b614-aac433a4e67f"
          type="text/javascript"
        />
      </Helmet>
    </>
  )
}

export default SupportChat
