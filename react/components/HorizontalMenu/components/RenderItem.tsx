import React, { useEffect, useState } from 'react'
import { Image } from 'vtex.store-image'
import { useDevice } from 'vtex.device-detector'
import { useCssHandles } from 'vtex.css-handles'

import style from './styles.css'

interface ItemProps {
  scrollY: number
  url: string
  logo: string
  nombre: string
  rowcontentStyle: any
}

const CSS_HANDLES = [
  'showContentName',
  'childrenContainer',
  'notShowContentName',
  'contenNameContainer',
  'textContainer',
]

// const RenderItem = ({ props.scrollY, props.url, logo, nombre, rowcontentStyle }: ItemProps) => {
const RenderItem = (props: ItemProps) => {
  const { scrollY, url, logo, nombre, rowcontentStyle }: ItemProps = props
  const [isActive, setIsActive] = useState(false)
  const [position, setPosition] = useState({ heigth: 0, top: 0 })

  const handles = useCssHandles(CSS_HANDLES)
  const { isMobile } = useDevice()

  useEffect(() => {
    if (scrollY >= position.top - 225 && scrollY + 150 < position.heigth) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [scrollY])

  useEffect(() => {
    try {
      let contentResult = document.getElementById(url) as HTMLElement

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

  const scrollingToView = (identifier: string) => {
    const identifierElement = document.querySelector(
      `[data-js="id_${identifier}"]`
    )
    const containerElement = document.querySelector(
      `.${rowcontentStyle}`
    ) as HTMLElement | null

    if (containerElement !== null && identifierElement !== null) {
      containerElement.scrollLeft = identifierElement.getBoundingClientRect().left
    }
  }

  const smoothInPage = (identifier: string) => {
    var pagePosition = document.querySelector(
      `#${identifier}`
    ) as HTMLElement | null

    if (pagePosition !== null) {
      window.scrollTo({
        behavior: 'smooth',
        left: 0,
        top: pagePosition.offsetTop - (isMobile ? 150 : 100),
      })
    }
  }

  const ImageRender = (logo: string, nombre: string) => {
    return (
      <Image
        src={logo}
        alt={nombre}
        rel=""
        width={'100%'}
        height={'100%'}
        maxWidth={'38px'}
        maxHeight={'38px'}
        minWidth={'48px'}
        minHeight={'32px'}
        className="w-100"
      />
    )
  }

  return (
    <div
      className={`w-100 h-100 flex items-center ${
        isActive && style.showContentName
      }  ${isActive ? handles.showContentName : handles.notShowContentName}`}
    >
      <div
        onClick={() => smoothInPage(url)}
        id={`id_${url}`}
        className={`flex w-100 items-center justify-center ${
          handles.childrenContainer
        } ${isActive ? 'ph6' : 'ph5'}`}
      >
        {ImageRender(logo, nombre)}
        <div
          className={`w-100 ${handles.textContainer} ${
            !isActive ? 'dn' : 'flex'
          } `}
        >
          <span
            className={`w-100 c-on-base ${handles.contenNameContainer} pl3`}
          >
            {nombre}
          </span>
        </div>
      </div>
      {isActive && scrollingToView(url)}
    </div>
  )
}

export default RenderItem
