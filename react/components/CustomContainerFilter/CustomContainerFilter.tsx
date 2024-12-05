import React from 'react'
import { useRuntime } from 'vtex.render-runtime'
function CustomContainerFilter(props: any) {
  const { route } = useRuntime()
  if (route.query == 'layout=grid') {
    return null
  }
  return <div>{props.children}</div>
}

export default CustomContainerFilter
