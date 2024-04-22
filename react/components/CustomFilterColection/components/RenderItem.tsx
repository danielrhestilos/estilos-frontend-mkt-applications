import React, { useEffect, useState } from "react";
import { Image } from 'vtex.store-image';
// import { useDevice } from 'vtex.device-detector'
import { useCssHandles } from 'vtex.css-handles'
import { useRuntime } from 'vtex.render-runtime'

import style from './styles.css'

interface ItemProps {
  scrollY: number,
  url: string,
  logo: string,
  nombre: string,
  rowcontentStyle: any
}

const CSS_HANDLES = [
  'showContentName',
  'childrenContainer',
  'notShowContentName',
  'contenNameContainer',
  'textContainer'
]

const RenderItem = ({ scrollY, url, logo, nombre, rowcontentStyle }: ItemProps) => {
  const [isActive, setIsActive] = useState(false)
  const [position, setPosition] = useState({ heigth: 0, top: 0 })

  const handles = useCssHandles(CSS_HANDLES);
  // const { isMobile } = useDevice()
  const { navigate } = useRuntime()

  /* This `useEffect` hook is checking if the `scrollY` value is within a certain range of the
  `position` of the component on the page. If it is, then it sets the `active` state to `true`,
  otherwise it sets it to `false`. This is used to determine whether or not the component should be
  displayed as active or not, based on the user's scrolling position on the page. */
  useEffect(() => {
    if (scrollY >= position.top - 225 && scrollY + 150 < position.heigth) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [scrollY])

  const handleClick = () => {
    navigate({
      to: url,
    })
  }
  /* This `useEffect` hook is setting the `position` state of the component based on the position of an
  element with the `id` equal to the `url` prop. It first tries to get the element using
  `document.getElementById` and then calculates its height and top offset using `offsetHeight` and
  `offsetTop` properties. It then sets the `position` state using the `setPosition` function. This
  effect runs whenever the `scrollY` prop changes. */
  useEffect(() => {
    try {
      let contentResult = document.getElementById(
        url
      ) as HTMLElement

      if (contentResult) {

        let heigth = contentResult.offsetHeight + contentResult.offsetTop
        let top = contentResult.offsetTop

        setPosition({ heigth: 0, top: 0 })
        setPosition({
          heigth,
          top,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }, [scrollY])

  /**
   * This function scrolls to a specific element on the page based on its identifier.
   * @param {string} identifier - The identifier parameter is a string that is used to identify the
   * element that needs to be scrolled into view. It is used to create a query selector that targets the
   * element with a specific data attribute.
   */
  const scrollingToView = (identifier: string) => {
    const identifierElement = document.querySelector(`[data-js="id_${identifier}"]`)
    const containerElement = document.querySelector(`.${rowcontentStyle}`) as HTMLElement | null;

    if (containerElement !== null && identifierElement !== null) {
      containerElement.scrollLeft = identifierElement.getBoundingClientRect().left
    }
  }

  /**
   * This is a TypeScript React function that renders an image with specified attributes.
   * @param {string} logo - The logo parameter is a string that represents the source URL of an image.
   * @param {string} nombre - The parameter "nombre" is a string that represents the name or
   * description of the image. It is used as the value for the "alt" attribute of the "Image"
   * component, which provides alternative text for the image in case it cannot be displayed.
   */
  const ImageRender = (logo: string, nombre: string) => {
    return (
      <Image
        src={logo}
        alt={nombre}
        rel=''
        width={'100%'}
        height={'100%'}
        maxWidth={'38px'}
        maxHeight={'38px'}
        minWidth={'48px'}
        minHeight={'32px'}
        className='w-100'
      />
    )
  }

  return (
    <div className={`w-100 h-100 flex items-center ${isActive && style.showContentName}  ${isActive ? handles.showContentName : handles.notShowContentName}`} >
      <div
        onClick={() =>
          handleClick()
        }
        className={`flex w-100 items-center justify-center ${handles.childrenContainer} ${isActive ? 'ph6' : 'ph5'}`}
      >
        {ImageRender(logo, nombre)}
        <div className={`w-100 ${handles.textContainer} ${!isActive ? 'dn' : 'flex'} `}>
          <span className={`w-100 c-on-base ${handles.contenNameContainer} pl3`}>{nombre}</span>
        </div>
      </div>
      {isActive && scrollingToView(url)}
    </div>
  )
}

export default RenderItem
