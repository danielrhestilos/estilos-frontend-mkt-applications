import { /*useProductDispatch,*/ useProduct} from 'vtex.product-context'
// import type { ProductTypes } from 'vtex.product-context'
import { ProductSummaryContext } from 'vtex.product-summary-context'
import type { ProductSummaryTypes } from 'vtex.product-summary-context'

const { useProductSummaryDispatch } = ProductSummaryContext

function useSetProduct() {
  const { selectedItem: currentSelectedItem } = useProduct() ?? {}
  const productSummaryDispatch = useProductSummaryDispatch()
  // const productDispatch = useProductDispatch()
    console.log("currentSelectedItem ",currentSelectedItem);
    
  return (product: ProductSummaryTypes.Product) => {
    // const newSelectedItem: ProductTypes.Item | undefined = currentSelectedItem 
    //   ? product.items.find((item: ProductTypes.Item) => item.itemId === currentSelectedItem.itemId)
    //   : undefined

    productSummaryDispatch({
      type: 'SET_PRODUCT',
      args: { product },
    })

    // productDispatch?.({
    //   type: 'SET_PRODUCT',
    //   args: { product: product as unknown as ProductTypes.Product },
    // })

    // if (newSelectedItem) {
    //   productDispatch?.({
    //     type: 'SET_SELECTED_ITEM',
    //     args: { item: newSelectedItem },
    //   })
    // }
  }
}

export default useSetProduct