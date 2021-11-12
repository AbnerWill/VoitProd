import { Container } from 'react-bootstrap'
import styles from './styles.module.scss'
import Image from 'next/image'
import { TituloSecao } from '../TituloSecao'
import { Desconto } from '../Desconto'

export function ProdutoDestaque(): JSX.Element {
  return (
    <div className={styles.divDestaque}>
      <Container>
        <div className={styles.bgDestaque}>
          <div className="d-flex justify-content-sm-end justify-content-center mb-3">
            <Desconto desconto="-15%" />
          </div>
          <div className="row">
            <div className="col-12 col-md-6">
              <h1 className={styles.titulo}>Produto Destaque</h1>
              <p className={styles.subTitulo}>
                Equipamentos novos ou usados, aqui você encontra com preço justo
              </p>
              <p className={styles.produto}>Tênis Nike SB553</p>
              <p className={styles.preco}>R$ 290</p>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <Image
                src="/img-padrao.svg"
                alt="imagem produto"
                height={150}
                width={150}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
