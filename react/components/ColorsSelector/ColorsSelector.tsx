import React from "react";
import { useProduct, useProductDispatch } from 'vtex.product-context'

// import getSelectedSKUFromQueryString from 'vtex.product-context/'
// export const getSelectedSKUFromQueryString = (
   
import styles from "./styles.css";
import useSetProduct from "../../hooks/setProductHook";

function ColorsSelector() {
  const dispatch = useProductDispatch();
  const productContext = useProduct();
  const product = productContext?.product;
  const items = product?.items;
  const skuSpecifications = product?.skuSpecifications;
  const setProduct = useSetProduct()
  const colorVariations = skuSpecifications?.find(
    (item:any) => item.field.name === "Color",
  );
  const colorValues = colorVariations?.values;

  function onClickColor(e:React.MouseEvent,prettyColor:string) {
    e.preventDefault();
    e.stopPropagation();

    setProduct({
      "cacheId": "sassafras-blazer-sili-semi-moda268937",
      "productId": "268937",
      "description": "<table border='0' cellpadding='5' cellspacing='0'><tr style='background-color: #FFFFFF;'><td><b>Descripción:</b></td><td>SASSAFRAS BLAZER SILI SEMI </td></tr><tr style='background-color: #F2F2F2;'><td><b>División:</b></td><td>DAMAS</td></tr><tr style='background-color: #FFFFFF;'><td><b>Clase:</b></td><td>BLAZER</td></tr><tr style='background-color: #F2F2F2;'><td><b>Marca:</b></td><td>SASSAFRAS</td></tr><tr style='background-color: #FFFFFF;'><td><b>Colección:</b></td><td>AZUCENA 3</td></tr><tr style='background-color: #F2F2F2;'><td><b>Tipo Prenda:</b></td><td>TOP</td></tr><tr style='background-color: #FFFFFF;'><td><b>Tipo Material:</b></td><td>LOMA</td></tr></table>",
      "productName": "SASSAFRAS BLAZER SILI SEMI MODA",
      "productReference": "268937",
      "linkText": "sassafras-blazer-sili-semi-moda268937",
      "brand": "SASSAFRAS",
      "brandId": 28,
      "link": "https://portal.vtexcommercestable.com.br/sassafras-blazer-sili-semi-moda268937/p",
      "categories": [
        "/TEXTIL/DAMAS/SPORT Y FORMAL DAMAS PROPIO/BLAZER *SPORT Y FORMAL DAMAS PROPIO/BLAZER/",
        "/TEXTIL/DAMAS/SPORT Y FORMAL DAMAS PROPIO/BLAZER *SPORT Y FORMAL DAMAS PROPIO/",
        "/TEXTIL/DAMAS/SPORT Y FORMAL DAMAS PROPIO/",
        "/TEXTIL/DAMAS/",
        "/TEXTIL/"
      ],
      "categoryId": "5004343",
      "releaseDate": "2024-06-03T00:00:00Z",
      "priceRange": {
        "sellingPrice": {
          "highPrice": 129.9,
          "lowPrice": 129.9,
          "__typename": "PriceRange"
        },
        "listPrice": {
          "highPrice": 149.9,
          "lowPrice": 149.9,
          "__typename": "PriceRange"
        },
        "__typename": "ProductPriceRange"
      },
      "specificationGroups": [],
      "skuSpecifications": [
        {
          "field": {
            "name": "Color",
            "originalName": "Color",
            "__typename": "SKUSpecificationField"
          },
          "values": [
            {
              "name": "AZUL MARINO",
              "originalName": "AZUL MARINO",
              "__typename": "SKUSpecificationValue"
            },
            {
              "name": "VINO",
              "originalName": "VINO",
              "__typename": "SKUSpecificationValue"
            },
            {
              "name": "BEIGE",
              "originalName": "BEIGE",
              "__typename": "SKUSpecificationValue"
            }
          ],
          "__typename": "SkuSpecification"
        },
        {
          "field": {
            "name": "Talla",
            "originalName": "Talla",
            "__typename": "SKUSpecificationField"
          },
          "values": [
            {
              "name": "S",
              "originalName": "S",
              "__typename": "SKUSpecificationValue"
            },
            {
              "name": "M",
              "originalName": "M",
              "__typename": "SKUSpecificationValue"
            },
            {
              "name": "L",
              "originalName": "L",
              "__typename": "SKUSpecificationValue"
            },
            {
              "name": "XL",
              "originalName": "XL",
              "__typename": "SKUSpecificationValue"
            }
          ],
          "__typename": "SkuSpecification"
        }
      ],
      "productClusters": [
        {
          "id": "327",
          "name": "Criteo-Todos",
          "__typename": "ProductClusters"
        }
      ],
      "clusterHighlights": [],
      "properties": [],
      "__typename": "Product",
      "titleTag": "",
      "metaTagDescription": "",
      "items": [
        {
          "itemId": "247575",
          "name": "SASSAFRAS BLAZER SILI SEMI MODA AZUL MARINO L",
          "nameComplete": "SASSAFRAS BLAZER SILI SEMI MODA AZUL MARINO L",
          "complementName": "",
          "ean": "",
          "variations": [
            {
              "name": "Color",
              "values": [
                "AZUL MARINO"
              ],
              "__typename": "Property"
            },
            {
              "name": "Talla",
              "values": [
                "L"
              ],
              "__typename": "Property"
            }
          ],
          "referenceId": [
            {
              "Key": "RefId",
              "Value": "002293899",
              "__typename": "Reference"
            }
          ],
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "images": [
            {
              "cacheId": "3167220",
              "imageId": "3167220",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167220-#width#-#height#/SKU.jpg?v=638530228808900000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167220/SKU.jpg?v=638530228808900000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167163",
              "imageId": "3167163",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167163-#width#-#height#/SKU.jpg?v=638530228812970000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167163/SKU.jpg?v=638530228812970000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167226",
              "imageId": "3167226",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167226-#width#-#height#/SKU.jpg?v=638530228809530000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167226/SKU.jpg?v=638530228809530000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167242",
              "imageId": "3167242",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167242-#width#-#height#/SKU.jpg?v=638530228811230000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167242/SKU.jpg?v=638530228811230000",
              "imageText": "",
              "__typename": "Image"
            }
          ],
          "__typename": "SKU",
          "videos": [],
          "sellers": [
            {
              "sellerId": "1",
              "sellerName": "ESTILOS PERU",
              "sellerDefault": true,
              "__typename": "Seller",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=247575&qty=1&seller=1&sc=1&price=12990&cv=1DC90E5D598247C29B1453D51FF220F9_&sc=1",
              "commertialOffer": {
                "discountHighlights": [
                  {
                    "name": "Promocion Estilos",
                    "__typename": "Discount"
                  }
                ],
                "teasers": [],
                "Price": 129.9,
                "ListPrice": 149.9,
                "Tax": 0,
                "taxPercentage": 0,
                "spotPrice": 129.9,
                "PriceWithoutDiscount": 149.9,
                "RewardValue": 0,
                "PriceValidUntil": "2025-06-12T16:27:23Z",
                "AvailableQuantity": 61,
                "__typename": "Offer",
                "CacheVersionUsedToCallCheckout": "1DC90E5D598247C29B1453D51FF220F9_",
                "Installments": [
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa Electron à vista",
                    "PaymentSystemName": "Visa Electron",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard Debit à vista",
                    "PaymentSystemName": "Mastercard Debit",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "TarjetaEstilos à vista",
                    "PaymentSystemName": "TarjetaEstilos",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "WH Google Pay à vista",
                    "PaymentSystemName": "WH Google Pay",
                    "__typename": "Installment"
                  }
                ]
              }
            }
          ],
          "kitItems": [],
          "attachments": [],
          "estimatedDateArrival": null
        },
        {
          "itemId": "247576",
          "name": "SASSAFRAS BLAZER SILI SEMI MODA AZUL MARINO M",
          "nameComplete": "SASSAFRAS BLAZER SILI SEMI MODA AZUL MARINO M",
          "complementName": "",
          "ean": "",
          "variations": [
            {
              "name": "Color",
              "values": [
                "AZUL MARINO"
              ],
              "__typename": "Property"
            },
            {
              "name": "Talla",
              "values": [
                "M"
              ],
              "__typename": "Property"
            }
          ],
          "referenceId": [
            {
              "Key": "RefId",
              "Value": "002293898",
              "__typename": "Reference"
            }
          ],
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "images": [
            {
              "cacheId": "3167153",
              "imageId": "3167153",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167153-#width#-#height#/SKU.jpg?v=638530228811670000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167153/SKU.jpg?v=638530228811670000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167164",
              "imageId": "3167164",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167164-#width#-#height#/SKU.jpg?v=638530228812170000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167164/SKU.jpg?v=638530228812170000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167357",
              "imageId": "3167357",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167357-#width#-#height#/SKU.jpg?v=638530228813430000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167357/SKU.jpg?v=638530228813430000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167366",
              "imageId": "3167366",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167366-#width#-#height#/SKU.jpg?v=638530228818200000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167366/SKU.jpg?v=638530228818200000",
              "imageText": "",
              "__typename": "Image"
            }
          ],
          "__typename": "SKU",
          "videos": [],
          "sellers": [
            {
              "sellerId": "1",
              "sellerName": "ESTILOS PERU",
              "sellerDefault": true,
              "__typename": "Seller",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=247576&qty=1&seller=1&sc=1&price=12990&cv=1DC90E5D598247C29B1453D51FF220F9_&sc=1",
              "commertialOffer": {
                "discountHighlights": [
                  {
                    "name": "Promocion Estilos",
                    "__typename": "Discount"
                  }
                ],
                "teasers": [],
                "Price": 129.9,
                "ListPrice": 149.9,
                "Tax": 0,
                "taxPercentage": 0,
                "spotPrice": 129.9,
                "PriceWithoutDiscount": 149.9,
                "RewardValue": 0,
                "PriceValidUntil": "2025-06-12T16:27:23Z",
                "AvailableQuantity": 60,
                "__typename": "Offer",
                "CacheVersionUsedToCallCheckout": "1DC90E5D598247C29B1453D51FF220F9_",
                "Installments": [
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa Electron à vista",
                    "PaymentSystemName": "Visa Electron",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard Debit à vista",
                    "PaymentSystemName": "Mastercard Debit",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "TarjetaEstilos à vista",
                    "PaymentSystemName": "TarjetaEstilos",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "WH Google Pay à vista",
                    "PaymentSystemName": "WH Google Pay",
                    "__typename": "Installment"
                  }
                ]
              }
            }
          ],
          "kitItems": [],
          "attachments": [],
          "estimatedDateArrival": null
        },
        {
          "itemId": "247577",
          "name": "SASSAFRAS BLAZER SILI SEMI MODA AZUL MARINO S",
          "nameComplete": "SASSAFRAS BLAZER SILI SEMI MODA AZUL MARINO S",
          "complementName": "",
          "ean": "",
          "variations": [
            {
              "name": "Color",
              "values": [
                "AZUL MARINO"
              ],
              "__typename": "Property"
            },
            {
              "name": "Talla",
              "values": [
                "S"
              ],
              "__typename": "Property"
            }
          ],
          "referenceId": [
            {
              "Key": "RefId",
              "Value": "002293897",
              "__typename": "Reference"
            }
          ],
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "images": [
            {
              "cacheId": "3167158",
              "imageId": "3167158",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167158-#width#-#height#/SKU.jpg?v=638530228810000000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167158/SKU.jpg?v=638530228810000000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167217",
              "imageId": "3167217",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167217-#width#-#height#/SKU.jpg?v=638530228806070000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167217/SKU.jpg?v=638530228806070000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167233",
              "imageId": "3167233",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167233-#width#-#height#/SKU.jpg?v=638530228810770000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167233/SKU.jpg?v=638530228810770000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167237",
              "imageId": "3167237",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167237-#width#-#height#/SKU.jpg?v=638530228808270000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167237/SKU.jpg?v=638530228808270000",
              "imageText": "",
              "__typename": "Image"
            }
          ],
          "__typename": "SKU",
          "videos": [],
          "sellers": [
            {
              "sellerId": "1",
              "sellerName": "ESTILOS PERU",
              "sellerDefault": true,
              "__typename": "Seller",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=247577&qty=1&seller=1&sc=1&price=12990&cv=1DC90E5D598247C29B1453D51FF220F9_&sc=1",
              "commertialOffer": {
                "discountHighlights": [
                  {
                    "name": "Promocion Estilos",
                    "__typename": "Discount"
                  }
                ],
                "teasers": [],
                "Price": 129.9,
                "ListPrice": 149.9,
                "Tax": 0,
                "taxPercentage": 0,
                "spotPrice": 129.9,
                "PriceWithoutDiscount": 149.9,
                "RewardValue": 0,
                "PriceValidUntil": "2025-06-12T16:27:23Z",
                "AvailableQuantity": 29,
                "__typename": "Offer",
                "CacheVersionUsedToCallCheckout": "1DC90E5D598247C29B1453D51FF220F9_",
                "Installments": [
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa Electron à vista",
                    "PaymentSystemName": "Visa Electron",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard Debit à vista",
                    "PaymentSystemName": "Mastercard Debit",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "TarjetaEstilos à vista",
                    "PaymentSystemName": "TarjetaEstilos",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "WH Google Pay à vista",
                    "PaymentSystemName": "WH Google Pay",
                    "__typename": "Installment"
                  }
                ]
              }
            }
          ],
          "kitItems": [],
          "attachments": [],
          "estimatedDateArrival": null
        },
        {
          "itemId": "247578",
          "name": "SASSAFRAS BLAZER SILI SEMI MODA AZUL MARINO XL",
          "nameComplete": "SASSAFRAS BLAZER SILI SEMI MODA AZUL MARINO XL",
          "complementName": "",
          "ean": "",
          "variations": [
            {
              "name": "Color",
              "values": [
                "AZUL MARINO"
              ],
              "__typename": "Property"
            },
            {
              "name": "Talla",
              "values": [
                "XL"
              ],
              "__typename": "Property"
            }
          ],
          "referenceId": [
            {
              "Key": "RefId",
              "Value": "002293900",
              "__typename": "Reference"
            }
          ],
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "images": [
            {
              "cacheId": "3167256",
              "imageId": "3167256",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167256-#width#-#height#/SKU.jpg?v=638530228814870000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167256/SKU.jpg?v=638530228814870000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167165",
              "imageId": "3167165",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167165-#width#-#height#/SKU.jpg?v=638530228808900000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167165/SKU.jpg?v=638530228808900000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167169",
              "imageId": "3167169",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167169-#width#-#height#/SKU.jpg?v=638530228820400000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167169/SKU.jpg?v=638530228820400000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167360",
              "imageId": "3167360",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167360-#width#-#height#/SKU.jpg?v=638530228808730000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167360/SKU.jpg?v=638530228808730000",
              "imageText": "",
              "__typename": "Image"
            }
          ],
          "__typename": "SKU",
          "videos": [],
          "sellers": [
            {
              "sellerId": "1",
              "sellerName": "ESTILOS PERU",
              "sellerDefault": true,
              "__typename": "Seller",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=247578&qty=1&seller=1&sc=1&price=12990&cv=1DC90E5D598247C29B1453D51FF220F9_&sc=1",
              "commertialOffer": {
                "discountHighlights": [
                  {
                    "name": "Promocion Estilos",
                    "__typename": "Discount"
                  }
                ],
                "teasers": [],
                "Price": 129.9,
                "ListPrice": 149.9,
                "Tax": 0,
                "taxPercentage": 0,
                "spotPrice": 129.9,
                "PriceWithoutDiscount": 149.9,
                "RewardValue": 0,
                "PriceValidUntil": "2025-06-12T16:27:23Z",
                "AvailableQuantity": 27,
                "__typename": "Offer",
                "CacheVersionUsedToCallCheckout": "1DC90E5D598247C29B1453D51FF220F9_",
                "Installments": [
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa Electron à vista",
                    "PaymentSystemName": "Visa Electron",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard Debit à vista",
                    "PaymentSystemName": "Mastercard Debit",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "TarjetaEstilos à vista",
                    "PaymentSystemName": "TarjetaEstilos",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "WH Google Pay à vista",
                    "PaymentSystemName": "WH Google Pay",
                    "__typename": "Installment"
                  }
                ]
              }
            }
          ],
          "kitItems": [],
          "attachments": [],
          "estimatedDateArrival": null
        },
        {
          "itemId": "247579",
          "name": "SASSAFRAS BLAZER SILI SEMI MODA VINO L",
          "nameComplete": "SASSAFRAS BLAZER SILI SEMI MODA VINO L",
          "complementName": "",
          "ean": "",
          "variations": [
            {
              "name": "Color",
              "values": [
                "VINO"
              ],
              "__typename": "Property"
            },
            {
              "name": "Talla",
              "values": [
                "L"
              ],
              "__typename": "Property"
            }
          ],
          "referenceId": [
            {
              "Key": "RefId",
              "Value": "002293907",
              "__typename": "Reference"
            }
          ],
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "images": [
            {
              "cacheId": "3167364",
              "imageId": "3167364",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167364-#width#-#height#/SKU.jpg?v=638530228814700000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167364/SKU.jpg?v=638530228814700000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167243",
              "imageId": "3167243",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167243-#width#-#height#/SKU.jpg?v=638530228816000000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167243/SKU.jpg?v=638530228816000000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167252",
              "imageId": "3167252",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167252-#width#-#height#/SKU.jpg?v=638530228817730000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167252/SKU.jpg?v=638530228817730000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167270",
              "imageId": "3167270",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167270-#width#-#height#/SKU.jpg?v=638530228813600000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167270/SKU.jpg?v=638530228813600000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167365",
              "imageId": "3167365",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167365-#width#-#height#/SKU.jpg?v=638530228811830000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167365/SKU.jpg?v=638530228811830000",
              "imageText": "",
              "__typename": "Image"
            }
          ],
          "__typename": "SKU",
          "videos": [],
          "sellers": [
            {
              "sellerId": "1",
              "sellerName": "ESTILOS PERU",
              "sellerDefault": true,
              "__typename": "Seller",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=247579&qty=1&seller=1&sc=1&price=12990&cv=1DC90E5D598247C29B1453D51FF220F9_&sc=1",
              "commertialOffer": {
                "discountHighlights": [
                  {
                    "name": "Promocion Estilos",
                    "__typename": "Discount"
                  }
                ],
                "teasers": [],
                "Price": 129.9,
                "ListPrice": 149.9,
                "Tax": 0,
                "taxPercentage": 0,
                "spotPrice": 129.9,
                "PriceWithoutDiscount": 149.9,
                "RewardValue": 0,
                "PriceValidUntil": "2025-06-12T16:27:23Z",
                "AvailableQuantity": 58,
                "__typename": "Offer",
                "CacheVersionUsedToCallCheckout": "1DC90E5D598247C29B1453D51FF220F9_",
                "Installments": [
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa Electron à vista",
                    "PaymentSystemName": "Visa Electron",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard Debit à vista",
                    "PaymentSystemName": "Mastercard Debit",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "TarjetaEstilos à vista",
                    "PaymentSystemName": "TarjetaEstilos",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "WH Google Pay à vista",
                    "PaymentSystemName": "WH Google Pay",
                    "__typename": "Installment"
                  }
                ]
              }
            }
          ],
          "kitItems": [],
          "attachments": [],
          "estimatedDateArrival": null
        },
        {
          "itemId": "247580",
          "name": "SASSAFRAS BLAZER SILI SEMI MODA VINO M",
          "nameComplete": "SASSAFRAS BLAZER SILI SEMI MODA VINO M",
          "complementName": "",
          "ean": "",
          "variations": [
            {
              "name": "Color",
              "values": [
                "VINO"
              ],
              "__typename": "Property"
            },
            {
              "name": "Talla",
              "values": [
                "M"
              ],
              "__typename": "Property"
            }
          ],
          "referenceId": [
            {
              "Key": "RefId",
              "Value": "002293906",
              "__typename": "Reference"
            }
          ],
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "images": [
            {
              "cacheId": "3167251",
              "imageId": "3167251",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167251-#width#-#height#/SKU.jpg?v=638530228812470000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167251/SKU.jpg?v=638530228812470000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167235",
              "imageId": "3167235",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167235-#width#-#height#/SKU.jpg?v=638530228810600000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167235/SKU.jpg?v=638530228810600000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167250",
              "imageId": "3167250",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167250-#width#-#height#/SKU.jpg?v=638530228816330000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167250/SKU.jpg?v=638530228816330000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167266",
              "imageId": "3167266",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167266-#width#-#height#/SKU.jpg?v=638530228812800000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167266/SKU.jpg?v=638530228812800000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167361",
              "imageId": "3167361",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167361-#width#-#height#/SKU.jpg?v=638530228813600000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167361/SKU.jpg?v=638530228813600000",
              "imageText": "",
              "__typename": "Image"
            }
          ],
          "__typename": "SKU",
          "videos": [],
          "sellers": [
            {
              "sellerId": "1",
              "sellerName": "ESTILOS PERU",
              "sellerDefault": true,
              "__typename": "Seller",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=247580&qty=1&seller=1&sc=1&price=12990&cv=1DC90E5D598247C29B1453D51FF220F9_&sc=1",
              "commertialOffer": {
                "discountHighlights": [
                  {
                    "name": "Promocion Estilos",
                    "__typename": "Discount"
                  }
                ],
                "teasers": [],
                "Price": 129.9,
                "ListPrice": 149.9,
                "Tax": 0,
                "taxPercentage": 0,
                "spotPrice": 129.9,
                "PriceWithoutDiscount": 149.9,
                "RewardValue": 0,
                "PriceValidUntil": "2025-06-12T16:27:23Z",
                "AvailableQuantity": 63,
                "__typename": "Offer",
                "CacheVersionUsedToCallCheckout": "1DC90E5D598247C29B1453D51FF220F9_",
                "Installments": [
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa Electron à vista",
                    "PaymentSystemName": "Visa Electron",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard Debit à vista",
                    "PaymentSystemName": "Mastercard Debit",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "TarjetaEstilos à vista",
                    "PaymentSystemName": "TarjetaEstilos",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "WH Google Pay à vista",
                    "PaymentSystemName": "WH Google Pay",
                    "__typename": "Installment"
                  }
                ]
              }
            }
          ],
          "kitItems": [],
          "attachments": [],
          "estimatedDateArrival": null
        },
        {
          "itemId": "247581",
          "name": "SASSAFRAS BLAZER SILI SEMI MODA VINO S",
          "nameComplete": "SASSAFRAS BLAZER SILI SEMI MODA VINO S",
          "complementName": "",
          "ean": "",
          "variations": [
            {
              "name": "Color",
              "values": [
                "VINO"
              ],
              "__typename": "Property"
            },
            {
              "name": "Talla",
              "values": [
                "S"
              ],
              "__typename": "Property"
            }
          ],
          "referenceId": [
            {
              "Key": "RefId",
              "Value": "002293905",
              "__typename": "Reference"
            }
          ],
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "images": [
            {
              "cacheId": "3167172",
              "imageId": "3167172",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167172-#width#-#height#/SKU.jpg?v=638530228810770000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167172/SKU.jpg?v=638530228810770000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167176",
              "imageId": "3167176",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167176-#width#-#height#/SKU.jpg?v=638530228816000000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167176/SKU.jpg?v=638530228816000000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167354",
              "imageId": "3167354",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167354-#width#-#height#/SKU.jpg?v=638530228810130000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167354/SKU.jpg?v=638530228810130000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167362",
              "imageId": "3167362",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167362-#width#-#height#/SKU.jpg?v=638530228812170000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167362/SKU.jpg?v=638530228812170000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167369",
              "imageId": "3167369",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167369-#width#-#height#/SKU.jpg?v=638530228813130000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167369/SKU.jpg?v=638530228813130000",
              "imageText": "",
              "__typename": "Image"
            }
          ],
          "__typename": "SKU",
          "videos": [],
          "sellers": [
            {
              "sellerId": "1",
              "sellerName": "ESTILOS PERU",
              "sellerDefault": true,
              "__typename": "Seller",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=247581&qty=1&seller=1&sc=1&price=12990&cv=1DC90E5D598247C29B1453D51FF220F9_&sc=1",
              "commertialOffer": {
                "discountHighlights": [
                  {
                    "name": "Promocion Estilos",
                    "__typename": "Discount"
                  }
                ],
                "teasers": [],
                "Price": 129.9,
                "ListPrice": 149.9,
                "Tax": 0,
                "taxPercentage": 0,
                "spotPrice": 129.9,
                "PriceWithoutDiscount": 149.9,
                "RewardValue": 0,
                "PriceValidUntil": "2025-06-12T16:27:23Z",
                "AvailableQuantity": 31,
                "__typename": "Offer",
                "CacheVersionUsedToCallCheckout": "1DC90E5D598247C29B1453D51FF220F9_",
                "Installments": [
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa Electron à vista",
                    "PaymentSystemName": "Visa Electron",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard Debit à vista",
                    "PaymentSystemName": "Mastercard Debit",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "TarjetaEstilos à vista",
                    "PaymentSystemName": "TarjetaEstilos",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "WH Google Pay à vista",
                    "PaymentSystemName": "WH Google Pay",
                    "__typename": "Installment"
                  }
                ]
              }
            }
          ],
          "kitItems": [],
          "attachments": [],
          "estimatedDateArrival": null
        },
        {
          "itemId": "247582",
          "name": "SASSAFRAS BLAZER SILI SEMI MODA VINO XL",
          "nameComplete": "SASSAFRAS BLAZER SILI SEMI MODA VINO XL",
          "complementName": "",
          "ean": "",
          "variations": [
            {
              "name": "Color",
              "values": [
                "VINO"
              ],
              "__typename": "Property"
            },
            {
              "name": "Talla",
              "values": [
                "XL"
              ],
              "__typename": "Property"
            }
          ],
          "referenceId": [
            {
              "Key": "RefId",
              "Value": "002293908",
              "__typename": "Reference"
            }
          ],
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "images": [
            {
              "cacheId": "3167166",
              "imageId": "3167166",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167166-#width#-#height#/SKU.jpg?v=638530228813300000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167166/SKU.jpg?v=638530228813300000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167168",
              "imageId": "3167168",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167168-#width#-#height#/SKU.jpg?v=638530228813930000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167168/SKU.jpg?v=638530228813930000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167254",
              "imageId": "3167254",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167254-#width#-#height#/SKU.jpg?v=638530228815370000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167254/SKU.jpg?v=638530228815370000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167264",
              "imageId": "3167264",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167264-#width#-#height#/SKU.jpg?v=638530228814100000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167264/SKU.jpg?v=638530228814100000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3167368",
              "imageId": "3167368",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3167368-#width#-#height#/SKU.jpg?v=638530228813770000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3167368/SKU.jpg?v=638530228813770000",
              "imageText": "",
              "__typename": "Image"
            }
          ],
          "__typename": "SKU",
          "videos": [],
          "sellers": [
            {
              "sellerId": "1",
              "sellerName": "ESTILOS PERU",
              "sellerDefault": true,
              "__typename": "Seller",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=247582&qty=1&seller=1&sc=1&price=12990&cv=1DC90E5D598247C29B1453D51FF220F9_&sc=1",
              "commertialOffer": {
                "discountHighlights": [
                  {
                    "name": "Promocion Estilos",
                    "__typename": "Discount"
                  }
                ],
                "teasers": [],
                "Price": 129.9,
                "ListPrice": 149.9,
                "Tax": 0,
                "taxPercentage": 0,
                "spotPrice": 129.9,
                "PriceWithoutDiscount": 149.9,
                "RewardValue": 0,
                "PriceValidUntil": "2025-06-12T16:27:23Z",
                "AvailableQuantity": 29,
                "__typename": "Offer",
                "CacheVersionUsedToCallCheckout": "1DC90E5D598247C29B1453D51FF220F9_",
                "Installments": [
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa Electron à vista",
                    "PaymentSystemName": "Visa Electron",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard Debit à vista",
                    "PaymentSystemName": "Mastercard Debit",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "TarjetaEstilos à vista",
                    "PaymentSystemName": "TarjetaEstilos",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "WH Google Pay à vista",
                    "PaymentSystemName": "WH Google Pay",
                    "__typename": "Installment"
                  }
                ]
              }
            }
          ],
          "kitItems": [],
          "attachments": [],
          "estimatedDateArrival": null
        },
        {
          "itemId": "248255",
          "name": "SASSAFRAS BLAZER SILI SEMI MODA BEIGE L",
          "nameComplete": "SASSAFRAS BLAZER SILI SEMI MODA BEIGE L",
          "complementName": "",
          "ean": "",
          "variations": [
            {
              "name": "Color",
              "values": [
                "BEIGE"
              ],
              "__typename": "Property"
            },
            {
              "name": "Talla",
              "values": [
                "L"
              ],
              "__typename": "Property"
            }
          ],
          "referenceId": [
            {
              "Key": "RefId",
              "Value": "002293903",
              "__typename": "Reference"
            }
          ],
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "images": [
            {
              "cacheId": "3170600",
              "imageId": "3170600",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170600-#width#-#height#/SKU.jpg?v=638532049720800000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170600/SKU.jpg?v=638532049720800000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3170608",
              "imageId": "3170608",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170608-#width#-#height#/SKU.jpg?v=638532049721600000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170608/SKU.jpg?v=638532049721600000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3170609",
              "imageId": "3170609",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170609-#width#-#height#/SKU.jpg?v=638532049721430000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170609/SKU.jpg?v=638532049721430000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3170612",
              "imageId": "3170612",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170612-#width#-#height#/SKU.jpg?v=638532049727370000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170612/SKU.jpg?v=638532049727370000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3170626",
              "imageId": "3170626",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170626-#width#-#height#/SKU.jpg?v=638532049722670000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170626/SKU.jpg?v=638532049722670000",
              "imageText": "",
              "__typename": "Image"
            }
          ],
          "__typename": "SKU",
          "videos": [],
          "sellers": [
            {
              "sellerId": "1",
              "sellerName": "ESTILOS PERU",
              "sellerDefault": true,
              "__typename": "Seller",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=248255&qty=1&seller=1&sc=1&price=12990&cv=1DC90E5D598247C29B1453D51FF220F9_&sc=1",
              "commertialOffer": {
                "discountHighlights": [
                  {
                    "name": "Promocion Estilos",
                    "__typename": "Discount"
                  }
                ],
                "teasers": [],
                "Price": 129.9,
                "ListPrice": 149.9,
                "Tax": 0,
                "taxPercentage": 0,
                "spotPrice": 129.9,
                "PriceWithoutDiscount": 149.9,
                "RewardValue": 0,
                "PriceValidUntil": "2025-06-12T16:27:22Z",
                "AvailableQuantity": 44,
                "__typename": "Offer",
                "CacheVersionUsedToCallCheckout": "1DC90E5D598247C29B1453D51FF220F9_",
                "Installments": [
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa Electron à vista",
                    "PaymentSystemName": "Visa Electron",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard Debit à vista",
                    "PaymentSystemName": "Mastercard Debit",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "TarjetaEstilos à vista",
                    "PaymentSystemName": "TarjetaEstilos",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "WH Google Pay à vista",
                    "PaymentSystemName": "WH Google Pay",
                    "__typename": "Installment"
                  }
                ]
              }
            }
          ],
          "kitItems": [],
          "attachments": [],
          "estimatedDateArrival": null
        },
        {
          "itemId": "248256",
          "name": "SASSAFRAS BLAZER SILI SEMI MODA BEIGE M",
          "nameComplete": "SASSAFRAS BLAZER SILI SEMI MODA BEIGE M",
          "complementName": "",
          "ean": "",
          "variations": [
            {
              "name": "Color",
              "values": [
                "BEIGE"
              ],
              "__typename": "Property"
            },
            {
              "name": "Talla",
              "values": [
                "M"
              ],
              "__typename": "Property"
            }
          ],
          "referenceId": [
            {
              "Key": "RefId",
              "Value": "002293902",
              "__typename": "Reference"
            }
          ],
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "images": [
            {
              "cacheId": "3170591",
              "imageId": "3170591",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170591-#width#-#height#/SKU.jpg?v=638532049721900000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170591/SKU.jpg?v=638532049721900000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3170577",
              "imageId": "3170577",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170577-#width#-#height#/SKU.jpg?v=638532049721430000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170577/SKU.jpg?v=638532049721430000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3170614",
              "imageId": "3170614",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170614-#width#-#height#/SKU.jpg?v=638532049721600000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170614/SKU.jpg?v=638532049721600000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3170632",
              "imageId": "3170632",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170632-#width#-#height#/SKU.jpg?v=638532049722370000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170632/SKU.jpg?v=638532049722370000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3170647",
              "imageId": "3170647",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170647-#width#-#height#/SKU.jpg?v=638532049726730000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170647/SKU.jpg?v=638532049726730000",
              "imageText": "",
              "__typename": "Image"
            }
          ],
          "__typename": "SKU",
          "videos": [],
          "sellers": [
            {
              "sellerId": "1",
              "sellerName": "ESTILOS PERU",
              "sellerDefault": true,
              "__typename": "Seller",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=248256&qty=1&seller=1&sc=1&price=12990&cv=1DC90E5D598247C29B1453D51FF220F9_&sc=1",
              "commertialOffer": {
                "discountHighlights": [
                  {
                    "name": "Promocion Estilos",
                    "__typename": "Discount"
                  }
                ],
                "teasers": [],
                "Price": 129.9,
                "ListPrice": 149.9,
                "Tax": 0,
                "taxPercentage": 0,
                "spotPrice": 129.9,
                "PriceWithoutDiscount": 149.9,
                "RewardValue": 0,
                "PriceValidUntil": "2025-06-12T16:27:23Z",
                "AvailableQuantity": 52,
                "__typename": "Offer",
                "CacheVersionUsedToCallCheckout": "1DC90E5D598247C29B1453D51FF220F9_",
                "Installments": [
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa Electron à vista",
                    "PaymentSystemName": "Visa Electron",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard Debit à vista",
                    "PaymentSystemName": "Mastercard Debit",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "TarjetaEstilos à vista",
                    "PaymentSystemName": "TarjetaEstilos",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "WH Google Pay à vista",
                    "PaymentSystemName": "WH Google Pay",
                    "__typename": "Installment"
                  }
                ]
              }
            }
          ],
          "kitItems": [],
          "attachments": [],
          "estimatedDateArrival": null
        },
        {
          "itemId": "248257",
          "name": "SASSAFRAS BLAZER SILI SEMI MODA BEIGE S",
          "nameComplete": "SASSAFRAS BLAZER SILI SEMI MODA BEIGE S",
          "complementName": "",
          "ean": "",
          "variations": [
            {
              "name": "Color",
              "values": [
                "BEIGE"
              ],
              "__typename": "Property"
            },
            {
              "name": "Talla",
              "values": [
                "S"
              ],
              "__typename": "Property"
            }
          ],
          "referenceId": [
            {
              "Key": "RefId",
              "Value": "002293901",
              "__typename": "Reference"
            }
          ],
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "images": [
            {
              "cacheId": "3170604",
              "imageId": "3170604",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170604-#width#-#height#/SKU.jpg?v=638532049722830000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170604/SKU.jpg?v=638532049722830000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3170586",
              "imageId": "3170586",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170586-#width#-#height#/SKU.jpg?v=638532049721900000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170586/SKU.jpg?v=638532049721900000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3170596",
              "imageId": "3170596",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170596-#width#-#height#/SKU.jpg?v=638532049720330000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170596/SKU.jpg?v=638532049720330000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3170598",
              "imageId": "3170598",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170598-#width#-#height#/SKU.jpg?v=638532049721270000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170598/SKU.jpg?v=638532049721270000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3170641",
              "imageId": "3170641",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170641-#width#-#height#/SKU.jpg?v=638532049726900000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170641/SKU.jpg?v=638532049726900000",
              "imageText": "",
              "__typename": "Image"
            }
          ],
          "__typename": "SKU",
          "videos": [],
          "sellers": [
            {
              "sellerId": "1",
              "sellerName": "ESTILOS PERU",
              "sellerDefault": true,
              "__typename": "Seller",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=248257&qty=1&seller=1&sc=1&price=12990&cv=1DC90E5D598247C29B1453D51FF220F9_&sc=1",
              "commertialOffer": {
                "discountHighlights": [
                  {
                    "name": "Promocion Estilos",
                    "__typename": "Discount"
                  }
                ],
                "teasers": [],
                "Price": 129.9,
                "ListPrice": 149.9,
                "Tax": 0,
                "taxPercentage": 0,
                "spotPrice": 129.9,
                "PriceWithoutDiscount": 149.9,
                "RewardValue": 0,
                "PriceValidUntil": "2025-06-12T16:27:23Z",
                "AvailableQuantity": 24,
                "__typename": "Offer",
                "CacheVersionUsedToCallCheckout": "1DC90E5D598247C29B1453D51FF220F9_",
                "Installments": [
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa Electron à vista",
                    "PaymentSystemName": "Visa Electron",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard Debit à vista",
                    "PaymentSystemName": "Mastercard Debit",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "TarjetaEstilos à vista",
                    "PaymentSystemName": "TarjetaEstilos",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "WH Google Pay à vista",
                    "PaymentSystemName": "WH Google Pay",
                    "__typename": "Installment"
                  }
                ]
              }
            }
          ],
          "kitItems": [],
          "attachments": [],
          "estimatedDateArrival": null
        },
        {
          "itemId": "248258",
          "name": "SASSAFRAS BLAZER SILI SEMI MODA BEIGE XL",
          "nameComplete": "SASSAFRAS BLAZER SILI SEMI MODA BEIGE XL",
          "complementName": "",
          "ean": "",
          "variations": [
            {
              "name": "Color",
              "values": [
                "BEIGE"
              ],
              "__typename": "Property"
            },
            {
              "name": "Talla",
              "values": [
                "XL"
              ],
              "__typename": "Property"
            }
          ],
          "referenceId": [
            {
              "Key": "RefId",
              "Value": "002293904",
              "__typename": "Reference"
            }
          ],
          "measurementUnit": "un",
          "unitMultiplier": 1,
          "images": [
            {
              "cacheId": "3170610",
              "imageId": "3170610",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170610-#width#-#height#/SKU.jpg?v=638532049724530000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170610/SKU.jpg?v=638532049724530000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3170606",
              "imageId": "3170606",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170606-#width#-#height#/SKU.jpg?v=638532049728300000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170606/SKU.jpg?v=638532049728300000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3170618",
              "imageId": "3170618",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170618-#width#-#height#/SKU.jpg?v=638532049723770000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170618/SKU.jpg?v=638532049723770000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3170619",
              "imageId": "3170619",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170619-#width#-#height#/SKU.jpg?v=638532049723600000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170619/SKU.jpg?v=638532049723600000",
              "imageText": "",
              "__typename": "Image"
            },
            {
              "cacheId": "3170630",
              "imageId": "3170630",
              "imageLabel": "",
              "imageTag": "<img src=\"~/arquivos/ids/3170630-#width#-#height#/SKU.jpg?v=638532049724530000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
              "imageUrl": "https://estilospe.vtexassets.com/arquivos/ids/3170630/SKU.jpg?v=638532049724530000",
              "imageText": "",
              "__typename": "Image"
            }
          ],
          "__typename": "SKU",
          "videos": [],
          "sellers": [
            {
              "sellerId": "1",
              "sellerName": "ESTILOS PERU",
              "sellerDefault": true,
              "__typename": "Seller",
              "addToCartLink": "https://portal.vtexcommercestable.com.br/checkout/cart/add?sku=248258&qty=1&seller=1&sc=1&price=12990&cv=1DC90E5D598247C29B1453D51FF220F9_&sc=1",
              "commertialOffer": {
                "discountHighlights": [
                  {
                    "name": "Promocion Estilos",
                    "__typename": "Discount"
                  }
                ],
                "teasers": [],
                "Price": 129.9,
                "ListPrice": 149.9,
                "Tax": 0,
                "taxPercentage": 0,
                "spotPrice": 129.9,
                "PriceWithoutDiscount": 149.9,
                "RewardValue": 0,
                "PriceValidUntil": "2025-06-12T16:27:23Z",
                "AvailableQuantity": 25,
                "__typename": "Offer",
                "CacheVersionUsedToCallCheckout": "1DC90E5D598247C29B1453D51FF220F9_",
                "Installments": [
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "American Express",
                    "PaymentSystemName": "American Express",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Visa",
                    "PaymentSystemName": "Visa",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Diners",
                    "PaymentSystemName": "Diners",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 64.95,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 2,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 43.3,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 3,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 32.47,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 4,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 25.98,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 5,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 21.65,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 6,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 18.55,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 7,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 16.23,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 8,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 14.43,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 9,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 12.99,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 10,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 11.8,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 11,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 10.82,
                    "InterestRate": null,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 12,
                    "Name": "Mastercard",
                    "PaymentSystemName": "Mastercard",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Visa Electron à vista",
                    "PaymentSystemName": "Visa Electron",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "Mastercard Debit à vista",
                    "PaymentSystemName": "Mastercard Debit",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "TarjetaEstilos à vista",
                    "PaymentSystemName": "TarjetaEstilos",
                    "__typename": "Installment"
                  },
                  {
                    "Value": 129.9,
                    "InterestRate": 0,
                    "TotalValuePlusInterestRate": 129.9,
                    "NumberOfInstallments": 1,
                    "Name": "WH Google Pay à vista",
                    "PaymentSystemName": "WH Google Pay",
                    "__typename": "Installment"
                  }
                ]
              }
            }
          ],
          "kitItems": [],
          "attachments": [],
          "estimatedDateArrival": null
        }
      ],
      "itemMetadata": null,
      "benefits": [],
      "categoryTree": [
        {
          "id": 1000004,
          "name": "TEXTIL",
          "href": "/textil",
          "__typename": "Category"
        },
        {
          "id": 2000008,
          "name": "DAMAS",
          "href": "/textil/damas",
          "__typename": "Category"
        },
        {
          "id": 3000209,
          "name": "SPORT Y FORMAL DAMAS PROPIO",
          "href": "/textil/damas/sport-y-formal-damas-propio",
          "__typename": "Category"
        },
        {
          "id": 4001543,
          "name": "BLAZER *SPORT Y FORMAL DAMAS PROPIO",
          "href": "/textil/damas/sport-y-formal-damas-propio/blazer--sport-y-formal-damas-propio",
          "__typename": "Category"
        },
        {
          "id": 5004343,
          "name": "BLAZER",
          "href": "/textil/damas/sport-y-formal-damas-propio/blazer--sport-y-formal-damas-propio/blazer",
          "__typename": "Category"
        }
      ]
    })

    dispatch({
      type: 'SET_PRODUCT',
      args: {
      product: {...product,productName: "DANIEL RAMIREZ"}
      },
    }) 
    
    const targetItem:any = findItemByColor(items,prettyColor);
    let  newItem:any = 		{
			"itemId": "248255",
			"name": "SASSAFRAS BLAZER SILI SEMI MODA BEIGE L",
			"nameComplete": "SASSAFRAS BLAZER SILI SEMI MODA BEIGE L",
			"complementName": "",
			"ean": "",
			"referenceId": [
				{
					"Key": "RefId",
					"Value": "002293903"
				}
			],
			"measurementUnit": "un",
			"unitMultiplier": 1,
			"modalType": null,
			"isKit": false,
			"images": [
				{
					"imageId": "3170600",
					"imageLabel": "",
					"imageTag": "<img src=\"~/arquivos/ids/3170600-#width#-#height#/SKU.jpg?v=638532049720800000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
					"imageUrl": "https://estilospe.vteximg.com.br/arquivos/ids/3170600/SKU.jpg?v=638532049720800000",
					"imageText": "",
					"imageLastModified": "2024-06-05T17:22:52.0800000Z"
				},
				{
					"imageId": "3170608",
					"imageLabel": "",
					"imageTag": "<img src=\"~/arquivos/ids/3170608-#width#-#height#/SKU.jpg?v=638532049721600000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
					"imageUrl": "https://estilospe.vteximg.com.br/arquivos/ids/3170608/SKU.jpg?v=638532049721600000",
					"imageText": "",
					"imageLastModified": "2024-06-05T17:22:52.1600000Z"
				},
				{
					"imageId": "3170609",
					"imageLabel": "",
					"imageTag": "<img src=\"~/arquivos/ids/3170609-#width#-#height#/SKU.jpg?v=638532049721430000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
					"imageUrl": "https://estilospe.vteximg.com.br/arquivos/ids/3170609/SKU.jpg?v=638532049721430000",
					"imageText": "",
					"imageLastModified": "2024-06-05T17:22:52.1430000Z"
				},
				{
					"imageId": "3170612",
					"imageLabel": "",
					"imageTag": "<img src=\"~/arquivos/ids/3170612-#width#-#height#/SKU.jpg?v=638532049727370000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
					"imageUrl": "https://estilospe.vteximg.com.br/arquivos/ids/3170612/SKU.jpg?v=638532049727370000",
					"imageText": "",
					"imageLastModified": "2024-06-05T17:22:52.7370000Z"
				},
				{
					"imageId": "3170626",
					"imageLabel": "",
					"imageTag": "<img src=\"~/arquivos/ids/3170626-#width#-#height#/SKU.jpg?v=638532049722670000\" width=\"#width#\" height=\"#height#\" alt=\"\" id=\"\" />",
					"imageUrl": "https://estilospe.vteximg.com.br/arquivos/ids/3170626/SKU.jpg?v=638532049722670000",
					"imageText": "",
					"imageLastModified": "2024-06-05T17:22:52.2670000Z"
				}
			],
			"Color": [
				"BEIGE"
			],
			"Talla": [
				"L"
			],
			"variations": [
				"Color",
				"Talla"
			],
			"sellers": [
				{
					"sellerId": "1",
					"sellerName": "ESTILOS PERU",
					"addToCartLink": "https://danieltest--estilospe.myvtex.com/checkout/cart/add?sku=248255&qty=1&seller=1&sc=1&price=12990&cv=1DC90E5D598247C29B1453D51FF220F9_&sc=1",
					"sellerDefault": true,
					"commertialOffer": {
						"DeliverySlaSamplesPerRegion": {
							"0": {
								"DeliverySlaPerTypes": [],
								"Region": null
							}
						},
						"Installments": [
							{
								"Value": 129.9,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 1,
								"PaymentSystemName": "American Express",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "American Express"
							},
							{
								"Value": 64.95,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 2,
								"PaymentSystemName": "American Express",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "American Express"
							},
							{
								"Value": 43.3,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 3,
								"PaymentSystemName": "American Express",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "American Express"
							},
							{
								"Value": 32.47,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 4,
								"PaymentSystemName": "American Express",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "American Express"
							},
							{
								"Value": 25.98,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 5,
								"PaymentSystemName": "American Express",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "American Express"
							},
							{
								"Value": 21.65,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 6,
								"PaymentSystemName": "American Express",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "American Express"
							},
							{
								"Value": 18.55,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 7,
								"PaymentSystemName": "American Express",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "American Express"
							},
							{
								"Value": 16.23,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 8,
								"PaymentSystemName": "American Express",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "American Express"
							},
							{
								"Value": 14.43,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 9,
								"PaymentSystemName": "American Express",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "American Express"
							},
							{
								"Value": 12.99,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 10,
								"PaymentSystemName": "American Express",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "American Express"
							},
							{
								"Value": 11.8,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 11,
								"PaymentSystemName": "American Express",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "American Express"
							},
							{
								"Value": 10.82,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 12,
								"PaymentSystemName": "American Express",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "American Express"
							},
							{
								"Value": 129.9,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 1,
								"PaymentSystemName": "Visa",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Visa"
							},
							{
								"Value": 64.95,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 2,
								"PaymentSystemName": "Visa",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Visa"
							},
							{
								"Value": 43.3,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 3,
								"PaymentSystemName": "Visa",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Visa"
							},
							{
								"Value": 32.47,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 4,
								"PaymentSystemName": "Visa",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Visa"
							},
							{
								"Value": 25.98,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 5,
								"PaymentSystemName": "Visa",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Visa"
							},
							{
								"Value": 21.65,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 6,
								"PaymentSystemName": "Visa",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Visa"
							},
							{
								"Value": 18.55,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 7,
								"PaymentSystemName": "Visa",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Visa"
							},
							{
								"Value": 16.23,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 8,
								"PaymentSystemName": "Visa",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Visa"
							},
							{
								"Value": 14.43,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 9,
								"PaymentSystemName": "Visa",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Visa"
							},
							{
								"Value": 12.99,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 10,
								"PaymentSystemName": "Visa",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Visa"
							},
							{
								"Value": 11.8,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 11,
								"PaymentSystemName": "Visa",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Visa"
							},
							{
								"Value": 10.82,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 12,
								"PaymentSystemName": "Visa",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Visa"
							},
							{
								"Value": 129.9,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 1,
								"PaymentSystemName": "Diners",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Diners"
							},
							{
								"Value": 64.95,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 2,
								"PaymentSystemName": "Diners",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Diners"
							},
							{
								"Value": 43.3,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 3,
								"PaymentSystemName": "Diners",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Diners"
							},
							{
								"Value": 32.47,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 4,
								"PaymentSystemName": "Diners",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Diners"
							},
							{
								"Value": 25.98,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 5,
								"PaymentSystemName": "Diners",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Diners"
							},
							{
								"Value": 21.65,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 6,
								"PaymentSystemName": "Diners",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Diners"
							},
							{
								"Value": 18.55,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 7,
								"PaymentSystemName": "Diners",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Diners"
							},
							{
								"Value": 16.23,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 8,
								"PaymentSystemName": "Diners",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Diners"
							},
							{
								"Value": 14.43,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 9,
								"PaymentSystemName": "Diners",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Diners"
							},
							{
								"Value": 12.99,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 10,
								"PaymentSystemName": "Diners",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Diners"
							},
							{
								"Value": 11.8,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 11,
								"PaymentSystemName": "Diners",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Diners"
							},
							{
								"Value": 10.82,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 12,
								"PaymentSystemName": "Diners",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Diners"
							},
							{
								"Value": 129.9,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 1,
								"PaymentSystemName": "Mastercard",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Mastercard"
							},
							{
								"Value": 64.95,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 2,
								"PaymentSystemName": "Mastercard",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Mastercard"
							},
							{
								"Value": 43.3,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 3,
								"PaymentSystemName": "Mastercard",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Mastercard"
							},
							{
								"Value": 32.47,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 4,
								"PaymentSystemName": "Mastercard",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Mastercard"
							},
							{
								"Value": 25.98,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 5,
								"PaymentSystemName": "Mastercard",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Mastercard"
							},
							{
								"Value": 21.65,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 6,
								"PaymentSystemName": "Mastercard",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Mastercard"
							},
							{
								"Value": 18.55,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 7,
								"PaymentSystemName": "Mastercard",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Mastercard"
							},
							{
								"Value": 16.23,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 8,
								"PaymentSystemName": "Mastercard",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Mastercard"
							},
							{
								"Value": 14.43,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 9,
								"PaymentSystemName": "Mastercard",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Mastercard"
							},
							{
								"Value": 12.99,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 10,
								"PaymentSystemName": "Mastercard",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Mastercard"
							},
							{
								"Value": 11.8,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 11,
								"PaymentSystemName": "Mastercard",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Mastercard"
							},
							{
								"Value": 10.82,
								"InterestRate": null,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 12,
								"PaymentSystemName": "Mastercard",
								"PaymentSystemGroupName": "creditCardPaymentGroup",
								"Name": "Mastercard"
							},
							{
								"Value": 129.9,
								"InterestRate": 0,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 1,
								"PaymentSystemName": "Visa Electron",
								"PaymentSystemGroupName": "debitCardPaymentGroup",
								"Name": "Visa Electron à vista"
							},
							{
								"Value": 129.9,
								"InterestRate": 0,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 1,
								"PaymentSystemName": "Mastercard Debit",
								"PaymentSystemGroupName": "debitCardPaymentGroup",
								"Name": "Mastercard Debit à vista"
							},
							{
								"Value": 129.9,
								"InterestRate": 0,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 1,
								"PaymentSystemName": "TarjetaEstilos",
								"PaymentSystemGroupName": "TarjetaEstilosPaymentGroup",
								"Name": "TarjetaEstilos à vista"
							},
							{
								"Value": 129.9,
								"InterestRate": 0,
								"TotalValuePlusInterestRate": 129.9,
								"NumberOfInstallments": 1,
								"PaymentSystemName": "WH Google Pay",
								"PaymentSystemGroupName": "WH Google PayPaymentGroup",
								"Name": "WH Google Pay à vista"
							}
						],
						"DiscountHighLight": [
							{
								"<Name>k__BackingField": "Promocion Estilos"
							}
						],
						"GiftSkuIds": [],
						"Teasers": [],
						"PromotionTeasers": [],
						"BuyTogether": [],
						"ItemMetadataAttachment": [],
						"Price": 129.9,
						"ListPrice": 149.9,
						"PriceWithoutDiscount": 149.9,
						"FullSellingPrice": 129.9,
						"RewardValue": 0,
						"PriceValidUntil": "2025-06-12T13:31:58Z",
						"AvailableQuantity": 44,
						"IsAvailable": true,
						"Tax": 0,
						"DeliverySlaSamples": [
							{
								"DeliverySlaPerTypes": [],
								"Region": null
							}
						],
						"GetInfoErrorMessage": null,
						"CacheVersionUsedToCallCheckout": "1DC90E5D598247C29B1453D51FF220F9_",
						"PaymentOptions": {
							"installmentOptions": [
								{
									"paymentSystem": "1",
									"bin": null,
									"paymentName": "American Express",
									"paymentGroupName": "creditCardPaymentGroup",
									"value": 12990,
									"installments": [
										{
											"count": 1,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 12990,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 1,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 12990,
													"total": 12990
												}
											]
										},
										{
											"count": 2,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 6495,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 2,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 6495,
													"total": 12990
												}
											]
										},
										{
											"count": 3,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 4330,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 3,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 4330,
													"total": 12990
												}
											]
										},
										{
											"count": 4,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 3247,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 4,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 3247,
													"total": 12990
												}
											]
										},
										{
											"count": 5,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 2598,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 5,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 2598,
													"total": 12990
												}
											]
										},
										{
											"count": 6,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 2165,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 6,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 2165,
													"total": 12990
												}
											]
										},
										{
											"count": 7,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1855,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 7,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1855,
													"total": 12990
												}
											]
										},
										{
											"count": 8,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1623,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 8,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1623,
													"total": 12990
												}
											]
										},
										{
											"count": 9,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1443,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 9,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1443,
													"total": 12990
												}
											]
										},
										{
											"count": 10,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1299,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 10,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1299,
													"total": 12990
												}
											]
										},
										{
											"count": 11,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1180,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 11,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1180,
													"total": 12990
												}
											]
										},
										{
											"count": 12,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1082,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 12,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1082,
													"total": 12990
												}
											]
										}
									]
								},
								{
									"paymentSystem": "2",
									"bin": null,
									"paymentName": "Visa",
									"paymentGroupName": "creditCardPaymentGroup",
									"value": 12990,
									"installments": [
										{
											"count": 1,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 12990,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 1,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 12990,
													"total": 12990
												}
											]
										},
										{
											"count": 2,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 6495,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 2,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 6495,
													"total": 12990
												}
											]
										},
										{
											"count": 3,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 4330,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 3,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 4330,
													"total": 12990
												}
											]
										},
										{
											"count": 4,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 3247,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 4,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 3247,
													"total": 12990
												}
											]
										},
										{
											"count": 5,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 2598,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 5,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 2598,
													"total": 12990
												}
											]
										},
										{
											"count": 6,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 2165,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 6,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 2165,
													"total": 12990
												}
											]
										},
										{
											"count": 7,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1855,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 7,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1855,
													"total": 12990
												}
											]
										},
										{
											"count": 8,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1623,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 8,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1623,
													"total": 12990
												}
											]
										},
										{
											"count": 9,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1443,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 9,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1443,
													"total": 12990
												}
											]
										},
										{
											"count": 10,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1299,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 10,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1299,
													"total": 12990
												}
											]
										},
										{
											"count": 11,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1180,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 11,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1180,
													"total": 12990
												}
											]
										},
										{
											"count": 12,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1082,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 12,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1082,
													"total": 12990
												}
											]
										}
									]
								},
								{
									"paymentSystem": "3",
									"bin": null,
									"paymentName": "Diners",
									"paymentGroupName": "creditCardPaymentGroup",
									"value": 12990,
									"installments": [
										{
											"count": 1,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 12990,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 1,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 12990,
													"total": 12990
												}
											]
										},
										{
											"count": 2,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 6495,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 2,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 6495,
													"total": 12990
												}
											]
										},
										{
											"count": 3,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 4330,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 3,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 4330,
													"total": 12990
												}
											]
										},
										{
											"count": 4,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 3247,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 4,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 3247,
													"total": 12990
												}
											]
										},
										{
											"count": 5,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 2598,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 5,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 2598,
													"total": 12990
												}
											]
										},
										{
											"count": 6,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 2165,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 6,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 2165,
													"total": 12990
												}
											]
										},
										{
											"count": 7,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1855,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 7,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1855,
													"total": 12990
												}
											]
										},
										{
											"count": 8,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1623,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 8,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1623,
													"total": 12990
												}
											]
										},
										{
											"count": 9,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1443,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 9,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1443,
													"total": 12990
												}
											]
										},
										{
											"count": 10,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1299,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 10,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1299,
													"total": 12990
												}
											]
										},
										{
											"count": 11,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1180,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 11,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1180,
													"total": 12990
												}
											]
										},
										{
											"count": 12,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1082,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 12,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1082,
													"total": 12990
												}
											]
										}
									]
								},
								{
									"paymentSystem": "4",
									"bin": null,
									"paymentName": "Mastercard",
									"paymentGroupName": "creditCardPaymentGroup",
									"value": 12990,
									"installments": [
										{
											"count": 1,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 12990,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 1,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 12990,
													"total": 12990
												}
											]
										},
										{
											"count": 2,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 6495,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 2,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 6495,
													"total": 12990
												}
											]
										},
										{
											"count": 3,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 4330,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 3,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 4330,
													"total": 12990
												}
											]
										},
										{
											"count": 4,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 3247,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 4,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 3247,
													"total": 12990
												}
											]
										},
										{
											"count": 5,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 2598,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 5,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 2598,
													"total": 12990
												}
											]
										},
										{
											"count": 6,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 2165,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 6,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 2165,
													"total": 12990
												}
											]
										},
										{
											"count": 7,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1855,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 7,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1855,
													"total": 12990
												}
											]
										},
										{
											"count": 8,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1623,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 8,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1623,
													"total": 12990
												}
											]
										},
										{
											"count": 9,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1443,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 9,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1443,
													"total": 12990
												}
											]
										},
										{
											"count": 10,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1299,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 10,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1299,
													"total": 12990
												}
											]
										},
										{
											"count": 11,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1180,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 11,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1180,
													"total": 12990
												}
											]
										},
										{
											"count": 12,
											"hasInterestRate": null,
											"interestRate": null,
											"value": 1082,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 12,
													"hasInterestRate": null,
													"interestRate": null,
													"value": 1082,
													"total": 12990
												}
											]
										}
									]
								},
								{
									"paymentSystem": "10",
									"bin": null,
									"paymentName": "Visa Electron",
									"paymentGroupName": "debitCardPaymentGroup",
									"value": 12990,
									"installments": [
										{
											"count": 1,
											"hasInterestRate": false,
											"interestRate": 0,
											"value": 12990,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 1,
													"hasInterestRate": false,
													"interestRate": 0,
													"value": 12990,
													"total": 12990
												}
											]
										}
									]
								},
								{
									"paymentSystem": "65",
									"bin": null,
									"paymentName": "Mastercard Debit",
									"paymentGroupName": "debitCardPaymentGroup",
									"value": 12990,
									"installments": [
										{
											"count": 1,
											"hasInterestRate": false,
											"interestRate": 0,
											"value": 12990,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 1,
													"hasInterestRate": false,
													"interestRate": 0,
													"value": 12990,
													"total": 12990
												}
											]
										}
									]
								},
								{
									"paymentSystem": "805",
									"bin": null,
									"paymentName": "TarjetaEstilos",
									"paymentGroupName": "TarjetaEstilosPaymentGroup",
									"value": 12990,
									"installments": [
										{
											"count": 1,
											"hasInterestRate": false,
											"interestRate": 0,
											"value": 12990,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 1,
													"hasInterestRate": false,
													"interestRate": 0,
													"value": 12990,
													"total": 12990
												}
											]
										}
									]
								},
								{
									"paymentSystem": "900",
									"bin": null,
									"paymentName": "WH Google Pay",
									"paymentGroupName": "WH Google PayPaymentGroup",
									"value": 12990,
									"installments": [
										{
											"count": 1,
											"hasInterestRate": false,
											"interestRate": 0,
											"value": 12990,
											"total": 12990,
											"sellerMerchantInstallments": [
												{
													"id": "ESTILOSPE",
													"count": 1,
													"hasInterestRate": false,
													"interestRate": 0,
													"value": 12990,
													"total": 12990
												}
											]
										}
									]
								}
							],
							"paymentSystems": [
								{
									"id": 805,
									"name": "TarjetaEstilos",
									"groupName": "TarjetaEstilosPaymentGroup",
									"validator": null,
									"stringId": "805",
									"template": "TarjetaEstilosPaymentGroup-template",
									"requiresDocument": false,
									"isCustom": false,
									"description": null,
									"requiresAuthentication": false,
									"dueDate": "2024-06-19T13:21:38.4766679Z",
									"availablePayments": null
								},
								{
									"id": 1,
									"name": "American Express",
									"groupName": "creditCardPaymentGroup",
									"validator": null,
									"stringId": "1",
									"template": "creditCardPaymentGroup-template",
									"requiresDocument": false,
									"isCustom": false,
									"description": null,
									"requiresAuthentication": false,
									"dueDate": "2024-06-19T13:21:38.4766679Z",
									"availablePayments": null
								},
								{
									"id": 2,
									"name": "Visa",
									"groupName": "creditCardPaymentGroup",
									"validator": null,
									"stringId": "2",
									"template": "creditCardPaymentGroup-template",
									"requiresDocument": false,
									"isCustom": false,
									"description": null,
									"requiresAuthentication": false,
									"dueDate": "2024-06-19T13:21:38.4766679Z",
									"availablePayments": null
								},
								{
									"id": 3,
									"name": "Diners",
									"groupName": "creditCardPaymentGroup",
									"validator": null,
									"stringId": "3",
									"template": "creditCardPaymentGroup-template",
									"requiresDocument": false,
									"isCustom": false,
									"description": null,
									"requiresAuthentication": false,
									"dueDate": "2024-06-19T13:21:38.4766679Z",
									"availablePayments": null
								},
								{
									"id": 4,
									"name": "Mastercard",
									"groupName": "creditCardPaymentGroup",
									"validator": null,
									"stringId": "4",
									"template": "creditCardPaymentGroup-template",
									"requiresDocument": false,
									"isCustom": false,
									"description": null,
									"requiresAuthentication": false,
									"dueDate": "2024-06-19T13:21:38.4766679Z",
									"availablePayments": null
								},
								{
									"id": 10,
									"name": "Visa Electron",
									"groupName": "debitCardPaymentGroup",
									"validator": null,
									"stringId": "10",
									"template": "debitCardPaymentGroup-template",
									"requiresDocument": false,
									"isCustom": false,
									"description": null,
									"requiresAuthentication": false,
									"dueDate": "2024-06-19T13:21:38.4766679Z",
									"availablePayments": null
								},
								{
									"id": 65,
									"name": "Mastercard Debit",
									"groupName": "debitCardPaymentGroup",
									"validator": null,
									"stringId": "65",
									"template": "debitCardPaymentGroup-template",
									"requiresDocument": false,
									"isCustom": false,
									"description": null,
									"requiresAuthentication": false,
									"dueDate": "2024-06-19T13:21:38.4766679Z",
									"availablePayments": null
								},
								{
									"id": 900,
									"name": "WH Google Pay",
									"groupName": "WH Google PayPaymentGroup",
									"validator": null,
									"stringId": "900",
									"template": "WH Google PayPaymentGroup-template",
									"requiresDocument": false,
									"isCustom": false,
									"description": null,
									"requiresAuthentication": false,
									"dueDate": "2024-06-19T13:21:38.4766679Z",
									"availablePayments": null
								}
							],
							"payments": [],
							"giftCards": [],
							"giftCardMessages": [],
							"availableAccounts": [],
							"availableTokens": []
						}
					}
				}
			],
			"Videos": [],
			"estimatedDateArrival": null
		}


  console.log("targetItem -> ",targetItem);
  console.log("newItem -> ",newItem);

    // dispatch({
    //   type: 'SET_SELECTED_ITEM',
    //   args: {
    //   item: newItem,
    //   },
    // }) 
    

    
    // dispatch({
    //   type: 'SELECT_IMAGE_VARIATION',
    //   args: {
    //     selectedImageVariationSKU: "https://lorempicsum.com/wp-content/uploads/2022/10/pexels-skitterphoto-42415.jpg",
    //   },
    // })


    

    //   dispatch({
    //     type: 'SET_LOADING_ITEM',
    //     args: { loadingItem: false },
    //   })
    

    console.log('product actual ->',product);
    

  }

  function findItemByColor(items:any, color:any):any {
    // console.log("color ", color);
    
    return items.find((item:any) => {
        return item.variations.some((variation:any) => {
            return variation.name === "Color" && variation.values?.[0].replaceAll('/','').replaceAll(' ','').toLowerCase() == color.replaceAll('/','').replaceAll(' ','').toLowerCase() ;
        });
    });
  }

  const dictionaryColors:any = {

  "beige": styles.beige,
  "vino1": styles.vino1,
  "nude": styles.nude,
  "blanco": styles.blanco,
  "ftwrwhite":styles.ftwrwhite,
  "negro": styles.negro,
  "negronegro": styles.negronegro,
  "crema": styles.crema,
  "dorado": styles.dorado,
  "plata": styles.plata,
  "cacao": styles.cacao,
  "marino": styles.marino,
  "rojo": styles.rojo,
  "taupe": styles.taupe,
  "nudenegro": styles.nudenegro,
  "verde":styles.verde,
  "blancodorado":styles.blancodorado,
  "rosa":styles.rosa, 
  "negro4":styles.negro4,
  "olivo":styles.olivo, 
  "hueso":styles.hueso, 
  "beigeperla":styles.beigeperla,
  "marfiloro":styles.marfiloro, 
  "calendula":styles.calendula, 
  "marfil":styles.marfil, 
  "camel":styles.camel,
  "cafe":styles.cafe, 
  "tan":styles.tan, 
  "gris":styles.gris, 
  "wisky":styles.wisky,
  "beigeoro":styles.beigeoro,
  "paloderosa":styles.paloderosa,
  "rosado":styles.rosado
  ,"darkwash":styles.darkwash
  ,"mediumwash" :styles.mediumwash 
  ,"azulmedio":styles.azulmedio
  ,"ltblue":styles.ltblue
  ,"ecru" :styles.ecru 
  ,"kaki" :styles.kaki 
  ,"verdemilitar":styles.verdemilitar
  ,"cuadros1":styles.cuadros1
  ,"lightwash":styles.lightwash
  ,"azul":styles.azul
  ,"burgundi":styles.burgundi
  ,"cocoa1":styles.cocoa1
  ,"olivooscuro":styles.olivooscuro
  ,"verdeolivo" :styles.verdeolivo 
  ,"arcilla" :styles.arcilla 
  ,"lacretostado":styles.lacretostado
  ,"amarillomostaza":styles.amarillomostaza
,"azulmarino":styles.azulmarino,
"vino":styles.vino,
"color2":styles.color2,
"color1":styles.color1,
"rojorayas1old":styles.rojorayas1old,
"negrorayas1old":styles.negrorayas1old,
"print1":styles.print1,
"print2":styles.print2,
"cuadrosgris":styles.cuadrosgris,
"cuadrosbeige":styles.cuadrosbeige,
"iceblue":styles.iceblue
  }

  
  return (
    <div>
      {colorValues && (
        <div className={styles.containerColors}>
          {colorValues.map((color:any, index:number) => {       
            const prettyColor = color.name.toLowerCase().replaceAll(' ','').replaceAll('/','');
            return (
              <button
                className={styles.pickerSelect}
                onClick={(e) => {
                  onClickColor(e,prettyColor);
                }}
                key={index}
                value = {`${dictionaryColors[`${prettyColor}`]}` 
            }
              >
                <div
                  className={` ${styles.colorSelector}  ${dictionaryColors[`${prettyColor}`]}`}
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
