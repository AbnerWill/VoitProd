import { Container } from 'react-bootstrap'
import styles from '../../styles/Home/Diarias.module.css'
import Descontaco from '../Descontaco'
import Usado from '../Usado'
import TituloSecao from '../TituloSecao'
import Image from 'next/image'

export default function Diarias() {
  return (
    <div className={styles.divDiarias}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <TituloSecao titulo="Ofertas Diárias" />
        <p className={styles.subTitulo}>
          Equipamentos novos ou usados, aqui você encontra com preço justo
        </p>
      </div>
      <Container>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className={styles.cardDiarias}>
              <Descontaco />
              <div className="d-flex justify-content-center align-items-center">
                <Image
                  src="/img-padrao.svg"
                  alt="imagem produto"
                  width={150}
                  height={150}
                />
              </div>
              <p className={styles.produto}>Tênis Nike SB553</p>
              <p className={styles.preco}>R$ 290</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className={styles.cardDiarias}>
              <div className="d-flex justify-content-center align-items-center">
                <Image
                  src="/img-padrao.svg"
                  alt="imagem produto"
                  width={150}
                  height={150}
                />
              </div>
              <p className={styles.produto}>
                Bermuda Nike Monster Mesh 5.0 Masculina
              </p>
              <p className={styles.preco}>R$ 30</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className={styles.cardDiarias}>
              <div className="d-flex justify-content-center align-items-center">
                <Image
                  src="/img-padrao.svg"
                  alt="imagem produto"
                  width={150}
                  height={150}
                />
              </div>
              <p className={styles.produto}>Camisa Flamengo III 20/21 S/N</p>
              <p className={styles.preco}>R$ 180</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3">
            <div className={styles.cardDiarias}>
              <div className="d-flex justify-content-center align-items-center">
                <Image
                  src="/img-padrao.svg"
                  alt="imagem produto"
                  width={150}
                  height={150}
                />
              </div>
              <p className={styles.produto}>
                Bicicleta South Stark 2021 Alumínio freio a...
              </p>
              <p className={styles.preco}>R$ 1290</p>
            </div>
          </div>
          <div className="col-12 col-md-6 mt-4">
            <div className={styles.cardDiarias}>
              <div className="d-flex justify-content-center align-items-center">
                <Image
                  src="/img-padrao.svg"
                  alt="imagem produto"
                  width={150}
                  height={150}
                />
              </div>
              <p className={styles.produto}>
                Bicicleta South Stark 2021 Alumínio freio a...
              </p>
              <p className={styles.preco}>R$ 1290</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mt-4">
            <div className={styles.cardDiarias}>
              <div className="d-flex justify-content-center align-items-center">
                <Image
                  src="/img-padrao.svg"
                  alt="imagem produto"
                  width={150}
                  height={150}
                />
              </div>
              <p className={styles.produto}>
                Bicicleta South Stark 2021 Alumínio freio a...
              </p>
              <p className={styles.preco}>R$ 1290</p>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 mt-4">
            <div className={styles.cardDiarias}>
              <div className="d-flex justify-content-center align-items-center">
                <Image
                  src="/img-padrao.svg"
                  alt="imagem produto"
                  width={150}
                  height={150}
                />
              </div>
              <p className={styles.produto}>
                Bicicleta South Stark 2021 Alumínio freio a...
              </p>
              <p className={styles.preco}>R$ 1290</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
