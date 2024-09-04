import React from 'react'
import { useRuntime } from 'vtex.render-runtime'

import useFetchPopularData from '../../hooks/fetchPopularDataHook'

import ReusableSlider from '../ReusableSlider/ReusableSlider'

function MostPLP() {
  // const [currentSlide, setCurrentSlide] = useState(0)
  const { route } = useRuntime()
  const { pageContext = {} } = route || {}
  const { id = null } = pageContext || {}
  // const [, isMobil] = useResize()
  // const { visible, toggleVisibility } = useVisibility()
  // console.log('pageContext ', pageContext)
  // console.log('route ', route)

  let url = `/api/catalog_system/pub/products/search?fq=C:/*/${id}/&O=OrderByPriceDESC`

  if (pageContext?.type == 'search') {
    url = `/api/catalog_system/pub/products/search?ft=${id}&O=OrderByPriceDESC`
  }

  const { data, loading, error } = useFetchPopularData(url)

  // console.log('data ->', data)

  // const diffSlides = isMobil ? 1 : 3
  // // const refSlides = isMobil ? :
  // const handleChangeSlide = (i: number) => {
  //   setCurrentSlide(i)
  // }

  // const perPage = {
  //   1300: 3,
  //   900: 2,
  //   700: 2,
  //   600: 1,
  // }

  if (loading) {
    return <div />
  }

  if (error) {
    return <div />
  }

  return (
    data.length > 3 &&
    !loading && <ReusableSlider title={'🔥 Los más populares'} data={data} />
  )
}

export default MostPLP
