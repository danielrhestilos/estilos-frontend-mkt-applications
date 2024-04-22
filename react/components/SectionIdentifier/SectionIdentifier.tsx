import React from "react";

interface SectionIdentifierProps {
  idTitle: string
  children: any[]
}

const SectionIdentifier = ({ idTitle, children }: SectionIdentifierProps) => {
  if (idTitle === '') return
  return <div id={`${idTitle}`}>{children[0]}</div>
}

SectionIdentifier.defaultProps = {
  idTitle: 'marca',
}

SectionIdentifier.schema = {
  title: 'Identificador de sección',
  description: 'Utilizado para Horizontal Menú',
  type: 'object',
  properties: {
    idTitle: {
      title: 'Nombre identificador',
      description: 'Asegúrate de tener solo minúscula ',
      type: 'string',
      default: 'marca',
    },
  },
}
export default SectionIdentifier
