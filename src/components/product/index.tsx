import { Container } from 'react-bootstrap'
import { Button } from '../Button'
import { CarouselProduto } from '../Carousel'
import Styles from './styles.module.scss'

export function Product(): JSX.Element {
  return (
    <div>
      <Container>
        <div className={Styles.divVoltar}>
          <button className={Styles.btnVoltar}>
            <i className="fas fa-angle-left fa-4x"></i>
          </button>
          <a href="/" className={Styles.linkVoltar}>
            voltar
          </a>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <CarouselProduto />
          </div>
          <div className="col-12 col-lg-6 px-5">
            <p className={Styles.nomeProduto}>
              Tenis Nike Downshifter 11 Masc. com várias cores
            </p>
            <p className={Styles.descricaoProduto}>
              O Tênis Nike Downshifter 11 Masculino é o seu novo tenis de
              corrida favorito! O modelo apresenta cabedal em malha de tramas
              abertas que auxiliam na flexibilidade e na ventilação interna
            </p>
            <div>
              <p className={Styles.customizar}>Cores</p>
              <span></span>
            </div>
            <div>
              <p className={Styles.customizar}>Tamanhos</p>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="d-flex align-items-end">
                  <span className={Styles.precoOld}>de R$320</span>
                  <div className="d-flex flex-column">
                    <span className={Styles.precoNewSup}>por</span>
                    <span className={Styles.precoNew}>R$260</span>
                  </div>
                </div>
                <p className={Styles.precoVarejo}>
                  R$360 preço estimado no varejo
                </p>
              </div>
              <div className="col-6 d-flex align-items-center">
                <button className={Styles.btnComprar}>
                  <i className="fas fa-shopping-basket fa-lg me-2"></i>comprar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-6">
            <p>teste</p>
          </div>
          <div className="col-6 px-5">
            <p className={Styles.textoConsulte}>Consulte o prazo de entrega</p>
            <div>
              <input
                type="text"
                placeholder="Insira o CEP"
                className={Styles.inputCep}
              />
              <button className={Styles.btnConsultar}>consultar</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
