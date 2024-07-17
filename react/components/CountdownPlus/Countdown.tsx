import React, { useEffect, useState } from 'react'
import {
  getTwoDaysFromNow,
  isValidDate,
  remaining,
} from './components/utils/time'
import './components/styles/estilospe-countdownplus-0-x-countdown.css'
import RenderCountDownSimple from './components/RenderCountDownSimple'
import RenderCountdownWithBanner from './components/RenderCountdownWithBanner'
import { CountdownSchema } from './schema'

interface CountdownProps {
  targetDate: string
  title: string
  backgroundColor: string
  fontColor: string
  descriptionPromotion: string
  fontColorDescription: string
  fontColorCountdownCounter: string
  countdownIconPhone: string
  countdownIconTablet: string
  countdownIconDesktop: string
  countdownBannerPhone: string
  countdownBannerTablet: string
  countdownBannerDesktop: string
  hideIconImage: boolean
  textCtaButton: string
  linkButton: string
  hideBannerImage: boolean
  countdownWithBanner: boolean
  countdownComponentWithBanner: boolean
  countdownSimple: boolean
  countdownVisibilityBanner: boolean
  countdownVisibilityProducts: boolean
  descriptionItem1: string
  descriptionItem2: string
  descriptionItem3: string
  fontColorCountdown: string
  children: any[]
}


const DEFAULT_TARGET_DATE = getTwoDaysFromNow()

const Countdown: StorefrontFunctionComponent<CountdownProps> = ({
  targetDate = DEFAULT_TARGET_DATE,
  title,
  backgroundColor,
  fontColor,
  descriptionPromotion,
  fontColorDescription,
  fontColorCountdownCounter,
  countdownIconPhone,
  countdownIconTablet,
  countdownIconDesktop,
  countdownBannerPhone,
  countdownBannerTablet,
  countdownBannerDesktop,
  hideIconImage,
  linkButton,
  hideBannerImage,
  countdownWithBanner,
  countdownSimple,
  countdownVisibilityBanner,
  countdownVisibilityProducts,
  descriptionItem1,
  descriptionItem2,
  descriptionItem3,
  fontColorCountdown,
  children,
}) => {
  const [remainingTime, setRemainingTime] = useState<number>(
    calculateRemainingTime()
  )
  const [showCountdown, setShowCountdown] = useState(false)

  // const textCtaButtonEdit = textCtaButton || "Comprar ahora"
  const linkButtonEdit = linkButton || 'https://www.estilos.com.pe/'
  const countdownBannerPhoneEdit = countdownBannerPhone || 'bannerPhone.png'
  const countdownBannerTabletEdit = countdownBannerTablet || 'bannerDesktop.png'
  const countdownBannerDesktopEdit =
    countdownBannerDesktop || 'bannerDesktop.png'
  const descriptionItem1Edit = descriptionItem1 || ''
  const descriptionItem2Edit = descriptionItem2 || ''
  const descriptionItem3Edit = descriptionItem3 || ''

  var normalizedProps = {
    backgroundColorEdit: backgroundColor || '#f5f5f5',
    hideIconImage,
    countdownVisibilityBanner,
    countdownVisibilityProducts,
    countdownIconTabletEdit: countdownIconTablet || 'imgCountdown.png',
    countdownIconDesktopEdit: countdownIconDesktop || 'imgCountdown.png',
    countdownIconPhoneEdit: countdownIconPhone || 'imgCountdown.png',
    descriptionPromotionEdit: descriptionPromotion || '',
    fontColorDescriptionEdit: fontColorDescription || '#5F5959',
    fontColorEdit: fontColor || '#E91111',
    titleText: title || '',
    fontColorCountdownCounterEdit: fontColorCountdownCounter || '#3A3333',
    fontColorCountdownEdit: fontColorCountdown || '#3A3333',
    children,
  }

  let activated = 0
  useEffect(() => {
    if (!isValidDate(targetDate)) {
      return // If date is not validated, don't start the counter
    }
    const interval = setInterval(() => {
      const currentDate = new Date().getTime()
      const targetDateMillis = new Date(targetDate).getTime()
      const difference = targetDateMillis - currentDate

      if (difference <= 0) {
        clearInterval(interval)
        setRemainingTime(0)
        setShowCountdown(false) // Hide counter when reaches Zero 0
      } else {
        setRemainingTime(difference)
        if (activated === 0) {
          setShowCountdown(true)
          activated = 1
        }
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  function calculateRemainingTime(): number {
    const currentMillis = new Date().getTime()
    const targetDateMillis = new Date(targetDate).getTime()

    if (currentMillis >= targetDateMillis) {
      return 0 // Counter should have already reached Zero 0
    }

    return targetDateMillis - currentMillis
  }

  if (!showCountdown) {
    return null // Hide component if showCountdown is false
  }

  const { days, hours, minutes, seconds } = remaining(remainingTime)

  return (
    showCountdown && (
      <>
        {countdownWithBanner ? (
          <RenderCountdownWithBanner
            normalizedProps={normalizedProps}
            countdownVisibility={countdownVisibilityBanner}
            hideBannerImage={hideBannerImage}
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            descriptionItem1Edit={descriptionItem1Edit}
            descriptionItem2Edit={descriptionItem2Edit}
            descriptionItem3Edit={descriptionItem3Edit}
            countdownBannerPhoneEdit={countdownBannerPhoneEdit}
            linkButtonEdit={linkButtonEdit}
            // textCtaButtonEdit={textCtaButtonEdit}
            countdownBannerDesktopEdit={countdownBannerDesktopEdit}
            countdownBannerTabletEdit={countdownBannerTabletEdit}
          />
        ) : (
          ''
        )}
        {countdownSimple ? (
          <RenderCountDownSimple
            normalizedProps={normalizedProps}
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
            countdownVisibility={countdownVisibilityProducts}
          />
        ) : (
          ''
        )}
      </>
    )
  )
}

Countdown.getSchema = () => {
  return CountdownSchema
}

export default Countdown
