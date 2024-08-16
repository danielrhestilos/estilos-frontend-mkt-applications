export const CountdownSchema = {
  title: 'Countdown',
  description: 'Editor Countdown',
  type: 'object',
  properties: {
    countdownWithBanner: {
      title: 'Activar contador con Banner',
      description: 'Activar cContador con Banner',
      type: 'boolean',
      default: false,
    },
    countdownSimple: {
      title: 'Activar contador Simple',
      description: 'Activar contador Simple',
      type: 'boolean',
      default: false,
    },
    countdownVisibilityBanner: {
      title: 'Visualizar conteo regresivo para banners',
      description: 'Visualizar conteo regresivo para banners',
      type: 'boolean',
      default: true,
    },
    countdownVisibilityProducts: {
      title: 'Visualizar conteo regresivo para productos',
      description: 'Visualizar conteo regresivo para productos',
      type: 'boolean',
      default: true,
    },
    targetDate: {
      title: 'Día final de la cuenta regresiva',
      description: '(Formato: año/mes/día)',
      type: 'string',
      default: null,
    },
    fontColorCountdownCounter: {
      title: 'Color de los números del contador',
      description:
        'Elije el de los números del contador en exadecimal, ejemplo #E91111',
      type: 'string',
      default: null,
    },
    backgroundColor: {
      title: 'Color de fondo del banner',
      description:
        'Establece el color de fondo del contador en exadecimal ejemplo: #E1E1E1',
      type: 'string',
      default: null,
    },
    fontColorCountdown: {
      title: 'Elige el color del texto del contador',
      description:
        'Establece el color de los textos días, horas, minutos y segundos en exadecimal, ejemplo: #ffffff',
      type: 'string',
      default: null,
    },
    title: {
      title: 'Título de la campaña',
      description: 'Ejemplo: Blackday - CyberEstilos - Lanzamiento de producto',
      type: 'string',
      placeholder: 'Título de la campaña',
      default: null,
    },
    fontColor: {
      title: 'Color de la letra del título',
      description:
        'Establece el color del título de la campaña en exadecimal, ejemplo: #000000',
      type: 'string',
      default: null,
    },
    descriptionPromotion: {
      title: 'Subtítulo de la promoción',
      description: 'Ejemplo: Aprovecha las mejores ofertas del año',
      type: 'string',
      default: 'Oferta por tiempo limitado',
    },
    fontColorDescription: {
      title: 'Color de fuente del texto de descripción',
      description:
        'Recuerda establecer un valor exadecimal, ejemplo de color blanco (#ffffff)',
      type: 'string',
      default: null,
    },
    // textCtaButton: {
    //   title: 'Texto del botón',
    //   description: 'Define el llamado a la acción, por ejemplo: "COMPRA AHORA"',
    //   type: 'string',
    //   default: null

    // },
    linkButton: {
      title: 'Link del botón',
      description: 'Link de producto, categoría o colección de la promoción.',
      type: 'string',
      default: null,
    },
    hideIconImage: {
      title: 'Agregar icono de oferta',
      description: 'test Ocultar img',
      type: 'boolean',
      default: false,
    },
    multiBanners: {
      title: 'Multi banners',
      description: '',
      type: 'boolean',
      default: false,
    },
    countdownIconPhone: {
      title: 'Icono en Celulares',
      description: 'Define el icono de celular, ejemplo: imgCountdown.png',
      type: 'string',
      default: null,
    },
    countdownIconTablet: {
      title: 'Icono en Tabletas',
      description: 'Define el icono de Tablet ejemplo: imgCountdown.png',
      type: 'string',
      default: null,
    },
    countdownIconDesktop: {
      title: 'Icono en Computadores',
      description: 'Define el icono de Monitores ejemplo: imgCountdown.png',
      type: 'string',
      default: null,
    },
    hideBannerImage: {
      title: 'Mostrar imagen de Contador',
      description: 'Elije el banner del contador ejemplo: ',
      type: 'boolean',
      default: false,
    },
    countdownBannerPhone: {
      title: 'Banner en Celulares',
      description: 'Define el Banner en Celulares ejemplo: bannerPhone.png',
      type: 'string',
      default: null,
    },
    countdownBannerTablet: {
      title: 'Banner en Tabletas',
      description: 'Define el Banner en Tabletas ejemplo: bannerTablet.png',
      type: 'string',
      default: null,
    },
    countdownBannerDesktop: {
      title: 'Banner en Monitores',
      description: 'Define el Banner en Monitores ejemplo: bannerDesktop.png',
      type: 'string',
      default: null,
    },
    descriptionItem1: {
      title: 'Descripción item 1',
      description: 'Define las caracterisiticas del producto',
      type: 'string',
      default: 'Mackbook Pro',
    },
    descriptionItem2: {
      title: 'Descripción item 2',
      description: 'Define las caracterisiticas del producto',
      type: 'string',
      default: 'Ipad Pro',
    },
    descriptionItem3: {
      title: 'Descripción item 3',
      description: 'Define las caracterisiticas del producto',
      type: 'string',
      default: 'Iphone 12 Pro',
    },
  },
}
