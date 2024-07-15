import React, { useEffect } from 'react'
import { canUseDOM } from 'vtex.render-runtime'

const ProductSummaryNameCustom = () => {
  let brandNameShelfs: String[] | NodeListOf<Element> = []
  let brandNameProductMinicart: String[] | NodeListOf<Element> = []

  /**
   * The function `capitalizeFirstLetter` takes a string as input and returns the same string with the
   * first letter of each word capitalized.
   * @param {string} str - A string that you want to capitalize the first letter of each word.
   * @returns The function `capitalizeFirstLetter` returns a string with the first letter of each word
   * capitalized.
   */
  const capitalizeFirstLetter = (str: string) => {
    return str.toLowerCase().replace(/(?:^|\s)\S/g, function (char) {
      return char.toUpperCase()
    })
  }

  /**
   * The function `applyCapitalization` takes an array of elements and capitalizes the first letter of
   * each element's text content.
   * @param {any} elements - An array of elements.
   */
  const applyCapitalization = (elements: any) => {
    elements?.forEach((element: any) => {
      const originalText = element.textContent
      const capitalizedText = capitalizeFirstLetter(originalText)
      element.textContent = capitalizedText
    })
  }

  useEffect(() => {
    if (canUseDOM) {
      brandNameShelfs = document.querySelectorAll(
        '.vtex-product-summary-2-x-brandName'
      )
      brandNameProductMinicart = document.querySelectorAll(
        '.vtex-product-list-0-x-productName'
      )

      applyCapitalization(brandNameShelfs)
      applyCapitalization(brandNameProductMinicart)
    }
  }, [])

  return (
    <>
      <div className="dn"></div>
    </>
  )
}

export default ProductSummaryNameCustom
