import React from 'react'
import Layout from './Layout'
import useResize from '../../hooks/sizeScreenHook'
import styles from './styles.css'
import Video from "./../Video/Video"
// import Anchor from './../Anchor/Anchor'
// import { useRuntime } from 'vtex.render-runtime'
function TemplatesBuilderPro(props: any) {
  // const { navigate } = useRuntime()
  const [, isMobil] = useResize()
  // const handleRedirect = (linkText: any) => {
  //   navigate({
  //     to: linkText,
  //   })
  // }
  return (
    <div>

      {props?.elementos?.map((child: any, index: number) => (
        <Layout
          key={index}
          typeLayout={child.typeLayout}
          urlVideo={child.urlVideo}
          titlLayout={child.titlLayout}
          idLayout={child.idLayout}
          colorTitlLayout={child.colorTitlLayout}
          fontSizeTitlLayout={child.fontSizeTitlLayout}
          fontFamilyTitlLayout={child.fontFamilyTitlLayout}
          fontWeightTitlLayout={child.fontWeightTitlLayout}
          menu={props?.menu}
        >
          {child?.images?.map((image: any, imgIndex: number) => (
            <a
              // onClick={() => handleRedirect(image.link)}
              href={image.link}
              target="_blank"
              className={image.main ? styles.contBannerMain : styles.contBanner}
              style={{ backgroundColor: image.bgColor, display: 'block' }}
            >
              {
                child.typeLayout == 'video'
                ?
                <Video
                  url= {child.urlVideo}
                />
                :
                <img
                  key={imgIndex}
                  src={image.urlImage}
                  alt={image.altImage}
                  className={styles.thumb}
                  style={!isMobil ? { display: 'block', height: '100%' ,width:"100%"} : {width:"100%"}}
                />
              }
             
              <div className={styles.textBanner}>
                <p
                  className={
                    !image.whiteText
                      ? `${styles.hotText}`
                      : `${styles.whiteText} ${styles.hotText}`
                  }
                >
                  {image?.hotText}
                </p>
                <div
                  className={
                    !image.whiteText
                      ? `${styles.textMessage}`
                      : `${styles.textMessage} ${styles.whiteText}`
                  }
                  dangerouslySetInnerHTML={{ __html: image?.textMessage }}
                />
                <p
                  className={
                    !image.whiteText
                      ? `${styles.textCTABlack}`
                      : `${styles.textCTAWhite}`
                  }
                >
                  {image?.textCTA}
                </p>
              </div>
            </a>
          ))}
        </Layout>
      ))}
    </div>
  )
}

TemplatesBuilderPro.schema = {
  title: 'Componente Layout Builder',
  description: 'A component that displays a layout with images',
  type: 'object',
  properties: {
    menu:{
      title: 'Menu',
      description: 'Menu a mostrar',
      type: 'object',
      properties:{
        show:{
          type: 'boolean',
          title: '¿Tendrá menú?',
          description:'Tendrá menú',
          default: false,
        },
        elementos:{
          title:"Elementos del menú",
          description:"Conjunto de elementos del menú a mostrar",
          type:"array",
          items:{
            type:"object",
            properties:{
              label:{
                type:"string",
                title:"Texto",
                description:"texto para la opcion del menú"
              },
              targetId:{
                type:"string",
                title:"Id",
                description:"Id opcion del menú"
              },
            }
          }
        }
      }
    },
    elementos: {
      title: 'Elementos',
      description: 'Conjunto de elementos a mostrar',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          typeLayout: {
            title: 'Tipo del layout',
            description:
              'Tipo del layout de este elemento. Considera que los collage tienen 4 imágenes',
            default: 'main',
            enum: [
              'main',
              'solo',
              'duo',
              'triple',
              'collage1',
              'collage2',
              'collage-pro',
              'collage-max',
            ],
            type: 'string',
          },      
          colorTitlLayout: {
            title: 'color para Titulo del layout',
            description:
              'color visible del layout de este elemento. Aparece en la parte superior del layout',
            default: '#e91111',
            type: 'string',
          },    
          fontSizeTitlLayout: {
            title: 'fontSize para Titulo del layout',
            description:
              'fontSize visible del layout de este elemento. Aparece en la parte superior del layout',
            default: '1.6rem',
            type: 'string',
          },
          fontFamilyTitlLayout: {
            title: 'fontFamily para Titulo del layout',
            description:
              'fontFamily visible del layout de este elemento. Aparece en la parte superior del layout',
            default: 'Outfit',
            type: 'string',
          },
          fontWeightTitlLayout: {
            title: 'fontWeight para Titulo del layout',
            description:
              'fontWeight visible del layout de este elemento. Aparece en la parte superior del layout',
            default: '700',
            type: 'string',
          },
          urlVideo: {
            title: 'URL del video',
            description: 'URL del video a mostrar',
            type: 'string',
          },
          titlLayout: {
            title: 'Titulo del layout',
            description:
              'Titulo visible del layout de este elemento. Aparece en la parte superior del layout',
            default: '',
            type: 'string',
          },
          idLayout: {
            title: 'ID Layout',
            description:
              'Id layout',
            default: '',
            type: 'string',
          },
          images: {
            title: 'Imagenes',
            description: 'Imagenes asociadas al layout',
            type: 'array',
            items: {
              type: 'object',
              properties: {
                whiteText: {
                  title: 'Texto en color blanco',
                  description: 'Mostrar el texto en color blanco',
                  type: 'boolean',
                },
                urlImage: {
                  title: 'Imagen URL',
                  description: 'Url de la imagen',
                  type: 'string',
                  widget: {
                    // here you can choose a file in your computer
                    'ui:widget': 'image-uploader',
                  },
                },
                link: {
                  title: 'LINK',
                  description: 'Link',
                  type: 'string',
                  default: 'https://www.estilos.com.pe',
                },
                textMessage: {
                  title: 'Mensaje central del banner',
                  description: 'Mensaje central del banner',
                  type: 'string',
                  default: 'COLECCIÓN DE MUJERES',
                },

                hotText: {
                  title: 'Mensaje del banner de la parte superior',
                  type: 'string',
                  default: 'transparent',
                },

                textCTA: {
                  title: 'Mensaje del banner Call to action',
                  description: 'Mensaje del banner Call to action',
                  type: 'string',
                  default: 'COMPRAR AHORA',
                },

                bgColor: {
                  title: 'Hexadecimal Bg Color',
                  description: 'BG color from banners',
                  type: 'string',
                  default: 'transparent',
                },

                main: {
                  title: 'Es el principal',
                  description:
                    'Indicar si el texto tendrá un estilo de banner principal',
                  type: 'boolean',
                },

                altImage: {
                  title: 'Alt Image',
                  description: 'The alt text for the image',
                  type: 'string',
                },
                ContentSeoImage: {
                  title: 'Content SEO Image',
                  description: 'SEO content for the image',
                  type: 'string',
                },
                contentSeoOptional: {
                  title: 'Content SEO Optional',
                  description: 'Optional SEO content for the image',
                  type: 'string',
                  default: null,
                },
              },
              required: ['urlImage', 'altImage', 'ContentSeoImage'],
            },
          },
        },
        required: ['typeLayout', 'images'],
      },
    },
  },
}

export default TemplatesBuilderPro
