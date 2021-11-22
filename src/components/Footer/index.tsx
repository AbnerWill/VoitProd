import Styles from './styles.module.scss'
import { Container } from 'react-bootstrap'

export function Footer(): JSX.Element {
  return (
    <div className={Styles.bgFooter}>
      <Container>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <p className={Styles.desconto}>Ganhe 10% na primeira compra</p>
          <div className={Styles.divInputs}>
            <input
              className={Styles.inputFooter}
              type="text"
              placeholder="Nome"
            />
            <input
              className={Styles.inputFooter}
              type="email"
              placeholder="E-mail"
            />
            <button className={Styles.btnEnviar}>Enviar</button>
          </div>
        </div>
        <hr className={Styles.separador} />
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3">
            <p className={Styles.tituloFooter}>Sobre Nós</p>
            <p className={Styles.textoFooter}>
              Although this is well intentioned and the goal certainly is to
              reduce the quantity of these bothersome thoughts, the technique is
              inherently flawed.
            </p>
            <div className="d-flex justify-content-between">
              <div className={Styles.divCarta}>
                <img src="/carta.svg" alt="carta" height={25} width={25} />
                <span className={Styles.contato}>oi@voit.co</span>
              </div>
              <div className={Styles.divIcons}>
                <i
                  aria-hidden
                  className="fab fa-facebook-square fa-2x me-2"
                ></i>
                <i aria-hidden className="fab fa-instagram fa-2x"></i>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-4 d-flex flex-column">
            <div className={Styles.separarFooter}>
              <p className={Styles.tituloFooter}>Voit</p>
              <a href="" className={Styles.linksFooter}>
                sobre nós
              </a>
              <a href="" className={Styles.linksFooter}>
                termos e condições de uso
              </a>
              <a href="" className={Styles.linksFooter}>
                política de privacidade
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-2 d-flex flex-column">
            <div className={Styles.separarFooter2}>
              <p className={Styles.tituloFooter}>Ajuda</p>
              <a href="" className={Styles.linksFooter}>
                f.a.q
              </a>
              <a href="" className={Styles.linksFooter}>
                contato
              </a>
              <a href="" className={Styles.linksFooter}>
                como vender
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <p className={Styles.tituloFooter}>Chame um especialista</p>
            <button className={Styles.btnFooterChamar}>
              <i aria-hidden className="fab fa-whatsapp fa-2x me-3"></i>
              fale com a gente !
            </button>
          </div>
          <div className="text-center">
            <p className={Styles.copyright}>
              voit.co Copyright © 2020. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
