import React from 'react'
import Modal from '../Modal/Modal'
import FakeWhiteLabel from '../FakeWhiteLabel/FakeWhiteLabel'
import useResize from '../../hooks/sizeScreenHook'
// FakeWhiteLabel
function ModalWhiteLabel(props: any) {
  const [, isMobil] = useResize()
  //   const [show, setShow] = useState<boolean>(props.isOpen)
  return (
    <Modal
      // centered
      title={'Selecciona tu ubicación'}
      // {!isMobil ? centered:''}
      isOpen={props.show}
      onClose={() => {
        props.onClose()
      }}
    >
      <div style={{ margin: 'auto', width: isMobil ? '90%' : '100%' }}>
        {/* <h3>Selecciona tu ubicación</h3> */}
        <p
          style={{
            margin: 0,
            fontSize: '.9rem',
            color: '#3f3f3f',
            background: '#ffe3d9',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          Te mostraremos los productos disponibles en tu zona,
          <br /> junto con el tiempo y costo de entrega.
        </p>
        <FakeWhiteLabel />
      </div>
    </Modal>
  )
}

export default ModalWhiteLabel
