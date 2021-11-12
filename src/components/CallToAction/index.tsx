import { Container } from 'react-bootstrap'
import Styles from './styles.module.scss'
import Image from 'next/image'
import { TituloSecao } from '../TituloSecao'

export function CallToAction(): JSX.Element {
  return (
    <div className={Styles.divCall}>
      <Container>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <p className={Styles.call}>call to action</p>
          <TituloSecao titulo="Compre pelo app" />
        </div>
        <div className="d-flex justify-content-center mb-4">
          <button className={Styles.btnApp}>Apple</button>
          <button className={Styles.btnApp}>Google</button>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img
            src="/img-cel.png"
            alt="call to action"
            className={Styles.imgCall}
          />
        </div>
      </Container>
    </div>
  )
}
