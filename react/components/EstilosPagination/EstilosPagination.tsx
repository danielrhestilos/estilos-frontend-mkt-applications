import React, { useState, useMemo, useEffect, useCallback } from 'react'
import ArrowPaginationLeft from './ArrowPaginationLeft'
import ArrowPaginationRight from './ArrowPaginationRight'
import { useSearchPage } from 'vtex.search-page-context/SearchPageContext'
import { useFetchMore } from './../Paginator/hooks/useFetchMore'
import { useRuntime } from 'vtex.render-runtime'
import styles from './pagination.module.css'

const Pagination = () => {
  const { searchQuery, maxItemsPerPage = 24, page = 1 } = useSearchPage()
  const { setQuery, query: urlQuery } = useRuntime()
  const initialPage = Number(urlQuery?.page) || page
  const [currentPage, setCurrentPage] = useState(initialPage)

  const queryData = useMemo(
    () => ({
      query: searchQuery?.variables?.query || '',
      map: searchQuery?.variables?.map || '',
      order: searchQuery?.variables?.orderBy || '',
      priceRange: searchQuery?.variables?.selectedFacets?.find(
        (facet: any) => facet.key === 'priceRange'
      )?.value,
    }),
    [searchQuery?.variables]
  )

  const totalNumberProducts =
    searchQuery?.data?.productSearch?.recordsFiltered || 0
  const totalPages = useMemo(
    () => Math.ceil(totalNumberProducts / maxItemsPerPage),
    [totalNumberProducts, maxItemsPerPage]
  )

  // Reset `currentPage` si cambia el query o el parámetro de la URL
  useEffect(() => {
    setCurrentPage(Number(urlQuery?.page) || 1)
  }, [queryData, urlQuery?.page])

  const { handleFetchPerPage, loading } = useFetchMore({
    page: currentPage,
    maxItemsPerPage,
    fetchMore: searchQuery?.fetchMore,
    products: searchQuery?.data?.productSearch?.products,
    queryData,
  })

  // Define the range of pages to display (Saga Falabella style)
  const pages = useMemo(() => {
    const result: (number | string)[] = []

    if (currentPage > 2) result.push(1)
    if (currentPage > 3) result.push('...')

    for (
      let i = Math.max(1, currentPage - 1);
      i <= Math.min(totalPages, currentPage + 1);
      i++
    ) {
      result.push(i)
    }

    if (currentPage < totalPages - 2) result.push('...')
    if (currentPage < totalPages - 1) result.push(totalPages)

    return result
  }, [currentPage, totalPages])

  const handlePageChange = useCallback(
    async (newPage: number) => {
      if (newPage !== currentPage && !loading) {
        await handleFetchPerPage(newPage)
        setCurrentPage(newPage)
        setQuery({ page: newPage }, { replace: true, merge: true })
      }
    },
    [currentPage, loading, handleFetchPerPage, setQuery]
  )

  const renderButton = (page: number | string) =>
    page === currentPage ? (
      <span key={page} className={styles.currentPage} aria-current="page">
        {page}
      </span>
    ) : page === '...' ? (
      <span key={page} className={styles.dots}>
        {page}
      </span>
    ) : (
      <button
        key={page}
        className={styles.pageLink}
        onClick={() => handlePageChange(Number(page))}
        disabled={loading}
        title={`Ir a la página ${page}`}
      >
        {page}
      </button>
    )

  return (
    <div className={styles.paginationContainer}>
      <div id="total" className={styles.paginationWrapper}>
        {currentPage > 1 && (
          <button
            className={styles.arrowButton}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={loading}
            title="Página Anterior"
            aria-label="Página Anterior"
          >
            <ArrowPaginationLeft />
          </button>
        )}

        {pages.map((page) => renderButton(page))}

        {currentPage < totalPages && (
          <button
            className={styles.arrowButton}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={loading}
            title="Página Siguiente"
            aria-label="Página Siguiente"
          >
            <ArrowPaginationRight />
          </button>
        )}
      </div>
    </div>
  )
}

export default Pagination
