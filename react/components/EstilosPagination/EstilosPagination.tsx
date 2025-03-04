import React from 'react'
import { useSearchPage } from 'vtex.search-page-context/SearchPageContext'
import styles from './pagination.module.css'

const Pagination: React.FC = () => {
  const { searchQuery, maxItemsPerPage, page } = useSearchPage()

  // total number of products
  const totalNumberProducts: number =
    searchQuery?.data?.productSearch?.recordsFiltered || 0

  // total number of pages
  const totalNumberOfPages: number = Math.ceil(
    totalNumberProducts / maxItemsPerPage
  )

  // get query data
  const queryData = {
    query: searchQuery?.variables?.query || '',
    map: searchQuery?.variables?.map || '',
    order: searchQuery?.variables?.orderBy || '',
    priceRange: searchQuery?.variables?.selectedFacets?.find(
      (facet: any) => facet.key === 'priceRange'
    )?.value,
  }

  // create strings for parameters
  const map = !['c', 'c,c', 'c,c,c'].includes(queryData.map)
    ? `&map=${queryData.map}`
    : ''
  const order =
    queryData.order !== 'OrderByReleaseDateDESC'
      ? `&order=${queryData.order}`
      : ''
  const priceRange = queryData.priceRange
    ? `&priceRange=${queryData.priceRange}`
    : ''

  // Define the range of pages to display (Saga Falabella style)
  const pages: (number | string)[] = []

  if (page > 2) pages.push(1)
  if (page > 3) pages.push('...')

  for (
    let i = Math.max(1, page - 1);
    i <= Math.min(totalNumberOfPages, page + 1);
    i++
  ) {
    pages.push(i)
  }

  if (page < totalNumberOfPages - 2) pages.push('...')
  if (page < totalNumberOfPages - 1) pages.push(totalNumberOfPages)

  return (
    <div className={styles.paginationContainer}>
      <div id="total" className={styles.paginationWrapper}>
        {page > 1 && (
          <a
            className={`${styles.arrowButton}`}
            href={`/${queryData.query}?page=${
              page - 1
            }${map}${order}${priceRange}`.trim()}
            title="Página Anterior"
          >
            {' '}
            <svg
              fill="none"
              width="25"
              height="25"
              viewBox="0 0 16 16"
              className=" vtex-slider-layout-0-x-caretIcon vtex-slider-layout-0-x-caretIcon--desktop__slider-banner--images"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <use
                href="#nav-thin-caret--left"
                xlinkHref="#nav-thin-caret--left"
              ></use>
            </svg>
          </a>
        )}

        {pages.map((thePage, index) =>
          thePage === page ? (
            <span key={index} className={styles.currentPage}>
              {thePage}
            </span>
          ) : thePage === '...' ? (
            <span key={index} className={styles.dots}>
              {thePage}
            </span>
          ) : (
            <a
              key={index}
              className={styles.pageLink}
              href={`/${queryData.query}?page=${thePage}${map}${order}${priceRange}`.trim()}
              title={`Ir para página ${thePage}`}
            >
              {thePage}
            </a>
          )
        )}

        {page < totalNumberOfPages && (
          <a
            className={`${styles.arrowButton}`}
            href={`/${queryData.query}?page=${
              page + 1
            }${map}${order}${priceRange}`.trim()}
            title="Página Siguiente"
          >
            <svg
              fill="none"
              width="25"
              height="25"
              viewBox="0 0 16 16"
              className=" vtex-slider-layout-0-x-caretIcon vtex-slider-layout-0-x-caretIcon--desktop__slider-banner--images"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <use
                href="#nav-thin-caret--right"
                xlinkHref="#nav-thin-caret--right"
              ></use>
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}

export default Pagination
