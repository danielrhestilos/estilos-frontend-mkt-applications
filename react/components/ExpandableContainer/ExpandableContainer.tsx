import React, { useState, useRef, useEffect } from 'react'
import styles from './styles.module.css'

interface ExpandableContainerProps {
  children: React.ReactNode
  initialHeight?: string
  expandedHeight?: string
}

const ExpandableContainer: React.FC<ExpandableContainerProps> = ({
  children,
  initialHeight = '200px',
  expandedHeight = 'auto',
}) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const [maxHeight, setMaxHeight] = useState(initialHeight)
  const [dynamicHeight, setDynamicHeight] = useState(initialHeight)

  useEffect(() => {
    const updateHeight = () => {
      const newHeight = window.innerWidth < 768 ? '300px' : initialHeight // Mayor altura en móviles
      setDynamicHeight(newHeight)
      setMaxHeight(newHeight)
    }

    updateHeight()
    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [initialHeight])

  useEffect(() => {
    if (isExpanded) {
      setMaxHeight(
        contentRef.current
          ? `${contentRef.current.scrollHeight}px`
          : expandedHeight
      )
    } else {
      setMaxHeight(dynamicHeight)
    }
  }, [isExpanded, expandedHeight, dynamicHeight])

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <div className={styles.expandableContainer}>
      <div
        className={styles.container}
        style={{
          overflow: 'hidden',
          maxHeight,
          transition: 'max-height 0.5s ease-in-out',
        }}
        ref={contentRef}
      >
        {children}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={toggleExpand}
          className={styles.switchButton}
          style={{
            position: 'relative',
            display: 'block',
            width: 'auto',
          }}
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
        </button>
      </div>
    </div>
  )
}

export default ExpandableContainer
