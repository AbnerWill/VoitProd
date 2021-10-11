import { Container } from 'react-bootstrap'
import { TituloSecao } from '../TituloSecao'
import Styles from './styles.module.scss'
import Image from 'next/image'
import { Button } from '../Button'

export function Modalidade(): JSX.Element {
  return (
    <Container>
      <div className={Styles.divTitulo}>
        <TituloSecao titulo="Busque por sua modalidade" />
        <p className={Styles.subTitulo}>
          Equipamentos novos ou usados, aqui você encontra com preço justo
        </p>
      </div>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <div className={Styles.bgCard}>
            <div className="d-flex justify-content-center align-items-center">
              <Image
                src="/img-padrao.svg"
                alt="imagem produto"
                height={150}
                width={150}
              />
            </div>
            <p className={Styles.categoria}>Futebol</p>
            <p className={Styles.preco}>A partir de R$ 19.90</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className={Styles.bgCard}>
            <div className="d-flex justify-content-center align-items-center">
              <Image
                src="/img-padrao.svg"
                alt="imagem produto"
                height={150}
                width={150}
              />
            </div>
            <p className={Styles.categoria}>Luta</p>
            <p className={Styles.preco}>A partir de R$ 19.90</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mt-4 mt-lg-0">
          <div className={Styles.bgCard}>
            <div className="d-flex justify-content-center align-items-center">
              <Image
                src="/img-padrao.svg"
                alt="imagem produto"
                height={150}
                width={150}
              />
            </div>
            <p className={Styles.categoria}>Fitness</p>
            <p className={Styles.preco}>A partir de R$ 19.90</p>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-4">
          <div className={Styles.bgCard}>
            <div className="d-flex justify-content-center align-items-center">
              <Image
                src="/img-padrao.svg"
                alt="imagem produto"
                height={150}
                width={150}
              />
            </div>
            <p className={Styles.categoria}>Corrida</p>
            <p className={Styles.preco}>A partir de R$ 19.90</p>
          </div>
        </div>
        <div className="col-12 col-md-6 mt-4">
          <div className={Styles.bgCard}>
            <div className="d-flex justify-content-center align-items-center">
              <Image
                src="/img-padrao.svg"
                alt="imagem produto"
                height={150}
                width={150}
              />
            </div>
            <p className={Styles.categoria}>Basquete</p>
            <p className={Styles.preco}>A partir de R$ 19.90</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-9 mt-4">
          <div className={Styles.bgCard}>
            <div className="d-flex justify-content-center align-items-center">
              <Image
                src="/img-padrao.svg"
                alt="imagem produto"
                height={150}
                width={150}
              />
            </div>
            <p className={Styles.categoria}>Futebol Americano</p>
            <p className={Styles.preco}>A partir de R$ 19.90</p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-4">
          <div className={Styles.bgCard}>
            <div className="d-flex justify-content-center align-items-center">
              <Image
                src="/img-padrao.svg"
                alt="imagem produto"
                height={150}
                width={150}
              />
            </div>
            <p className={Styles.categoria}>Jogos de Mesa</p>
            <p className={Styles.preco}>A partir de R$ 19.90</p>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Button title="+ ver mais" />
        </div>
      </div>
    </Container>
  )
}
