import React from 'react'
import { Modal } from 'vtex.styleguide'
import FakeWhiteLabel from '../FakeWhiteLabel/FakeWhiteLabel'
// FakeWhiteLabel
function ModalWhiteLabel(props: any) {
  //   const [show, setShow] = useState<boolean>(props.isOpen)
  return (
    <Modal
      centered
      isOpen={props.show}
      onClose={() => {
        props.setShowModal(false)
      }}
    >
      <h3>Selecciona tu ubicación</h3>
      <FakeWhiteLabel />
    </Modal>
  )
}

export default ModalWhiteLabel
