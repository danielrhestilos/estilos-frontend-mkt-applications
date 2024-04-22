export const isProductAvailable = (selectedItem: { sellers: any; }) => {
const sellers = selectedItem?.sellers
  const sellerSelected = sellers?.length > 1 ? sellers.find((seller: any) => seller.sellerDefault === true) : sellers[0];
  const availableQuantity = sellerSelected.commertialOffer.AvailableQuantity;
  let isAvailable = false

  if (availableQuantity > 0) {
    isAvailable = true
  }
  return isAvailable
}
