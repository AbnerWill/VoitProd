import { Container } from 'react-bootstrap'
import { Button } from '../Button'
import { CarouselProduto } from '../Carousel'
import { Voltar } from '../Voltar'
import Styles from './styles.module.scss'

import { useState, useEffect } from 'react'
import api from '../../services/api'

export function Product(): JSX.Element {
  const [produto, setProduto] = useState('')

  useEffect(() => {
    async function getProduto() {
      const { data } = await api.get('/produto/publica', {
        headers: {
          authorization: 'Bearer 155|XA0ai3qHXqTHf2ppZyD104EkLDPHp3LeBoBWSFuY'
        },
        params: {
          loja_id: '3'
        }
      })
      setProduto(data)
    }
    getProduto()
  }, [])
  console.log(produto[1])
  return (
    <div>
      <Container>
        <Voltar />
        <div className="row">
          <div className="col-12 col-lg-6">
            <CarouselProduto />
          </div>
          <div className="col-12 col-lg-6 px-5">
            <p className={Styles.nomeProduto}>{produto[1].nome}</p>
            <p className={Styles.descricaoProduto}>{produto[1].descricao}</p>
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
                  >{`de R$${produto[1].valor}`}</span>
                  <div className="d-flex flex-column">
                    <span className={Styles.precoNewSup}>por</span>
                    <span className={Styles.precoNew}>
                      {produto[1].valor_com_desconto}
                    </span>
                  </div>
                </div>
                <p className={Styles.precoVarejo}>
                  R$360 preço estimado no varejo
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
    </div>
  )
}
