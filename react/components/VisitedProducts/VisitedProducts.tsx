import React from 'react'
import useLocalStorage from '../../hooks/localStorageHook'
import ResusableSlider from '../ReusableSlider/ReusableSlider'

function VisitedProducts() {
  // const [currentSlide, setCurrentSlide] = useState(0)
  const [products] = useLocalStorage('productsV', [])

  return <ResusableSlider title={'👀 Tus últimos vistos'} data={products} />
}

export default VisitedProducts
