import Styles from './styles.module.scss'
import { Container, Modal, Button } from 'react-bootstrap'
import { useState } from 'react'

export function ModalCartaoCredito(): JSX.Element {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button className={Styles.btnEndereco} onClick={handleShow}>
        novo cartão
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="row p-5">
            <div>
              <p className={Styles.titulo}>Novo cartão</p>
              <p className={Styles.subTitulo}>Cadastrar novo cartão</p>
            </div>
            <div className={`${Styles.divCartao} col-9 p-5`}>
              <div className="d-flex justify-content-end">
                <img src="/master-card.svg" alt="bandeira cartão de crédito" />
              </div>
              <div className={Styles.divNomeCartao}>
                <span className={Styles.numeroCartao}>Número do cartão</span>
                <div className="d-flex justify-content-between mt-2">
                  <span>0000.0000.0000.0000</span>
                  <span>11/28</span>
                </div>
              </div>
            </div>
          </div>
          <form action="" className={Styles.formEndereco}>
            <div className="row px-5">
              <div className="col-6 col-sm-6 d-flex flex-column">
                <label htmlFor="numeroCartao">Número cartão</label>
                <input type="text" id="numeroCartao" placeholder="Número" />
              </div>
              <div className="col-3 d-flex flex-column">
                <label htmlFor="validade">Validade</label>
                <input type="number" id="validade" />
              </div>
              <div className="col-3 d-flex flex-column">
                <label htmlFor="validadeAno" className={Styles.validade}>
                  a
                </label>
                <input type="number" id="validadeAno" />
              </div>
              <div className="col-12 col-sm-6 d-flex flex-column">
                <label htmlFor="nomeTitular">
                  Nome do titular do cartão (como está gravado no Cartão)
                </label>
                <input
                  type="text"
                  id="nomeTitular"
                  placeholder="Nome do titular"
                />
              </div>
              <div className="col-12 col-sm-3 d-flex flex-column">
                <label htmlFor="codigo">Código de segurança</label>
                <input type="number" id="codigo" />
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
    </>
  )
}
