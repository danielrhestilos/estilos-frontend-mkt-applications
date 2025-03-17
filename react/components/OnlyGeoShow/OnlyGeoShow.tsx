import React from 'react'
import useLocalStorage from '../../hooks/localStorageHook'

interface OnlyGeoShowProps {
  children: React.ReactNode
}

const OnlyGeoShow: React.FC<OnlyGeoShowProps> = ({ children }) => {
  const [localProvincia] = useLocalStorage('localProvincia', '')
  console.log('localProvincia', localProvincia)
  if (localProvincia !== 'Lima' && localProvincia !== 'Arequipa') {
    return null
  }

  return <>{children}</>
}

export default OnlyGeoShow
