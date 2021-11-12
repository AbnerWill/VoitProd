import { Modal } from 'react-bootstrap'

import Styles from './styles.module.scss'

interface ModalEsqueciSenhaProps {
  onHide: () => void
  show: boolean
}

export function ModalEsqueciSenha({
  onHide,
  show
}: ModalEsqueciSenhaProps): JSX.Element {
  return (
    <Modal
      onHide={onHide}
      show={show}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName={Styles.modalContainer}
    >
      <Modal.Body>
        <h1 className={Styles.modalTitle}>
          Recupere sua senha <button onClick={onHide}>x</button>
        </h1>
        <h2 className={Styles.modalSubtitle}>
          Digite seu email para recuperar sua senha
        </h2>
        <label className={Styles.email}>
          <h3>E-mail:</h3>
          <div>
            <input type="email" placeholder="Digite seu email" />
            <button>Enviar</button>
          </div>
        </label>
      </Modal.Body>
    </Modal>
  )
}
