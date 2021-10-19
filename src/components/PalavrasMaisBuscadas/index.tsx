import { Container } from 'react-bootstrap'
import { TituloSecao } from '../TituloSecao'
import Styles from './styles.module.scss'

export function PalavrasMaisBuscadas(): JSX.Element {
  return (
    <div>
      <Container>
        <div className="text-center">
          <TituloSecao titulo="Palavras mais buscadas" />
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>bicicleta aro 29</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>tênis feminino</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>roupa para ciclismo masculina</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>conjunto de moletom feminimo</p>
          </div>
        </div>
        <div className={Styles.separadorPontilhado}></div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>all star feminino</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>cupom de desconto</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>bota caterpillar</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>tênis nike em promoção</p>
          </div>
        </div>
        <div className={Styles.separadorPontilhado}></div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>promoções</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>tênis masculino</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>tapete de yoga</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>mountain bike</p>
          </div>
        </div>
        <div className={Styles.separadorPontilhado}></div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>tênis nike</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>all star branco</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>produtos do corinthians</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>whey protein isolado</p>
          </div>
        </div>
        <div className={Styles.separadorPontilhado}></div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>óculos oakley juliet</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>roupa para ciclismo feminina</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>tênis sem cadarço</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <p className={Styles.buscada}>jaqueta corta vento</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
