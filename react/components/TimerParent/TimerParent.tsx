import React, { useState, useEffect } from 'react'

const TimerParent = ({ fechaExpiracion, children }: any) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const fechaExp: any = new Date(fechaExpiracion)
    const ahora: any = new Date()

    if (fechaExp <= ahora) {
      setVisible(false)
      return
    } else {
      const tiempoRestante = fechaExp - ahora
      const temporizador = setTimeout(() => setVisible(false), tiempoRestante)
      return () => clearTimeout(temporizador) // Limpia el temporizador cuando el componente se desmonta
    }
  }, [fechaExpiracion])

  return visible ? <div>{children}</div> : null
}

TimerParent.getSchema = () => {
  return {
    title: 'Ajuster timer ',
    type: 'object',
    properties: {
      fechaExpiracion: {
        type: 'string',
        title: 'fecha expiracion',
        default: '2024-08-17T23:58:50',
      },
    },
  }
}

export default TimerParent
