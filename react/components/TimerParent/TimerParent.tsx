// import React, { useState, useEffect } from 'react'

// const TimerParent = ({ fechaExpiracion, children }: any) => {
//   const [visible, setVisible] = useState(true)

//   useEffect(() => {
//     const fechaExp: any = new Date(fechaExpiracion)
//     const ahora: any = new Date()

//     if (fechaExp <= ahora) {
//       setVisible(false)
//       return
//     } else {
//       const tiempoRestante = fechaExp - ahora
//       const temporizador = setTimeout(() => setVisible(false), tiempoRestante)
//       return () => clearTimeout(temporizador) // Limpia el temporizador cuando el componente se desmonta
//     }
//   }, [fechaExpiracion])

//   return visible ? <div>{children}</div> : null
// }

// TimerParent.getSchema = () => {
//   return {
//     title: 'Ajuster timer ',
//     type: 'object',
//     properties: {
//       fechaExpiracion: {
//         type: 'string',
//         title: 'fecha expiracion',
//         default: '2024-08-17T23:58:50',
//       },
//     },
//   }
// }

// export default TimerParent

import React, { useState, useEffect } from 'react'

interface TimerParentProps {
  fechaActivacion: string
  fechaExpiracion: string
  children: React.ReactNode
}

const TimerParent: StorefrontFunctionComponent<TimerParentProps> = ({
  fechaActivacion,
  fechaExpiracion,
  children,
}) => {
  const [visible, setVisible] = useState(false)

  useEffect((): any => {
    const fechaAct = new Date(fechaActivacion).getTime()
    const fechaExp = new Date(fechaExpiracion).getTime()
    const ahora = Date.now()

    if (ahora >= fechaAct && ahora < fechaExp) {
      setVisible(true)
      const temporizador = setTimeout(() => setVisible(false), fechaExp - ahora)
      return () => clearTimeout(temporizador)
    } else if (ahora < fechaAct) {
      const activador = setTimeout(() => {
        setVisible(true)
        const temporizador = setTimeout(
          () => setVisible(false),
          fechaExp - fechaAct
        )
        return () => clearTimeout(temporizador)
      }, fechaAct - ahora)
      return () => clearTimeout(activador)
    } else {
      setVisible(false)
    }
  }, [fechaActivacion, fechaExpiracion])

  return visible ? <div>{children}</div> : null
}

TimerParent.getSchema = () => {
  return {
    title: 'Ajustar timer',
    type: 'object',
    properties: {
      fechaActivacion: {
        type: 'string',
        title: 'Fecha de activación',
        default: '2024-08-20T00:00:00',
      },
      fechaExpiracion: {
        type: 'string',
        title: 'Fecha de expiración',
        default: '2024-08-24T23:59:59',
      },
    },
  }
}

export default TimerParent
