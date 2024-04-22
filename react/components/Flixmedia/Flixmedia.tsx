/* eslint-disable vtex/prefer-early-return */
/* eslint-disable no-lonely-if */
/* eslint-disable no-else-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/prefer-optional-chain */
import React, { useEffect } from 'react'
import { useProduct } from 'vtex.product-context'
interface IProps {
  data_flix_ean?: string
  data_flix_mpn?: string
  data_flix_inpage?: string
  data_flix_fallback_language?: string
  data_flix_language?: string
  data_flix_distributor?: string
  data_flix_minisite?: string
  data_flix_brand?: string
  data_flix_sku?: string
  data_flix_button_image?: string
  data_flix_price?: string
}
const Flixmedia = (props: IProps) => {
  const productContext = useProduct()
  const brand = productContext?.product?.brand ?? ''
  const plu = productContext?.selectedItem?.itemId ?? ''
  const ean = productContext?.product?.items?.[0].ean ?? ''

  const loadFlixScript = () => {
    const flixScript = document.createElement('script')

    flixScript.type = 'text/javascript'
    flixScript.src = '//media.flixfacts.com/js/loader.js'
    flixScript.async = true
    flixScript.setAttribute('id', 'flixmedia')
    flixScript.setAttribute('data-flix-distributor', '16434')
    flixScript.setAttribute('data-flix-language', 'pe')
    flixScript.setAttribute('data-flix-brand', brand)
    flixScript.setAttribute('data-flix-mpn', '')
    flixScript.setAttribute('data-flix-ean', ean)
    flixScript.setAttribute('data-flix-sku', plu)
    flixScript.setAttribute('data-flix-button', 'flix-minisite')
    flixScript.setAttribute('data-flix-inpage', 'flix-inpage')
    flixScript.setAttribute('data-flix-button-image', '')
    flixScript.setAttribute('data-flix-fallback-language', '')
    flixScript.setAttribute('data-flix-price', '')
    document.head.insertBefore(
      flixScript,
      document.head.getElementsByTagName('script')[0]
    )
  }

  useEffect(() => {
    loadFlixScript()
  }, [props])

  return (
    <>
      <div id="flix-minisite" />
      <div id="flix-inpage" />
    </>
  )
}

export default Flixmedia
