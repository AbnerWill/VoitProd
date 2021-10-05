import styles from '../../styles/Home/PromocoesEspeciais.module.css'
import TituloSecao from '../TituloSecao'
import Image from 'next/image'
import { Container } from 'react-bootstrap'

export default function PromocoesEspeciais(): JSX.Element {
  return (
    <div className={styles.bgEspeciais}>
      <div className={styles.divTitulo}>
        <TituloSecao titulo="Promoções Especiais" />
        <p className={styles.subTitulo}>
          Equipamentos novos ou usados, aqui você encontra com preço justo
        </p>
      </div>
      <Container>
        <div className="row justify-content-center">
          <div className={'col-12 col-md-3'}>
            <div className={styles.divCard}>
              <div className={styles.divImg}>
                <Image
                  src="/img-padrao.svg"
                  alt="imagem produto promocional"
                  height={190}
                  width={190}
                />
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p className={styles.tituloPromo}>Título promoção</p>
                <p className={styles.descricao}>Texto da descrição</p>
                <p className={styles.promocao}>10% OFF</p>
                <button className={styles.btnPromocao}>veja mais</button>
              </div>
            </div>
          </div>
          <div className={'col-12 col-md-3'}>
            <div className={styles.divCard}>
              <div className={styles.divImg}>
                <Image
                  src="/img-padrao.svg"
                  alt="imagem produto promocional"
                  height={190}
                  width={190}
                />
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p className={styles.tituloPromo}>Título promoção</p>
                <p className={styles.descricao}>Texto da descrição</p>
                <p className={styles.promocao}>cupom - 50r$</p>
                <button className={styles.btnPromocao}>veja mais</button>
              </div>
            </div>
          </div>
          <div className={'col-12 col-md-3'}>
            <div className={styles.divCard}>
              <div className={styles.divImg}>
                <Image
                  src="/img-padrao.svg"
                  alt="imagem produto promocional"
                  height={190}
                  width={190}
                />
              </div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <p className={styles.tituloPromo}>Título promoção</p>
                <p className={styles.descricao}>Texto da descrição</p>
                <p className={styles.promocao}>primeira compra</p>
                <button className={styles.btnPromocao}>veja mais</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
