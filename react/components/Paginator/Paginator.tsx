import React, { useEffect, useState } from 'react'
import { useCssHandles } from 'vtex.css-handles'
import { path } from 'ramda'
import { useSearchPage } from 'vtex.search-page-context/SearchPageContext'
import { Slider, Slide } from 'vtex.slider'
import { Dropdown, ButtonPlain } from 'vtex.styleguide'

import LoadingSpinner from './components/LoadingSpinner'
import { PAGINATION_TYPE } from './constants/pagintationTypes'
import { useFetchMore } from './hooks/useFetchMore'
import styles from './paginator.css'

const CSS_HANDLES = ['containerDropdown']

const Paginator = () => {
  const handles = useCssHandles(CSS_HANDLES)

  const {
    pagination,
    searchQuery,

    maxItemsPerPage,
    page: currPage,
  } = useSearchPage()

  const recordsFiltered = path(
    ['data', 'productSearch', 'recordsFiltered'],
    searchQuery
  )

  const products = path(['data', 'productSearch', 'products'], searchQuery)

  const [pageButtons, setPageButtons] = useState<number[]>([])
  const [currentPage, setCurrentPage] = useState(currPage)
  const [slide, setSlide] = useState(0)

  const numberOfPages =
    Math.ceil(recordsFiltered / maxItemsPerPage) > 50
      ? 50
      : Math.ceil(recordsFiltered / maxItemsPerPage)

  useEffect(() => {
    if (
      typeof maxItemsPerPage === 'number' &&
      typeof recordsFiltered === 'number'
    ) {
      setPageButtons(Array.from({ length: numberOfPages }, (_, i) => i + 1))
    }
  }, [maxItemsPerPage, recordsFiltered])

  const fetchMore = path(['fetchMore'], searchQuery)

  // const queryData = {
  //   query: path(['variables', 'query'], searchQuery),
  //   map: path(['variables', 'map'], searchQuery),
  //   orderBy: path(['variables', 'orderBy'], searchQuery),
  //   priceRange: path(['variables', 'selectedFacets'], searchQuery)?.find(
  //     (facet: { key: string }) => facet.key === 'priceRange'
  //   )?.value,
  // }

  const queryData = {
    query: 'tv 43',
    map: 'ft',
    orderBy: 'OrderByReleaseDateDESC',
  }

  console.log('searchQuery', searchQuery)

  console.log('queryData ', queryData)

  const { handleFetchPerPage, loading } = useFetchMore({
    // page: currentPage,
    recordsFiltered,
    maxItemsPerPage,
    fetchMore,
    products,
    queryData,
  })

  const handleChangeSlide = (i: number) => {
    if (numberOfPages > 5) {
      if (i <= numberOfPages - 5) {
        setSlide(i)
      } else {
        setSlide(numberOfPages - 5)
      }
    } else {
      setSlide(i)
    }
  }

  const isShowMore = pagination === PAGINATION_TYPE.SHOW_MORE

  const options = pageButtons.map((page) => ({
    value: page,
    label: `Página ${page}`,
  }))

  if (isShowMore && pageButtons.length > 0 && numberOfPages > 1) {
    return (
      <div className={`${styles.buttonShowMoreLayout} w-100 justify-center db`}>
        <div
          className={`w-100 flex justify-center ${styles.containerSteps} mw6`}
        >
          {slide >= 1 && numberOfPages > 5 && (
            <ButtonPlain
              className={`${styles.arrowPrev} mr2`}
              onClick={() => {
                setSlide((prev) => prev - 1)
              }}
            >
              <p className="w-100 pa3 flex flex-column justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.696.722C10.825.722 10.953.769 11.054.864 11.266 1.061 11.276 1.394 11.079 1.606L6.731 6.256C6.236 6.751 5.972 7.39 5.972 8.071 5.972 8.753 6.236 9.392 6.718 9.874L11.079 14.536C11.276 14.748 11.266 15.081 11.054 15.278 10.843 15.474 10.51 15.466 10.312 15.254L5.963 10.603C5.296 9.936 4.921 9.033 4.921 8.071 4.921 7.11 5.296 6.207 5.975 5.527L10.311.889C10.414.779 10.554.723 10.694.723L10.696.722Z"
                    fill="currentColor"
                  />
                </svg>
              </p>
            </ButtonPlain>
          )}
          <Slider
            currentSlide={slide}
            onChangeSlide={() => {
              handleChangeSlide(slide)
            }}
            perPage={6}
          >
            {pageButtons.map((btn, index) => {
              if (index <= 49) {
                return (
                  <Slide className="justify-center" key={`button ${btn}`}>
                    <div
                      className={`${styles.buttonPerPage} ${
                        btn === currentPage ? styles.active : styles.noActive
                      }`}
                    >
                      <ButtonPlain
                        onClick={() => {
                          setCurrentPage(btn)
                          handleFetchPerPage(btn)
                          handleChangeSlide(btn - 1)
                        }}
                      >
                        <p className="w-100 pa3">{btn}</p>
                      </ButtonPlain>
                    </div>
                  </Slide>
                )
              }

              return null
            })}
          </Slider>
          {slide !== numberOfPages - 5 && slide < 45 && numberOfPages > 5 && (
            <ButtonPlain
              className={`${styles.arrowNext} ml2`}
              onClick={() => {
                setSlide((prev) => prev + 1)
              }}
            >
              <p className="w-100 pa3 flex flex-column justify-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.432 1.067C5.309 1.067 5.187 1.112 5.091 1.202 4.889 1.39 4.879 1.707 5.067 1.909L9.209 6.339C9.68 6.81 9.932 7.419 9.932 8.068 9.932 8.717 9.68 9.326 9.221 9.785L5.067 14.226C4.879 14.428 4.889 14.745 5.091 14.933 5.292 15.12 5.609 15.112 5.798 14.91L9.94 10.48C10.576 9.844 10.933 8.984 10.933 8.068 10.933 7.152 10.576 6.292 9.929 5.644L5.799 1.226C5.7 1.121 5.567 1.068 5.434 1.068L5.432 1.067Z"
                    fill="currentColor"
                  />
                </svg>
              </p>
            </ButtonPlain>
          )}
        </div>

        <div className={`${handles.containerDropdown} mt5 flex justify-center`}>
          <Dropdown
            variation="inline"
            size="large"
            options={options.slice(0, 50)}
            value={currentPage}
            onChange={(_: any, v: any) => {
              setCurrentPage(Number(v))
              handleFetchPerPage(Number(v))
              handleChangeSlide(Number(v) - 1)
            }}
          />
        </div>
      </div>
    )
  }

  return <LoadingSpinner loading={loading} />
}

export default Paginator
