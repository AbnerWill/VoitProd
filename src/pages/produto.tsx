import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import { PergunteVendedor } from '../components/PergunteVendedor'
import { PalavrasMaisBuscadas } from '../components/PalavrasMaisBuscadas'
import { PodeGostar } from '../components/PodeGostar'
import { CompreJunto } from '../components/CompreJunto'
import { Caracteristicas } from '../components/Caracteristicas'
import { CarouselProduto } from '../components/Carousel/index'
import { Voltar } from '../components/Voltar/index'
import { Container } from 'react-bootstrap'
import Styles from '../components/product/styles.module.scss'

import api from '../services/api'
import { GetStaticProps } from 'next'

export default function Produto({ products }): JSX.Element {
  const Produto = props => {
    return (
      <Container>
        <Voltar />
        <div className="row">
          <div className="col-12 col-lg-6">
            <CarouselProduto foto={props.foto} />
          </div>
          <div className="col-12 col-lg-6 px-5">
            <p className={Styles.nomeProduto}>{props.nome}</p>
            <p className={Styles.descricaoProduto}>{props.descricao}</p>
            <div>
              <p className={Styles.customizar}>Cores</p>
              <span></span>
            </div>
            <div>
              <p className={Styles.customizar}>Tamanhos</p>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div className="d-flex align-items-end">
                  <span
                    className={Styles.precoOld}
                  >{`de R$${props.valor}`}</span>
                  <div className="d-flex flex-column">
                    <span className={Styles.precoNewSup}>por</span>
                    <span className={Styles.precoNew}>
                      {props.valor_com_desconto}
                    </span>
                  </div>
                </div>
                <p className={Styles.precoVarejo}>
                  R$1400 preço estimado no varejo
                </p>
              </div>
              <div className="col-12 col-md-6 d-flex align-items-center">
                <button className={Styles.btnComprar}>
                  <i
                    aria-hidden
                    className="fas fa-shopping-basket fa-lg me-2"
                  ></i>
                  comprar
                </button>
              </div>
            </div>
            <div>
              <p className={Styles.textoConsulte}>
                Consulte o prazo de entrega
              </p>
              <div className={Styles.divConsultar}>
                <input
                  type="text"
                  placeholder="Insira o CEP"
                  className={Styles.inputCep}
                />
                <button
                  className={`${Styles.btnConsultar} mt-3 md-sm-0 mt-md-3 mt-lg-0`}
                >
                  consultar
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    )
  }
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <Produto
          key="1"
          nome={products[1].nome}
          valor={products[1].valor}
          descricao={products[1].descricao}
          valor_com_desconto={products[1].valor_com_desconto}
        />
      </section>
      <section>
        <PergunteVendedor />
      </section>
      <section>
        <Caracteristicas />
      </section>
      <section>
        <PalavrasMaisBuscadas />
      </section>
      <section>
        <CompreJunto />
      </section>
      <section>
        <PodeGostar />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/produto/publica', {
    // headers: {
    //   authorization: 'Bearer ${token de autorização}'
    // },
    params: {
      loja_id: '3'
    }
  })

  const products = [...data]

  return {
    props: {
      products
    }
  }
}
