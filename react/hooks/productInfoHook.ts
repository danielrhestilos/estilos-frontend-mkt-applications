import { useProduct } from 'vtex.product-context';  

export const useProductInfo = () => {
  const ctxProduct = useProduct();
  const { selectedItem, product } = ctxProduct || {};
  const productId = product?.productId;

  return {
    selectedItem,
    product,
    productId,
  };
};
