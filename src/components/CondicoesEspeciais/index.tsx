import { Container } from 'react-bootstrap'
import Styles from './styles.module.scss'

export function CondicoesEspeciais(): JSX.Element {
  return (
    <div
      style={{
        backgroundColor: '#EAEDF5',
        padding: '20px 0',
        margin: '20px 0 0 0'
      }}
    >
      <Container>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3 text-center">
            <p className={Styles.condicaoEspecial}>Condição especial 01</p>
            <span className={Styles.descricaoCondicao}>
              Descrição sobre a<br />
              condição
            </span>
          </div>
          <div className="col-12 col-sm-6 col-md-3 text-center">
            <p className={Styles.condicaoEspecial}>Condição especial 02</p>
            <p className={Styles.descricaoCondicao}>
              Descrição sobre a<br />
              condição
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-3 text-center">
            <p className={Styles.condicaoEspecial}>Condição especial 03</p>
            <p className={Styles.descricaoCondicao}>
              Descrição sobre a<br />
              condição
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-3 text-center">
            <p className={Styles.condicaoEspecial}>Condição especial 04</p>
            <p className={Styles.descricaoCondicao}>
              Descrição sobre a<br />
              condição
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
