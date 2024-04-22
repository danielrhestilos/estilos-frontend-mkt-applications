import React, { useMemo, useState } from "react"
import { request } from "./hooks/useApiRequest"
import { Image } from 'vtex.store-image';
import { useProduct } from 'vtex.product-context'
import { index as RichText } from 'vtex.rich-text'
import { useCssHandles } from 'vtex.css-handles'
import RenderDropdown from "./components/RenderDropdown"


interface InitializaedAccesoriesProps {
  type: string
  title: string
  description: string
  logo: string
}

const Warranty = ({ type, title, description, logo }: InitializaedAccesoriesProps) => {
  const producto = useProduct()
  const { product, selectedItem } = producto;

  const { sellers } = selectedItem || {}
  const { productId } = product || {};
  const selectedPrice = sellers?.[0].commertialOffer.Price

  const [renderProductRecommendations, setRenderProductRecommendations] = useState([]);
  const [isAvailable, setIsAvailable] = useState(false)


  const CSS_HANDLES = [
    'borderContainer',
    'titleContent',
    'descriptionContent'
  ]

  const handles = useCssHandles(CSS_HANDLES);

  useMemo(() => {
    if (sellers) {
      sellers?.map((seller: { commertialOffer: { AvailableQuantity: any; }; }) => {
        const {
          commertialOffer: { AvailableQuantity },
        } = seller
        if (AvailableQuantity > 0) {
          setIsAvailable(true)
        }
      })
    }
  }, [sellers])

  useMemo(() => {
    if (type && isAvailable) {
      async function getToken() {
        const response: any = await request({
          url: `/api/catalog_system/pub/products/crossselling/${type}/${productId}`,
          headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
          },
          method: 'GET',
        })
        const data = await response;
        setRenderProductRecommendations(data);
      };
      if (!renderProductRecommendations.length) {
        getToken();
      }
    }
  }, [isAvailable])

  if (!renderProductRecommendations.length) {
    return ""
  }

  return (
    <div className={`${handles.borderContainer} w-100 pv5 ph4 ba br3`}>
      <div className="flex w-100">
        <Image
          src={logo}
          alt={title}
          rel=''
          width={'100%'}
          height={'100%'}
          maxWidth={'48px'}
          maxHeight={'48px'}
          minWidth={'48px'}
          minHeight={'48px'}
          className='w-100'
        />
        <div className="flex flex-column w-100 ml5">
          <div className={handles.titleContent}>
            <RichText text={title} />
          </div>
          <div className={handles.descriptionContent}>
            <RichText text={description} />
          </div>
        </div>
      </div>
      <div className="w-100 mt5">
        <RenderDropdown renderProductRecommendations={renderProductRecommendations} selectedPrice={selectedPrice} />
      </div>
    </div>
  )
}

Warranty.defaultProps = {
  type: 'accessories',
  title: 'GARANTÍA EXTENDIDA',
  description: 'Garantiza el perfecto estado de tus artefactos por más tiempo',
  logo: ''
}

Warranty.schema = {
  title: 'Garantía extendida',
  description: 'Contenido de garantía extendida',
  type: 'object',
  properties: {
    type: {
      title: 'Tipo de información',
      description: '',
      type: 'string'
    },
    logo: {
      title: 'Inserte logo',
      description: 'Tamaño de la imagen debe ser de 32 x 32',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader'
      }
    },
    title: {
      title: 'Título',
      description: 'Título informativo',
      type: 'string'
    },
    description: {
      title: 'Descripción',
      description: 'Descripción detallada',
      type: 'string'
    }
  }
}

export default Warranty
