import React, { useEffect, useState } from 'react'
import { Image } from 'vtex.store-image'
// import { useDevice } from 'vtex.device-detector'
import { useCssHandles } from 'vtex.css-handles'
import { useRuntime } from 'vtex.render-runtime'

import style from './styles.css'

interface ItemProps {
  scrollY: number
  url: string
  logo: string
  nombre: string
  rowcontentStyle: any
  small: boolean
}

const CSS_HANDLES = [
  'showContentName',
  'childrenContainer',
  'itemBigFilter',
  'childrenContainerBig',
  'notShowContentName',
  'contenNameContainer',
  'textContainer',
  'pathSelect',
]

const RenderItem = ({
  scrollY,
  url,
  logo,
  nombre,
  rowcontentStyle,
  small,
}: ItemProps) => {
  const [isActive, setIsActive] = useState(false)
  const [position, setPosition] = useState({ heigth: 0, top: 0 })

  const handles = useCssHandles(CSS_HANDLES)

  const { navigate, route } = useRuntime()
  const canonicalPath = route?.canonicalPath ?? '/'

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

  const ImageRender = (
    logo: string,
    nombre: string,
    url: string,
    small: boolean
  ) => {
    return (
      <div
        className={`w-100 ${handles.itemBigFilter} ${
          !small && canonicalPath == url && handles.pathSelect
        }`}
      >
        <Image
          src={logo}
          alt={nombre}
          rel=""
          width={small ? '100%' : ''}
          height={small ? '100%' : ''}
          maxWidth={small ? '38px' : ''}
          maxHeight={small ? '38px' : ''}
          minWidth={small ? '48px' : ''}
          minHeight={small ? '32px' : ''}
        />
      </div>
    )
  }

  return (
    <div
      className={`w-100 h-100 flex items-center    ${
        isActive && style.showContentName
      } ${isActive ? handles.showContentName : handles.notShowContentName}`}
    >
      <div
        onClick={() => handleClick()}
        className={`flex w-100 items-center justify-center ${
          small ? handles.childrenContainer : handles.childrenContainerBig
        } ${isActive ? 'ph6' : 'ph5'}`}
      >
        {ImageRender(logo, nombre, url, small)}
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
