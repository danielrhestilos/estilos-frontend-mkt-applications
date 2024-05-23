// import React, { useEffect } from "react";
// import { canUseDOM } from 'vtex.render-runtime'
// import { useProduct } from 'vtex.product-context'

// export interface ProductCustomNameProps {
//   children: []
// }

// const ProductCustomName: React.FunctionComponent<ProductCustomNameProps> = ({ children }) => {

//   let brandNameProduct: String[] | NodeListOf<Element> = []

//   const contextPdp = useProduct()
//   const {
//     product: { productName },
//   } = contextPdp


//   const capitalizeFirstLetter = (str: string) => {
//     return str.toLowerCase().replace(/(?:^|\s)\S/g, function (char) {
//       return char.toUpperCase();
//     });
//   };


//   const applyCapitalization = (elements: any) => {
//     elements?.forEach((element: any) => {
//       const originalText = productName;
//       const capitalizedText = capitalizeFirstLetter(originalText);
//       element.textContent = capitalizedText;
//     });
//   };

//   useEffect(() => {
//     if (canUseDOM) {
//       brandNameProduct = document.querySelectorAll('.vtex-store-components-3-x-productBrand');
//       applyCapitalization(brandNameProduct);
//     }
//   }, [productName])

//   return children[0]
// }

// export default ProductCustomName




import React, { useEffect } from "react";
import { canUseDOM } from 'vtex.render-runtime';
import { useProduct } from 'vtex.product-context';

export interface ProductCustomNameProps {
  children: React.ReactNode[];
}

const ProductCustomName: React.FunctionComponent<ProductCustomNameProps> = ({ children }) => {

  let brandNameProduct: NodeListOf<Element> | [] = [];

  const contextPdp = useProduct();
  const productName = contextPdp?.product?.productName || '';

  /**
   * The function `capitalizeFirstLetter` takes a string as input and returns the same string with the
   * first letter of each word capitalized.
   * @param {string} str - A string that you want to capitalize the first letter of each word.
   * @returns The function `capitalizeFirstLetter` returns a string with the first letter of each word
   * capitalized.
   */
  const capitalizeFirstLetter = (str: string) => {
    return str.toLowerCase().replace(/(?:^|\s)\S/g, function (char) {
      return char.toUpperCase();
    });
  };

  /**
   * The function `applyCapitalization` takes an array of elements and capitalizes the first letter of
   * each element's text content.
   * @param {NodeListOf<Element>} elements - A NodeList of elements.
   */
  const applyCapitalization = (elements: NodeListOf<Element>) => {
    elements.forEach((element: Element) => {
      const originalText = productName;
      const capitalizedText = capitalizeFirstLetter(originalText);
      element.textContent = capitalizedText;
    });
  };

  useEffect(() => {
    if (canUseDOM && productName) {
      brandNameProduct = document.querySelectorAll('.vtex-store-components-3-x-productBrand');
      applyCapitalization(brandNameProduct);
    }
  }, [productName]);

  return <>{children[0]}</>;
};

export default ProductCustomName;