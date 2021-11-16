import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import { PergunteVendedor } from '../components/PergunteVendedor'
import { PalavrasMaisBuscadas } from '../components/PalavrasMaisBuscadas'
import { PodeGostar } from '../components/PodeGostar'
import { CompreJunto } from '../components/CompreJunto'
import { Caracteristicas } from '../components/Caracteristicas'
import { CarouselProduto } from '../components/Carousel/index'
import { Voltar } from '../components/Voltar/index'
import { Container, Spinner } from 'react-bootstrap'
import Styles from '../components/product/styles.module.scss'
import { parseCookies } from 'nookies'
import { mascaraCep } from '../utils/mascaraCep'

import api from '../services/api'
import { GetStaticProps } from 'next'
import { useState } from 'react'

export default function Produto({ products }): JSX.Element {
  const Produto = props => {
    const [cep, setCep] = useState('')
    const [frete, setFrete] = useState('')
    const [loading, setLoading] = useState<boolean>(false)
    const access_token = parseCookies()
    async function getFrete() {
      setLoading(true)
      const { data } = await api.post('/frete/produto', {
        headers: {
          authorization: `Bearer ${access_token['access-token']}`
        },
        cep_entrega: cep,
        produto_id: '15'
      })

      setLoading(false)

      data.map(item => {
        const { vlrFrete } = item
        const valor = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(vlrFrete.toString())
        setFrete(valor)
        return valor
      })
    }
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
                  value={mascaraCep(cep)}
                  maxLength={9}
                  type="text"
                  placeholder="Insira o CEP"
                  className={Styles.inputCep}
                  onChange={evt => setCep(evt.currentTarget.value)}
                />
                <button
                  className={`${Styles.btnConsultar} mt-3 md-sm-0 mt-md-3 mt-lg-0`}
                  onClick={getFrete}
                >
                  consultar
                  {loading ? (
                    <Spinner animation="border">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  ) : (
                    <span></span>
                  )}
                </button>
                {frete && (
                  <p className={Styles.frete}>Valor do frete: {frete}</p>
                )}
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
