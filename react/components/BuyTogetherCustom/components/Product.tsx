import React, { useState, useEffect, useMemo } from 'react'
import { request } from '../../Warranty/hooks/useApiRequest'
import style from './styles.css'
import { useRuntime } from 'vtex.render-runtime'
import { FormattedCurrency } from 'vtex.format-currency'
import { IconPlusLines } from 'vtex.styleguide'
import IconEqual from '../icons/IconEqual'
import { useLazyQuery } from 'react-apollo'
import QUERY_GET_PRODUCT from '../../../graphql/query.products-byIdentifier.graphql'
import { Wrapper } from 'vtex.add-to-cart-button'

export interface ProductProps {
  product: any
  currentProductId: any
  currentProductImage: any
  products: any
  setProducts: any
}

const Product: React.FunctionComponent<ProductProps> = ({
  product,
  currentProductId,
  currentProductImage,
  products,
  setProducts,
}) => {
  // const [products, setProducts] = useState<any>([])
  const [productBT, setProductBT] = useState<any>()

  const { navigate } = useRuntime()

  useEffect(() => {
    getPriceDiscount()
  }, [product])

  const [
    searchProductsByIdentifier,
    { data: productInformation, loading },
  ] = useLazyQuery(QUERY_GET_PRODUCT, {
    fetchPolicy: 'no-cache',
  })

  useMemo(() => {
    const getProductIdentification = async () => {
      const response: any = await request({
        url: `https://vtexest.estilos.com.pe/integrations/catalog/sku/${product}`,
        headers: {
          Accept: '*/*',
        },
        method: 'GET',
      })
      const { status, data } = await response
      if (status === 200) {
        const variables = {
          value: data.ProductId,
          field: 'id',
        }
        searchProductsByIdentifier({
          variables,
        })
      }
    }
    getProductIdentification()
  }, [currentProductId])

  useMemo(() => {
    if (loading !== true && productInformation !== undefined) {
      setProductBT(productInformation.product)
    }
  }, [productInformation])

  const handleRedirect = (linkText: any) => {
    navigate({
      to: `/${linkText}/p`,
    })
  }

  const getPriceDiscount = () => {
    var raw = JSON.stringify({
      items: [
        {
          id: product,
          quantity: 1,
          seller: '1',
        },
        {
          id: currentProductId,
          quantity: 1,
          seller: '1',
        },
      ],
      country: '{{countryCode-ISO-3-digits}}',
    })

    var requestOptions: any = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: raw,
      redirect: 'follow',
    }

    fetch(`/api/checkout/pub/orderforms/simulation`, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        const { error, items } = JSON.parse(result)
        if (!error) {
          setProducts(items)
        }
      })
      .catch((error) => console.log('error', error))
  }

  function capitalizeWords(str: any) {
    return str?.toLowerCase()
  }

  const renderedTitleProduct = () => {
    const { productName, linkText } = productBT
    return (
      <div>
        <div
          className={style.title__product}
          onClick={() => handleRedirect(linkText)}
        >
          {capitalizeWords(productName)}
        </div>
      </div>
    )
  }

  const renderedImage = () => {
    const { items, linkText } = productBT
    const { images } = items[0]
    const { imageUrl } = images[0]

    return (
      <img
        className={style.content__img}
        src={imageUrl}
        width="120"
        height="120"
        onClick={() => handleRedirect(linkText)}
      />
    )
  }

  const renderedTotalPriceAndBuyButton = () => {
    var total = 0
    var ahorro = 0
    products.map((product: any) => {
      total += product.sellingPrice / 100
      ahorro += product.price - product.sellingPrice
    })

    const { items } = productBT
    const { sellers } = items[0]
    const { sellerId } = sellers[0]

    let seller = sellerId ?? '1'

    return (
      <div className={style.container__price}>
        <div className={style.discount__price}>
          Sólo por: <FormattedCurrency value={total} />{' '}
        </div>
        <div className={style.total__price}>
          Ahorra: <FormattedCurrency value={ahorro / 100} />
        </div>
        <div className={style.discount__buttonContainer}>
          <Wrapper
            text="Comprar juntos"
            skuItems={[
              {
                id: products[1].id,
                quantity: 1,
                seller: seller,
              },
              {
                id: products[0].id,
                quantity: 1,
                seller: seller,
              },
            ]}
          />
        </div>
      </div>
    )
  }

  if (productBT) {
    const { items } = productBT
    const { sellers } = items[0]
    const {
      commertialOffer: { AvailableQuantity },
    } = sellers[0]

    if (AvailableQuantity === 0) {
      return <></>
    }
  } else {
    return <></>
  }

  return (
    <div className={style.container__product}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {/* <div>Mostar producto padre</div> */}
        <img
          src={currentProductImage}
          className={style.content__img}
          width="120"
          height="120"
        />
        <div className={style.content__product}>Estás viendo</div>
        {/* <div><RenderImage imageUrl={currentProductImage}</div> */}
      </div>
      <div className={style.plus}>
        <IconPlusLines size={20} />
      </div>
      {/* <ExtensionPoint id="buy-together" suggestedProducts={[]} /> */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          maxWidth: '150px',
        }}
      >
        {/* <div><RenderImage imageUrl={imageUrl}</div> */}
        {productBT && renderedImage()}
        <div className={style.content__product}>
          {productBT && renderedTitleProduct()}
        </div>
      </div>
      <div className={style.plus}>
        <IconEqual />
      </div>
      <div className={style.container__total}>
        {renderedTotalPriceAndBuyButton()}
      </div>
    </div>
  )
}

export default Product
