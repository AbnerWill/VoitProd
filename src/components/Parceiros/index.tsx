import Styles from './styles.module.scss'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import { TituloSecao } from '../TituloSecao'

export function Parceiros(): JSX.Element {
  return (
    <div className={Styles.parceiros}>
      <div className="d-flex justify-content-center align-items-center">
        <TituloSecao titulo="Nossos Parceiros" />
      </div>
      <Container>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mt-3 mt-lg-0">
            <div className={Styles.divParceiro}>
              <Image
                src="/img-padrao.svg"
                alt="Imagem parceiro voit"
                width={120}
                height={120}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mt-3 mt-lg-0">
            <div className={Styles.divParceiro}>
              <Image
                src="/img-padrao.svg"
                alt="Imagem parceiro voit"
                width={120}
                height={120}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mt-3 mt-lg-0">
            <div className={Styles.divParceiro}>
              <Image
                src="/img-padrao.svg"
                alt="Imagem parceiro voit"
                width={120}
                height={120}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mt-3 mt-lg-0">
            <div className={Styles.divParceiro}>
              <Image
                src="/img-padrao.svg"
                alt="Imagem parceiro voit"
                width={120}
                height={120}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mt-3 mt-lg-0">
            <div className={Styles.divParceiro}>
              <Image
                src="/img-padrao.svg"
                alt="Imagem parceiro voit"
                width={120}
                height={120}
              />
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-2 mt-3 mt-lg-0">
            <div className={Styles.divParceiro}>
              <Image
                src="/img-padrao.svg"
                alt="Imagem parceiro voit"
                width={120}
                height={120}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
