import { Container } from 'react-bootstrap'
import Styles from './styles.module.scss'
import Image from 'next/image'

export function PedidoInterna(): JSX.Element {
  return (
    <div>
      <Container>
        <div className={Styles.divImg}>
          <Image
            src="/img-padrao.svg"
            alt="imagem padrao"
            width={100}
            height={80}
          />
        </div>
        <div className="row">
          <div className={`${Styles.divLinks} col-12 col-md-2`}>
            <a href="" className={Styles.links}>
              Pedidos
            </a>
            <hr className={Styles.separadorLinks} />
            <a href="" className={Styles.links}>
              Meus Dados
            </a>
            <hr className={Styles.separadorLinks} />
            <a href="" className={Styles.links}>
              Cartões Salvos
            </a>
            <hr className={Styles.separadorLinks} />
            <a href="" className={Styles.links}>
              Meus Anúncios
            </a>
            <hr className={Styles.separadorLinks} />
            <a href="" className={Styles.links}>
              Sair
            </a>
          </div>
          <div className={`${Styles.divPedidos} col-12 col-md-10`}>
            <p className={Styles.pedidos}>Pedidos</p>
            <div className={Styles.divProgresso}>
              <div className={Styles.descricaoVendido}>
                <div className={Styles.divProdutoVendido}>
                  <Image
                    src="/img-padrao.svg"
                    alt="imagem produto vendido"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="d-flex flex-column justify-content-around text-center text-lg-start">
                  <span className={Styles.produto}>
                    Tênis Nike Downshifter 11 Masc. com várias cores
                  </span>
                  <span className={Styles.vendidoPor}>
                    Vendido por: <span>Voit</span>
                  </span>
                  <span className={Styles.tamanho}>
                    Tamanho: <span>40</span>
                  </span>
                  <span className={Styles.cor}>
                    Cores: <span>Branco + Preto</span>
                  </span>
                </div>
              </div>
              <div
                className={`${Styles.divProgressoProduto} mt-5 mb-5 mt-lg-0 mb-lg-0`}
              >
                <div className={Styles.divStatus}>
                  <span className={`${Styles.divSubStatus}`}>
                    <span className={`${Styles.imgStatus} ativo`}>
                      <Image
                        src="/img-padrao.svg"
                        alt="imagem produto"
                        width={50}
                        height={50}
                      />
                    </span>
                    <span className={Styles.pedido}>Pedido</span>
                    <span className={Styles.pedido}>Realizado</span>
                    <span className={Styles.pedido}>13/08/21</span>
                  </span>
                </div>
                <div className={Styles.divStatus}>
                  <span className={`${Styles.divSubStatus}`}>
                    <span className={`${Styles.imgStatus} ativo`}>
                      <Image
                        src="/img-padrao.svg"
                        alt="imagem produto"
                        width={50}
                        height={50}
                      />
                    </span>
                    <span className={Styles.pedido}>Aguardando</span>
                    <span className={Styles.pedido}>Pagamento</span>
                  </span>
                </div>
                <div className={Styles.divStatus}>
                  <span className={`${Styles.divSubStatus}`}>
                    <span className={`${Styles.imgStatus} ativo`}>
                      <Image
                        src="/img-padrao.svg"
                        alt="imagem produto"
                        width={50}
                        height={50}
                      />
                    </span>
                    <span className={Styles.pedido}>Em</span>
                    <span className={Styles.pedido}>Separação</span>
                  </span>
                </div>
                <div className={Styles.divStatus}>
                  <span className={`${Styles.divSubStatus}`}>
                    <span className={`${Styles.imgStatus} ativo`}>
                      <Image
                        src="/img-padrao.svg"
                        alt="imagem produto"
                        width={50}
                        height={50}
                      />
                    </span>
                    <span className={Styles.pedido}>Em</span>
                    <span className={Styles.pedido}>Transporte</span>
                  </span>
                </div>
                <div className={Styles.divStatus}>
                  <span className={`${Styles.divSubStatus}`}>
                    <span className={`${Styles.imgStatus} ativo`}>
                      <Image
                        src="/img-padrao.svg"
                        alt="imagem produto"
                        width={50}
                        height={50}
                      />
                    </span>
                    <span className={Styles.pedido}>Pedido</span>
                    <span className={Styles.pedido}>Entregue</span>
                  </span>
                </div>
              </div>
              <div className={Styles.resumoCompra}>
                <p className={Styles.tituloResumo}>Resumo da compra</p>
                <span className={Styles.numeroPedido}>Pedido: 77</span>
                <span className={Styles.dataPedido}>
                  Data do Pedido: 13/08/21
                </span>
                <span className={Styles.valorTotal}>
                  Valor total: R$ 200,00
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
