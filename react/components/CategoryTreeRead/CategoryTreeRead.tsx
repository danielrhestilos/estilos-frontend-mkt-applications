import React, { useEffect } from 'react'
import useLocalStorage from '../../hooks/localStorageHook'

function CategoryRead() {
  const [categoryTree, setCategoryTree] = useLocalStorage('categoryTree', 0)
  useEffect(() => {
    if (categoryTree == '0') {
      fetch('/api/catalog_system/pub/category/tree/5')
        .then((resp: any) => resp.json())
        .then((data: any) => {
          setCategoryTree(data)
        })
    }
  }, [categoryTree, setCategoryTree])
  return <></>
}

export default CategoryRead
