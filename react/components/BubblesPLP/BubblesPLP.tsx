import React from 'react'
import { SliderLayout } from 'vtex.slider-layout'
import styles from './styles.css'
import { useRuntime } from 'vtex.render-runtime'

function BubblesPLP({ container }: any) {
  const { navigate, route } = useRuntime()

  const onClickCircle = (link: string) => {
    navigate({
      to: link,
    })
  }

  return (
    <SliderLayout
      infinite={true}
      // showNavigationArrows="desktopOnly"
      showPaginationDots={'always'}
      usePagination={true}
      fullWidth={false}
      arrowSize={5}
      itemsPerPage={{ desktop: 7, mobile: 3, tablet: 4 }}
      centerMode="disabled"
      centerModeSlidesGap
    >
      {container.map((item: any, index: number) => (
        <div key={index} className={styles.circleContainer}>
          {item.circleElement.map((circle: any, circleIndex: number) => (
            <div key={circleIndex} onClick={() => onClickCircle(circle.link)}>
              <img
                src={circle.imageUrl}
                className={
                  route.path == circle.link ? styles.circleElement : ''
                }
              />{' '}
              <p className={styles.seoText}>{circle.seoText}</p>
            </div>
          ))}
        </div>
      ))}
    </SliderLayout>
  )
}

BubblesPLP.defaultProps = {
  container: [],
}

export default BubblesPLP
