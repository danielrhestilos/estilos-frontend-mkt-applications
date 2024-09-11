import React from 'react'
import styles from './main.css'
import useRevealOnScroll from './../../hooks/revealHook'

interface RevealProps {
  isBanner: boolean
  children: any[]
}

const Reveal: StorefrontFunctionComponent<RevealProps> = ({
  children,
  isBanner,
}) => {
  const { isVisible, elementRef } = useRevealOnScroll()
  console.log('isBanner ->', isBanner)

  return (
    <>
      {!isBanner ? (
        <div
          ref={elementRef}
          className={`${styles.revealElement} ${
            isVisible ? styles.visible : ''
          }`}
        >
          {children}
        </div>
      ) : (
        <div
          ref={elementRef}
          className={`${styles.revealBanner} ${
            isVisible ? styles.visible : ''
          }`}
        >
          {children}
        </div>
      )}
    </>
  )
}

Reveal.schema = {
  title: 'Reveal',
  description: 'Reveal',
  type: 'object',
  properties: {
    isBanner: {
      title: '',
      description: 'is banner',
      type: 'boolean',
      default: false,
    },
  },
}

export default Reveal
