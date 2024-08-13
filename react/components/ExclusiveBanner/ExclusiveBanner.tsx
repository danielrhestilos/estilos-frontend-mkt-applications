import React from 'react'
import { useRuntime } from 'vtex.render-runtime'
function ExclusiveBanner() {
  const { route } = useRuntime()
  const canonicalPath: string = route?.canonicalPath ?? '/'
  const noSlashPath: string = canonicalPath.substring(1, canonicalPath.length)
  return (
    <div
      style={{
        height: '530px',
        width: '100%',
        backgroundImage: `url(/arquivos/banner-${noSlashPath}.jpg)`,
      }}
    >
      <header></header>
    </div>
  )
}

export default ExclusiveBanner
