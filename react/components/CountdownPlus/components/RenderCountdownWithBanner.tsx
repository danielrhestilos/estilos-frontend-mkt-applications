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
  'fullBanner',
  'fullBannerT',
  'fullBannerM',
]

interface Props {
  normalizedProps: {
    backgroundColorEdit: string
    countdownIconTabletEdit: string
    countdownIconDesktopEdit: string
    countdownIconPhoneEdit: string
    descriptionPromotionEdit: string
    fontColorDescriptionEdit: string
    fontColorEdit: string
    titleText: string
    fontColorCountdownCounterEdit: string
    fontColorCountdownEdit: string
    children: any[]
  }
  hideBannerImage: boolean
  countdownVisibility: boolean
  days: string
  hours: string
  minutes: string
  seconds: string
  descriptionItem1Edit: string
  descriptionItem2Edit: string
  descriptionItem3Edit: string
  // textCtaButtonEdit: string,
  /* linkButtonEdit: string
  countdownBannerPhoneEdit: string
  countdownBannerDesktopEdit: string
  countdownBannerTabletEdit: string */

  imageBannerSet: ImageBanner[]
}

interface ImageBanner {
  countdownBannerDesktopEdit: string
  countdownBannerTabletEdit: string
  countdownBannerPhoneEdit: string
  linkButtonEdit: string
}

const RenderCountdownWithBanner = ({
  normalizedProps,
  hideBannerImage,
  countdownVisibility,
  days,
  hours,
  minutes,
  seconds,
  descriptionItem1Edit,
  descriptionItem2Edit,
  descriptionItem3Edit,
  imageBannerSet,
}: // countdownBannerPhoneEdit,
// linkButtonEdit,
// textCtaButtonEdit,
// countdownBannerDesktopEdit,
// countdownBannerTabletEdit,
Props) => {
  const handles = useCssHandles(CSS_HANDLES)
  // console.log('linkButtonEdit->', linkButtonEdit)

  return (
    <div className={`${handles.countdownComponent}`}>
      {imageBannerSet?.map((item: ImageBanner) => {
        return (
          <a href={item.linkButtonEdit} className="no-underline">
            <div className={`${handles.countdownComponentWithBanner}`}>
              <div className={`${handles.containerCountDownWithBannerItems}`}>
                {descriptionItem1Edit !== '' ||
                descriptionItem2Edit !== '' ||
                descriptionItem3Edit !== '' ? (
                  <div className={`${handles.countdownList}`}>
                    <ul className={`${handles.countdownListContent}`}>
                      {descriptionItem1Edit !== '' ? (
                        <li className={`${handles.countdownListItems}`}>
                          {descriptionItem1Edit}
                        </li>
                      ) : (
                        ''
                      )}
                      {descriptionItem2Edit !== '' ? (
                        <li className={`${handles.countdownListItems}`}>
                          {descriptionItem2Edit}
                        </li>
                      ) : (
                        ''
                      )}
                      {descriptionItem3Edit !== '' ? (
                        <li className={`${handles.countdownListItems}`}>
                          {descriptionItem3Edit}
                        </li>
                      ) : (
                        ''
                      )}
                    </ul>
                  </div>
                ) : (
                  ''
                )}

                <>
                  {countdownVisibility ? (
                    <div
                      className={`${handles.countdownCounter}`}
                      style={{
                        color: `${normalizedProps.fontColorCountdownCounterEdit}`,
                      }}
                    >
                      <div className={`${handles.timeRemainingCounter}`}>
                        <div className={`${handles.timeRemaining}`}>{days}</div>
                        <div
                          className={`${handles.timeRemainingText}`}
                          style={{
                            color: `${normalizedProps.fontColorCountdownEdit}`,
                          }}
                        >
                          Días
                        </div>
                      </div>
                      <div className={`${handles.timeRemainingCounter}`}>
                        <div className={`${handles.timeRemaining}`}>
                          {hours}
                        </div>
                        <div
                          className={`${handles.timeRemainingText}`}
                          style={{
                            color: `${normalizedProps.fontColorCountdownEdit}`,
                          }}
                        >
                          Horas
                        </div>
                      </div>
                      <div className={`${handles.timeRemainingCounter}`}>
                        <div className={`${handles.timeRemaining}`}>
                          {minutes}
                        </div>
                        <div
                          className={`${handles.timeRemainingText}`}
                          style={{
                            color: `${normalizedProps.fontColorCountdownEdit}`,
                          }}
                        >
                          Minutos
                        </div>
                      </div>
                      <div className={`${handles.timeRemainingCounter}`}>
                        <div className={`${handles.timeRemaining}`}>
                          {seconds}
                        </div>
                        <div
                          className={`${handles.timeRemainingText}`}
                          style={{
                            color: `${normalizedProps.fontColorCountdownEdit}`,
                          }}
                        >
                          Segundos
                        </div>
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </>
                {/* <div className={`${handles.countdownButton}`}>
              <a className={`${handles.countdownButtonCta}`} href={`${linkButtonEdit}`}>{textCtaButtonEdit}</a>
            </div> */}
              </div>
              <div className={`${handles.containerCountDownWithBannerPicture}`}>
                <div className={`${handles.countdownBannerDesktop}`}>
                  {hideBannerImage ? (
                    <>
                      <img
                        src={`https://estilospe.vtexassets.com/assets/vtex.file-manager-graphql/images/${item.countdownBannerDesktopEdit}`}
                        alt=""
                        className={`${handles.fullBanner}`}
                      />
                      <img
                        src={`https://estilospe.vtexassets.com/assets/vtex.file-manager-graphql/images/${item.countdownBannerTabletEdit}`}
                        alt=""
                        className={`${handles.fullBanner} ${handles.fullBannerT}`}
                      />
                      <img
                        src={`https://estilospe.vtexassets.com/assets/vtex.file-manager-graphql/images/${item.countdownBannerPhoneEdit}`}
                        alt=""
                        className={`${handles.fullBanner} ${handles.fullBannerM}`}
                      />
                    </>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </a>
        )
      })}
    </div>
  )
}

export default RenderCountdownWithBanner
