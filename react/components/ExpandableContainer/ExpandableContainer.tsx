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
  const [isExpanded, setIsExpanded] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)
  const [maxHeight, setMaxHeight] = useState(initialHeight)

  useEffect(() => {
    if (isExpanded) {
      setMaxHeight(
        contentRef.current
          ? `${contentRef.current.scrollHeight}px`
          : expandedHeight
      )
    } else {
      setMaxHeight(initialHeight)
    }
  }, [isExpanded, expandedHeight, initialHeight])

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev)
  }

  return (
    <div style={{ position: 'relative' }}>
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
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
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
