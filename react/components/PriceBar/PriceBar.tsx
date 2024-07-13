import React, { useState, useEffect, useCallback } from 'react'
import { useRuntime } from 'vtex.render-runtime'
import { useProduct } from 'vtex.product-context'
import styles from './styles.css'

interface TimeRemaining {
  total: number
  days: number
  hours: number
  minutes: number
  seconds: number
}

const calculateTimeRemaining = (offerEndDate: Date): TimeRemaining => {
  const now = new Date().getTime()
  const total = offerEndDate.getTime() - now
  const seconds = Math.floor((total / 1000) % 60)
  const minutes = Math.floor((total / 1000 / 60) % 60)
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24)
  const days = Math.floor(total / (1000 * 60 * 60 * 24))
  return { total, days, hours, minutes, seconds }
}

const PriceBar = ({ offerEndDate = '2024-07-11T23:59:59', clusterId = '' }) => {
  const runtime = useRuntime() || {}
  const productContext = useProduct()
  const route = runtime?.route ?? {}
  const product = productContext?.product ?? {}
  const productClusters = product?.productClusters ?? {}

  const canonicalPath = route?.canonicalPath || '/'

  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(
    calculateTimeRemaining(new Date(offerEndDate))
  )
  const [isOfferEnded, setIsOfferEnded] = useState<boolean>(false)
  const updateTimeRemaining = useCallback(() => {
    const remaining = calculateTimeRemaining(new Date(offerEndDate))
    setTimeRemaining(remaining)
    setTimePercentage(calculateTimePercentage(new Date(offerEndDate)))
    if (remaining.total <= 0) {
      setIsOfferEnded(true)
    }
  }, [offerEndDate])

  const calculateTimePercentage = (offerEndDate: Date): number => {
    const now = new Date().getTime()
    const total = offerEndDate.getTime() - now
    const duration = offerEndDate.getTime() - new Date().setHours(0, 0, 0, 0)
    return Math.max((total / duration) * 100, 0)
  }

  const [timePercentage, setTimePercentage] = useState<number>(
    calculateTimePercentage(new Date(offerEndDate))
  )

  useEffect(() => {
    const timer = setInterval(updateTimeRemaining, 1000)
    return () => clearInterval(timer)
  }, [updateTimeRemaining])

  if (isOfferEnded) {
    return null
  }

  const targetCluster = productClusters.find(
    (item: any) => item.id == clusterId
  )

  if (canonicalPath != '/' && targetCluster) {
    return (
      <div className={styles.dealItemRemaining}>
        <span className={styles.clockLabel}>
          Queda{timeRemaining.days != 1 && 'n'}{' '}
        </span>{' '}
        <span className={styles.timeColor}>
          {String(timeRemaining.days)} día{timeRemaining.days != 1 && 's'}{' '}
          {String(timeRemaining.hours).padStart(2, '0')}:
          {String(timeRemaining.minutes).padStart(2, '0')}:
          {String(timeRemaining.seconds).padStart(2, '0')}
        </span>{' '}
        <div className={styles.timeBar}>
          <div
            className={styles.countdownBarFill}
            style={{ width: `${timePercentage}%` }}
          ></div>
        </div>
      </div>
    )
  } else {
    return null // O lo que sea necesario retornar cuando canonicalPath != path
  }
}

export default PriceBar
