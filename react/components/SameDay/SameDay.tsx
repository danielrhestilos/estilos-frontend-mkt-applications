// import styles from './SameDay.module.css'

import React, { useState, useEffect } from 'react'

type ScheduledDisplayProps = {
  horaActivacion: string // Formato "HH:MM"
  horaExpiracion: string // Formato "HH:MM"
  children: React.ReactNode
}

const SameDay: StorefrontFunctionComponent<ScheduledDisplayProps> = ({
  horaActivacion,
  horaExpiracion,
  children,
}) => {
  console.log('children ', children)

  const [isVisible, setIsVisible] = useState(false)

  const checkVisibility = () => {
    const now = new Date()
    const currentMinutes = now.getHours() * 60 + now.getMinutes()
    console.log('currentMinutes', currentMinutes)

    const [startH, startM] = horaActivacion.split(':').map(Number)
    const [endH, endM] = horaExpiracion.split(':').map(Number)

    const startMinutes = startH * 60 + startM
    const endMinutes = endH * 60 + endM
    console.log('startMinutes', startMinutes)
    console.log('endMinutes', endMinutes)
    console.log(
      'visible: ',
      currentMinutes >= startMinutes && currentMinutes < endMinutes
    )

    setIsVisible(currentMinutes >= startMinutes && currentMinutes < endMinutes)
  }

  useEffect(() => {
    checkVisibility()
    const interval = setInterval(checkVisibility, 60000) // Verifica cada minuto
    return () => clearInterval(interval)
  }, [horaActivacion, horaExpiracion])

  return isVisible ? <>{children}</> : null
}

export default SameDay
