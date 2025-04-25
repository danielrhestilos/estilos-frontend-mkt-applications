import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
  'countdownComponent',
  'countdownIcon',
  'countdownIconImage',
  'countdownIconPhone',
  'countdownIconTablet',
  'countdownIconDesktop',
  'countdownBannerImage',
  'titleAndDescription',
  'title',
  'description',
  'button',
  'countdownCounter',
  'timeRemainingCounter',
  'timeRemaining',
  'timeRemainingText',
  'countdownList',
  'countdownListContent',
  'countdownListItems',
  'countdownButton',
  'countdownButtonCta',
  'countdownBanner',
  'countdownBannerDesktop',
  'countdownComponentWithBanner',
  'containerCountDownWithBannerItems',
  'containerCountDownWithBannerItems__iconImage',
  'containerCountDownWithBannerItems__titleAndDescription',
  'containerCountDownWithBannerPicture',
  'countdownRegular',
  'containerCountdownRegular',
  'containerCountdownRegularAndChildren',
  'containerCountdownRegularAndChildrenFull',
]

interface Props {
  normalizedProps: {
    backgroundColorEdit: string
    hideIconImage: boolean
    countdownIconTabletEdit: string
    countdownIconDesktopEdit: string
    countdownIconPhoneEdit: string
    descriptionPromotionEdit: string
    fontColorDescriptionEdit: string
    fontColorEdit: string
    titleText: string
    fontColorCountdownCounterEdit: string
    fontColorCountdownEdit: string
    countdownWidthFull: boolean
    children: any[]
  }
  days: string
  hours: string
  minutes: string
  seconds: string
  countdownVisibility: boolean
}

const RenderCountDownSimple = ({
  normalizedProps,
  // days,
  hours,
  minutes,
  seconds,
  countdownVisibility,
}: Props) => {
  const handles = useCssHandles(CSS_HANDLES)
  const containerClass = !normalizedProps?.countdownWidthFull
    ? `${handles.containerCountdownRegularAndChildren}`
    : `${handles.containerCountdownRegularAndChildrenFull}`
  return (
    <div
      className={containerClass}
      style={{ backgroundColor: `${normalizedProps.backgroundColorEdit}` }}
    >
      <div className={`${handles.countdownRegular}`}>
        {normalizedProps.hideIconImage ? (
          <div className={`${handles.containerCountdownRegular}`}>
            <div
              className={`${handles.containerCountDownWithBannerItems__iconImage}`}
            >
              <picture className={`${handles.countdownIconImage}`}>
                <source
                  media="(min-width:768px)"
                  srcSet={`/arquivos/${normalizedProps.countdownIconTabletEdit}`}
                />
                <source
                  media="(min-width:1024px)"
                  srcSet={`/arquivos/${normalizedProps.countdownIconDesktopEdit}`}
                />
                <img
                  src={`/arquivos/${normalizedProps.countdownIconPhoneEdit}`}
                  alt=""
                />
              </picture>
            </div>
          </div>
        ) : (
          ''
        )}

        <div className={`${handles.titleAndDescription}`}>
          {normalizedProps.descriptionPromotionEdit !== '' ? (
            <h2
              className={`${handles.description}`}
              style={{ color: `${normalizedProps.fontColorDescriptionEdit}` }}
            >
              {normalizedProps.descriptionPromotionEdit}
            </h2>
          ) : (
            ''
          )}
          <h4
            className={`${handles.title}`}
            style={{ color: `${normalizedProps.fontColorEdit}` }}
          >
            {normalizedProps.titleText}
          </h4>
        </div>
        {countdownVisibility ? (
          <div
            className={`${handles.countdownCounter}`}
            style={{
              color: `${normalizedProps.fontColorCountdownCounterEdit}`,
            }}
          >
            {/* <div className={`${handles.timeRemainingCounter}`}>
              <div className={`${handles.timeRemaining}`}>{days}</div>
              <div
                className={`${handles.timeRemainingText}`}
                style={{
                  color: `${normalizedProps.fontColorCountdownEdit}`,
                  display: 'none',
                }}
              >
                Días
              </div>
            </div> */}
            <div className={`${handles.timeRemainingCounter}`}>
              <div className={`${handles.timeRemaining}`}>{hours}</div>
              <div
                className={`${handles.timeRemainingText}`}
                style={{ color: `${normalizedProps.fontColorCountdownEdit}` }}
              >
                Horas
              </div>
            </div>
            <div className={`${handles.timeRemainingCounter}`}>
              <div className={`${handles.timeRemaining}`}>{minutes}</div>
              <div
                className={`${handles.timeRemainingText}`}
                style={{ color: `${normalizedProps.fontColorCountdownEdit}` }}
              >
                Minutos
              </div>
            </div>
            <div className={`${handles.timeRemainingCounter}`}>
              <div className={`${handles.timeRemaining}`}>{seconds}</div>
              <div
                className={`${handles.timeRemainingText}`}
                style={{ color: `${normalizedProps.fontColorCountdownEdit}` }}
              >
                Segundos
              </div>
            </div>
          </div>
        ) : (
          ''
        )}
        <div></div>
      </div>
      <div>{normalizedProps.children[0]}</div>
    </div>
  )
}
export default RenderCountDownSimple
