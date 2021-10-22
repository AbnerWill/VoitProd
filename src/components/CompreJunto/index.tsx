import { Container } from 'react-bootstrap'
import { TituloSecao } from '../TituloSecao'
import Styles from './styles.module.scss'
import Image from 'next/image'
import { CompreJuntoMobile } from '../CompreJuntoMobile'

export function CompreJunto(): JSX.Element {
  return (
    <div className={Styles.divCombo}>
      <Container>
        <TituloSecao titulo="Aproveite e compre junto:" />
        <div className="d-block d-xl-none">
          <CompreJuntoMobile />
        </div>
        <div className="row mt-5 d-none d-xl-flex">
          <div className="col-4">
            <div className="d-flex flex-column align-items-center">
              <div className={Styles.card}>
                <Image
                  src="/img-padrao.svg"
                  alt="imagem produto"
                  width={150}
                  height={150}
                />
              </div>
              <p className={Styles.produto}>Tenis Nike SB553</p>
              <p className={Styles.preco}>R$ 290</p>
            </div>
          </div>
          <div className="col-4 d-flex">
            <div className={Styles.somar}>
              <i aria-hidden className="fas fa-plus fa-2x"></i>
            </div>
            <div className="d-flex flex-column align-items-center">
              <div className={Styles.cardProduto}>
                <Image
                  src="/img-padrao.svg"
                  alt="imagem produto"
                  width={100}
                  height={100}
                />
              </div>
              <p className={Styles.produtoCard}>Tenis Nike SB553</p>
              <p className={Styles.precoCard}>R$ 290</p>
              <div className={Styles.cardProduto}>
                <Image
                  src="/img-padrao.svg"
                  alt="imagem produto"
                  width={100}
                  height={100}
                />
              </div>
              <p className={Styles.produtoCard}>Tenis Nike SB553</p>
              <p className={Styles.precoCard}>R$ 290</p>
            </div>
            <div className={Styles.igual}>
              <i aria-hidden className="fas fa-equals fa-2x"></i>
            </div>
          </div>
          <div className="col-4">
            <div className={Styles.card}>
              <p className={Styles.economize}>Economize R$ 197</p>
              <p className={Styles.leve}>Leve 3 produtos por</p>
              <p className={Styles.precoOld}>de R$487</p>
              <p className={Styles.precoNew}>por R$ 290</p>
              <button className={Styles.btnCombo}>comprar os 3 produtos</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
