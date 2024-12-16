import React, { useEffect } from 'react'

// Define la interfaz para `window` y su propiedad `ttq`
declare global {
  interface Window {
    ttq: TikTokPixelType
  }
}

type TikTokPixelType = {
  methods: string[]
  setAndDefer: (t: any, e: string) => void
  instance: (t: string) => any
  load: (sdkId: string, options?: any) => void
  page: () => void
  [key: string]: any
}

const TikTokPixel: React.FC = () => {
  useEffect(() => {
    // Evita inyectar el script más de una vez
    if (!document.getElementById('tiktok-pixel-script')) {
      const script = document.createElement('script')
      script.id = 'tiktok-pixel-script'
      script.type = 'text/javascript'
      script.async = true
      script.src =
        'https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=CT9P543C77U1LMCPUSQG&lib=ttq'
      document.body.appendChild(script)
    }

    // Configuración del objeto TikTok Analytics
    window.ttq = window.ttq || ([] as any)
    const ttq = window.ttq

    ttq.methods = [
      'page',
      'track',
      'identify',
      'instances',
      'debug',
      'on',
      'off',
      'once',
      'ready',
      'alias',
      'group',
      'enableCookie',
      'disableCookie',
      'holdConsent',
      'revokeConsent',
      'grantConsent',
    ]

    ttq.setAndDefer = function (t: any, e: string) {
      t[e] = function () {
        t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
      }
    }

    for (let i = 0; i < ttq.methods.length; i++) {
      ttq.setAndDefer(ttq, ttq.methods[i])
    }

    ttq.instance = function (t: string) {
      const e = ttq._i[t] || []
      for (let n = 0; n < ttq.methods.length; n++) {
        ttq.setAndDefer(e, ttq.methods[n])
      }
      return e
    }

    ttq.load = function (e: string, n?: any) {
      const r = 'https://analytics.tiktok.com/i18n/pixel/events.js'
      ttq._i = ttq._i || {}
      ttq._i[e] = []
      ttq._i[e]._u = r
      ttq._t = ttq._t || {}
      ttq._t[e] = +new Date()
      ttq._o = ttq._o || {}
      ttq._o[e] = n || {}
    }

    // Carga del Pixel
    ttq.load('CT9P543C77U1LMCPUSQG')
    ttq.page()
  }, [])

  return null // No renderiza nada
}

export default TikTokPixel
