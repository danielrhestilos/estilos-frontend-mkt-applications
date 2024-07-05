// hooks/useVisibility.ts
import { useState } from 'react'

const useVisibility = () => {
  const [visible, setVisible] = useState(true)

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return { visible, toggleVisibility }
}

export default useVisibility