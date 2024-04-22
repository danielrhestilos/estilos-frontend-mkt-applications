import { useProduct as useGlobalProduct } from 'vtex.product-context';
import { Product } from '../../../typings/events'

const getProductIds = (product: Product) => product.items.map(({ itemId }: any) => itemId);

const useProduct = () => {

  const { product } = useGlobalProduct();

  return {
    itemId: product ? getProductIds(product).toString() : null
  }
}

export default useProduct;
