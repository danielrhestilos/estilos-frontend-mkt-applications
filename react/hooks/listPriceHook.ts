
export const useListPrice = (selectedItem: any, productId: any, container: any) => {
  // console.log('container ->',container);

  const seller = selectedItem?.sellers ? selectedItem.sellers[0] : null;
  const commertialOffer = seller?.commertialOffer ? seller.commertialOffer : null;
  const listPrice = commertialOffer?.ListPrice != undefined ? commertialOffer.ListPrice : null;
  const price = commertialOffer?.Price != undefined ? commertialOffer.Price : null;
  const fake = container.find((item: any) => item.productId == productId);
  // console.log('fake ->',fake);

  if (fake) {
    return {
      price: fake.fakePrice,
      isFake: true,
      isVoid: fake.fakePrice == listPrice
    };
  }

  return {
    price: listPrice,
    isFake: false,
    isVoid: price == listPrice
  };
};