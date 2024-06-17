import React from "react";
import { useProduct /*, useProductDispatch */} from 'vtex.product-context'
import { useRuntime } from "vtex.render-runtime";
// import getSelectedSKUFromQueryString from 'vtex.product-context/'
// export const getSelectedSKUFromQueryString = (
   
import styles from "./styles.css";
import stage from "./stage.css";
// import useSetProduct from "../../hooks/setProductHook";

function ColorsSelector() {
  const { navigate } = useRuntime()
  // const dispatch = useProductDispatch();
  const productContext = useProduct();
  const product = productContext?.product;
  const items = product?.items;
  const skuSpecifications = product?.skuSpecifications;
  // const setProduct = useSetProduct()
  const colorVariations = skuSpecifications?.find(
    (item:any) => item.field.name === "Color",
  );
  const colorValues = colorVariations?.values;

  const handleRedirect = (linkText: any) => {
    navigate({
      to: linkText,
    })
  }

  function onClickColor(e:React.MouseEvent,prettyColor:string) {
    const targetItem:any = findItemByColor(items,prettyColor);


    console.log("targetItem -> ",targetItem);
    e.preventDefault();
    e.stopPropagation();
handleRedirect(`${product.link}/?skuId=${targetItem?.itemId}`);



    console.log('product actual ->',product);
    

  }

  function findItemByColor(items:any, color:any):any {
    // console.log("color ", color);
    
    return items.find((item:any) => {
        return item.variations.some((variation:any) => {
            return variation.name === "Color" && variation.values?.[0].replaceAll('/','').replaceAll(' ','').replaceAll('+','').replaceAll('%','').replaceAll('-','').replaceAll('[','').replaceAll(']','').replaceAll('.','').replaceAll('"','').replaceAll('*','')
            .replaceAll('(','').replaceAll(')','').replaceAll('&','').toLowerCase() == color.replaceAll('/','').replaceAll(' ','').replaceAll('+','').replaceAll('%','').replaceAll('-','').replaceAll('[','').replaceAll(']','').replaceAll('.','').replaceAll('"','').replaceAll('*','')
            .replaceAll('(','').replaceAll(')','').replaceAll('&','').toLowerCase();
        });
    });
  }
  
  return (
    <div>
      {colorValues && (
        <div className={styles.containerColors}>
          {colorValues.map((color:any, index:number) => {       
            const prettyColor = color.name.toLowerCase().replaceAll(' ','').replaceAll('/','');
            const keyX = `${prettyColor}-${index}`
            return (
              <button
                value={prettyColor}
                className={styles.pickerSelect}
                onClick={(e) => {
                  onClickColor(e,prettyColor);
                }}
                key={keyX}
              >
                <div
                  className={` ${styles.colorSelector}  ${stage[`${prettyColor}`]}`}
                ></div>
              </button>
            );
          })}
        </div>
      ) }
    </div>
  );
}

export default ColorsSelector;
