// import React from 'react'
// import styles from './Tag.module.css'
// import useProduct from 'vtex.product-context/useProduct'

// interface TagProps {}

// const Tag: React.FC<TagProps> = () => {
//   const regex = /^TAG\s*>\s*.+\s+\(#([A-Fa-f0-9]{6})\)$/

//   const { product } = useProduct() ?? {}
//   const clusterHighlights = product?.clusterHighlights ?? []

//   const clusterTags = clusterHighlights.filter((item: { name: string }) =>
//     regex.test(item.name)
//   )

//   return (
//     <div className={styles.container}>
//       {clusterTags.length > 0
//         ? clusterTags.map((tag: { name: string }, index: number) => (
//             <div key={index} className={styles.tagItem}>
//               {/* Aquí puedes personalizar cómo se ve cada tag */}
//               {tag.name}
//             </div>
//           ))
//         : null}
//     </div>
//   )
// }

// export default Tag

import React from 'react'
import styles from './Tag.module.css'
import useProduct from 'vtex.product-context/useProduct'

interface TagProps {}

interface ClusterHighlight {
  name: string
}

interface ClusterTag {
  text: string
  hex: string
}

const Tag: React.FC<TagProps> = () => {
  const regex = /^TAG\s*>\s*(.+?)\s+\(#([A-Fa-f0-9]{6})\)$/

  const { product } = useProduct() ?? {}
  const clusterHighlights: ClusterHighlight[] = product?.clusterHighlights ?? []

  const clusterTags: ClusterTag[] = clusterHighlights
    .map((item) => {
      const match = item.name.match(regex)
      if (!match) return null

      const text = match[1] // Texto limpio
      const hex = match[2] // Color hexadecimal
      return { text, hex }
    })
    .filter(Boolean) as ClusterTag[] // Eliminamos los nulls y forzamos el tipo

  return (
    <div className={styles.container}>
      {clusterTags.length > 0
        ? clusterTags.map((tag, index) => (
            <div
              key={index}
              className={styles.tagItem}
              style={{
                backgroundColor: `#${tag.hex}`,
                color: '#fff',
                fontSize: '.8rem',
                padding: '4px 8px',
                borderRadius: '4px',
              }}
            >
              {tag.text}
            </div>
          ))
        : null}
    </div>
  )
}

export default Tag
