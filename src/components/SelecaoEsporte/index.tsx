import { Container } from 'react-bootstrap'
import Image from 'next/image'
import Styles from './styles.module.scss'
import { TituloSecao } from '../TituloSecao'

export function SelecaoEsporte(): JSX.Element {
  return (
    <div className={Styles.divEsporte}>
      <Container>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <TituloSecao titulo="Seleção do Esporte" />
          <p className={Styles.subTitulo}>
            Equipamentos novo ou usados, aqui você encontra com o preço justo
          </p>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <div className={Styles.bgImagem}>
              <Image
                src="/img-padrao.svg"
                alt="imagem produto"
                width={150}
                height={150}
              />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <p className={Styles.produto}>Tenis Nike SB553</p>
              <p className={Styles.preco}>R$ 290</p>
              <Image
                src="/estrelas.svg"
                alt="imagem estrelas"
                width={170}
                height={30}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className={Styles.bgImagem}>
              <Image
                src="/img-padrao.svg"
                alt="imagem produto"
                width={150}
                height={150}
              />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <p className={Styles.produto}>Tenis Nike SB553</p>
              <p className={Styles.preco}>R$ 290</p>
              <Image
                src="/estrelas.svg"
                alt="imagem estrelas"
                width={170}
                height={30}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className={Styles.bgImagem}>
              <Image
                src="/img-padrao.svg"
                alt="imagem produto"
                width={150}
                height={150}
              />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <p className={Styles.produto}>Tenis Nike SB553</p>
              <p className={Styles.preco}>R$ 290</p>
              <Image
                src="/estrelas.svg"
                alt="imagem estrelas"
                width={170}
                height={30}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className={Styles.bgImagem}>
              <Image
                src="/img-padrao.svg"
                alt="imagem produto"
                width={150}
                height={150}
              />
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <p className={Styles.produto}>Tenis Nike SB553</p>
              <p className={Styles.preco}>R$ 290</p>
              <Image
                src="/estrelas.svg"
                alt="imagem estrelas"
                width={170}
                height={30}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
