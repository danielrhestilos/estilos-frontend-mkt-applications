export default async (productId: string) => {
  try {
      let res = await fetch(`/api/catalog_system/pub/products/search?fq=productId:${productId}`)
      res = await res.json()
      return res;
  } catch (error) {
      console.log('error searchProduct', error);
      return null;
  }
}
