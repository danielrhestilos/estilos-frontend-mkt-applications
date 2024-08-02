import React from 'react'

import styles from './styles.css'

function Filters(props: any) {
  return (
    <div className={styles.filtersContainer}>
      {props.container.length > 0 &&
        // <div>
        props.container.map(
          (item: any) => (
            <a href={item.url} className={styles.linkFilter} key={item.url}>
              <img src={item.imagen} className={styles.imgFilter} alt="" />
            </a>
          )

          // </div>
        )}
    </div>
  )
}

Filters.defaultProps = {
  container: [
    {
      url:
        'https://estilospe.vtexassets.com/arquivos/ids/3179672-900-900?v=638539958192400000&width=900&height=900&aspect=true',
      imagen:
        'https://estilospe.vtexassets.com/arquivos/ids/3179672-900-900?v=638539958192400000&width=900&height=900&aspect=true',
    },
  ],
}
Filters.schema = {
  title: 'Cargue filtros para subcampañas',
  description:
    'Puedes alterar el orden de este componente, asegurate de tener cargado el ID correspondiente',
  type: 'object',
  properties: {
    container: {
      title: 'Elementos',
      description: 'Conjunto de elementos a mostrar',
      type: 'array',
      items: {
        title: 'Item',
        type: 'object',
        properties: {
          url: {
            type: 'string',
            title: 'Item de la subcampaña: Agregar link',
          },
          imagen: {
            type: 'string',
            title: 'Item de la imagen',
            'ui:widget': 'image-uploader',
          },
        },
      },
    },
  },
}
export default Filters
