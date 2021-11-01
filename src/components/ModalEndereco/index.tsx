import Styles from './styles.module.scss'
import { Container, Modal, Button } from 'react-bootstrap'
import { useState } from 'react'

export function ModalCadastro(): JSX.Element {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <Container>
      <Button className={Styles.btnEndereco} onClick={handleShow}>
        novo endereço
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="" className={Styles.formEndereco}>
            <div className="row px-5">
              <p className={Styles.titulo}>Editar endereço</p>
              <p>
                Você poderá ver os custos e prazos de entrega em tudo o que
                procurar
              </p>
              <div className="col-12 d-flex flex-column">
                <label htmlFor="cep">CEP</label>
                <input type="text" id="cep" placeholder="Digite o CEP" />
              </div>
              <div className="col-12 d-flex flex-column">
                <label htmlFor="endereco">Endereço</label>
                <input
                  type="text"
                  id="endereco"
                  placeholder="Rua nome da rua"
                />
              </div>
              <div className="col-12 col-sm-6 d-flex flex-column">
                <label htmlFor="numero">Número</label>
                <input type="text" id="numero" placeholder="Número" />
              </div>
              <div className="col-12 col-sm-6 d-flex flex-column">
                <label htmlFor="complemento">Complemento</label>
                <input type="text" id="complemento" placeholder="Casa" />
              </div>
              <div className="col-12 d-flex flex-column">
                <label htmlFor="bairro">Bairro</label>
                <input type="text" id="bairro" placeholder="Nome do Bairro" />
              </div>
              <div className="col-12 col-sm-6 d-flex flex-column">
                <label htmlFor="estadp">Estado</label>
                <input type="text" id="estadp" placeholder="Estado" />
              </div>
              <div className="col-12 col-sm-6 d-flex flex-column">
                <label htmlFor="cidade">Cidade</label>
                <input type="text" id="cidade" placeholder="Cidade" />
              </div>
            </div>
          </form>
          <div className="d-flex mt-5 px-5">
            <Button onClick={handleClose} className={Styles.btnConfirmar}>
              confirmar
            </Button>
            <Button onClick={handleClose} className={Styles.btnCancelar}>
              cancelar
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  )
}
