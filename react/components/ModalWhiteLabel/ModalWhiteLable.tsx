import React from 'react'
import { Modal } from 'vtex.styleguide'
import FakeWhiteLabel from '../FakeWhiteLabel/FakeWhiteLabel'
import useResize from '../../hooks/sizeScreenHook'
// FakeWhiteLabel
function ModalWhiteLabel(props: any) {
  const [, isMobil] = useResize()
  //   const [show, setShow] = useState<boolean>(props.isOpen)
  return (
    <Modal
      centered
      // {!isMobil ? centered:''}
      isOpen={props.show}
      onClose={() => {
        props.setShowModal(false)
      }}
    >
      <div style={{ margin: 'auto', width: isMobil ? '90%' : '100%' }}>
        <h3>Selecciona tu ubicación</h3>
        <p>
          Te mostraremos los productos disponibles en
          <br /> tu zona, junto con el tiempo y costo de entrega.
        </p>
        <FakeWhiteLabel />
      </div>
    </Modal>
  )
}

export default ModalWhiteLabel
