import { pathOr } from 'ramda'

import { getWhiteLabelAndPolicy, searchProduct } from './';
import { Product } from '../typings/events';
import getSettings from '../modules/settings'
import { removeAccents } from '../utils';

interface GeneralAdditionalData {
  price: number;
  oldPrice?: number;
  pictureUrl: string;

}

const getAbsoluteUrl = (path: string) => {
  const { origin } = window.location;
  return `${origin}${path}`
}
type Param = {
  propertyNameFind: string
  propertyNameSend: string
}
type parseParams = Param[]
class Params {
  productData: any
  parseParams: parseParams
  constructor(params: parseParams, productData: any) {
    this.productData = productData
    this.parseParams = params
  }
  get() {
    const resParams: any = {}
    this.parseParams.forEach(({ propertyNameFind, propertyNameSend }: any) => {
      const paramValue: any = pathOr(null, propertyNameFind.split(',').map((param: string) => param.trim()), this.productData)

      if (paramValue) {
        const propertyName: any = propertyNameSend || propertyNameFind

        resParams[propertyName] = typeof paramValue !== 'string' ? JSON.stringify(paramValue) : paramValue
      }
    })

    return resParams
  }
}


export default async (data: Product, selectedItem: any) => {
  const { minStockUnavailable = 5, params } = getSettings()
  const resSearchProduct: any = await searchProduct(data.productId);
  // @ts-ignore
  const isTrackingStockId = window.__retailrocket.isTrackingStockId === 'true'
  let sessionData: Record<string, string> = {}

  if (isTrackingStockId) {
    sessionData = await getWhiteLabelAndPolicy()

  }
  const productSearch = resSearchProduct[0];
  const decodeParams = decodeURIComponent(params)
  let parseDecodeParams = decodeParams !== '' ? JSON.parse(decodeParams) : null
  let customParams = {}

  if (parseDecodeParams) {
    parseDecodeParams = parseDecodeParams.filter((param: any) => param.propertyNameFind)

    if (parseDecodeParams.length) {
      customParams = new Params(parseDecodeParams, productSearch)
    }
  }
  const generalAdditionalData: GeneralAdditionalData = {
    price: 0,
    pictureUrl: ''
  };
  let isGeneralAvailable = false;

  const categoryPaths = [removeAccents(decodeURIComponent(data.categories[0])).replace(/ /g, '-').replace(/,/g, '').slice(0, data.categories[0].length - 1).toLowerCase()];
  const internalProductData: any = {
    groupId: parseInt(data.productId),
    name: data.productName,
    url: getAbsoluteUrl(data.link),
    pictureUrl: selectedItem.images[0].imageUrl,
    categoryPaths,
    vendor: data.brand,
    description: productSearch.description || '',
    model: '',
    typePrefix: '',
    products: {},
    ...sessionData
  }

  if (isTrackingStockId) {
    internalProductData.stockId = sessionData.whiteLabel
  }


  if (productSearch.items && productSearch.items.length) {
    productSearch.items.forEach((item: any) => {
      const { images, itemId, name, sellers, variations } = item;
      const imageUrl = images[0].imageUrl;
      const sellerSelected = sellers.length > 1 ? sellers.find((seller: any) => seller.sellerDefault === true) : sellers[0];
      const availableQuantity = sellerSelected.commertialOffer.AvailableQuantity;
      let isAvailable = false

      if (availableQuantity > 0 && availableQuantity > minStockUnavailable) {
        isAvailable = true
      }

      internalProductData.products[itemId] = {
        name,
        url: getAbsoluteUrl(`${data.link}?skuId=${itemId}`),
        pictureUrl: imageUrl,
        isAvailable,
        params: {
          clusters: productSearch.productClusters,
          productGroupName: data.productName,
          sellerName: sellerSelected.sellerName
        }
      };
      if (customParams instanceof Params) {
        internalProductData.products[itemId].params = {
          ...internalProductData.products[itemId].params,
          ...customParams.get(),
          ...sessionData
        }
      }

      if (images.length > 1) {
        internalProductData.products[itemId].params.AlternativePictureURL = images[1].imageUrl
      }

      const { Price, ListPrice } = sellerSelected.commertialOffer;
      if (Price && ListPrice) {
        internalProductData.products[itemId].price = Price;
        if (Price > generalAdditionalData.price) {
          generalAdditionalData.price = Price;
          generalAdditionalData.pictureUrl = imageUrl;
          if (Price !== ListPrice) generalAdditionalData.oldPrice = ListPrice;
        }
        if (Price !== ListPrice) internalProductData.products[itemId].oldPrice = ListPrice
      }
      if (isAvailable) {
        if (!isGeneralAvailable) isGeneralAvailable = true;
      }
      if (variations && variations.length) {
        variations.forEach((variation: string) => {
          if (item[variation]) {
            internalProductData.products[itemId].params[variation] = item[variation][0].toString();
          }
        });
      }

    });
  }

  internalProductData.isAvailable = isGeneralAvailable;
  if (generalAdditionalData.price > 0) {
    internalProductData.price = generalAdditionalData.price;
    internalProductData.pictureUrl = generalAdditionalData.pictureUrl;

    if (generalAdditionalData.oldPrice && generalAdditionalData.price !== generalAdditionalData.oldPrice) {
      internalProductData.oldPrice = generalAdditionalData.oldPrice
    }
  }

  return JSON.parse(JSON.stringify(internalProductData));
}
