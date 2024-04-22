import React, { useEffect, useMemo, useState } from 'react'
import { Dropdown } from 'vtex.styleguide'
import { useCssHandles } from 'vtex.css-handles'

interface properties {
  renderProductRecommendations: {
    items: {
      name: string
    }[]
  }[],
  selectedPrice: string
}
const RenderDropdown = ({ renderProductRecommendations, selectedPrice }: properties) => {

  const [dropdownOptions, setDropdownOptions]: any = useState([])
  const [selectedProduct, setSelectedProduct]: any = useState([])
  const [actualProductValue, setActualProductValue]: any = useState("")

  const lisItems = renderProductRecommendations.reduce((acc, product) => {
    return acc.concat(product.items);
  }, [] as any[]);


  const CSS_HANDLES = [
    'contentDropDown'
  ]

  const handles = useCssHandles(CSS_HANDLES);


  /**
   * The function calculates the warranty range for a given product name and determines if the selected
   * price falls within that range.
   * @param {string} productName - The `productName` parameter is a string that represents the name of
   * a product.
   * @returns The function `calculatedWarrantyByRange` returns a boolean value indicating whether the
   * selected price falls within the warranty range of the product.
   */
  const calculatedWarrantyByRange = (productName: string) => {
    let match = productName.match(/[\d+]+/g);
    var isAvailable = false

    if (match) {
      var minRange = parseInt(match[1]);
      var maxRange = match[2] ? parseInt(match[2]) : minRange;

      if (minRange === maxRange) {
        parseInt(selectedPrice) <= maxRange
          ? isAvailable = true
          : isAvailable = false
      } else {
        minRange <= parseInt(selectedPrice) && parseInt(selectedPrice) <= maxRange
          ? isAvailable = true
          : isAvailable = false
      }
    }
    return isAvailable
  }

  useMemo(() => {
    const tempArray: { value: string; label: string; id: number }[] = [{ value: "", label: "Sin protección adicional", id: 0 }]
    lisItems.map(({ name }, key: number) => {

      /*Call this function (calculatedWarrantyByRange(arg), because the name of SKU must be
      ejemplo : "MIH GTIA EXT 2 AÑOS NOTEBOOK S/ 1501 A S/ 2000" */
      const isWarrantyAvailable = calculatedWarrantyByRange(name)

      if (isWarrantyAvailable) {
        tempArray.push({ value: name, label: name, id: key })
      }
    })
    setDropdownOptions(tempArray)
  }, [renderProductRecommendations])

  /**
   * The handleChangeEvent function filters a list of items based on a given value and updates the
   * selected product and actual product value.
   * @param {string} value - The `value` parameter is a string that represents the selected value from a
   * dropdown or input field.
   */
  const handleChangeEvent = (value: string) => {
    const productInfoActual = lisItems.filter((element: { name: string }) => {
      var validation = false
      if (element.name === value) {
        validation = true
      }
      return validation
    })

    const customEvent = new CustomEvent('addingListener', {
      detail: {
        productInfoActual: productInfoActual[0]
      }
    })
    document.dispatchEvent(customEvent)

    setSelectedProduct(productInfoActual)
    setActualProductValue(value)
  }

  useEffect(() => {

  }, [selectedProduct])

  return (
    <div className={handles.contentDropDown}>
      <Dropdown
        label="Selecciona tu garantía extendida"
        placeholder={0}
        size="large"
        options={dropdownOptions}
        value={actualProductValue}
        onChange={(_: any, value: any) => {
          handleChangeEvent(value)
        }
        }
      />
    </div>
  )
}

export default RenderDropdown
