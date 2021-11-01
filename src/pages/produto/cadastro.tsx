/* eslint-disable camelcase */
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import { useState } from 'react'
import Slider from 'react-slick'

import { NextArrow, PrevArrow } from '../../components/Arrows'
import { Footer } from '../../components/Footer'
import { PassosCadastro } from '../../containers/cadastroProdutos/PassosCadastro'
import { NewAdressButton } from '../../containers/carrinho/NewAdressButton'

import Styles from './cadastro.module.scss'

export default function CadastroProduto(): JSX.Element {
  const [passo, setPasso] = useState(1)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow insetRight />,
    prevArrow: <PrevArrow insetLeft />
  }

  function mudarConteudo(passo: number) {
    switch (passo) {
      case 0:
        return (
          <>
            <div className={Styles.title}>
              <h1>Título</h1>
              <img src="/img-padrao.svg" alt="Imagem" />
            </div>
            <h1 className={Styles.heading}>
              Em que categoria seu produto se encaixa?
            </h1>
            <section className={Styles.content}>
              <ul className={Styles.grid}>
                <li>
                  <div>
                    <img src="/img-padrao.svg" alt="Img" />
                  </div>
                  <strong>Categoria</strong>
                </li>
                <li>
                  <div>
                    <img src="/img-padrao.svg" alt="Img" />
                  </div>
                  <strong>Categoria</strong>
                </li>
                <li>
                  <div>
                    <img src="/img-padrao.svg" alt="Img" />
                  </div>
                  <strong>Categoria</strong>
                </li>
                <li>
                  <div>
                    <img src="/img-padrao.svg" alt="Img" />
                  </div>
                  <strong>Categoria</strong>
                </li>
                <li>
                  <div>
                    <img src="/img-padrao.svg" alt="Img" />
                  </div>
                  <strong>Categoria</strong>
                </li>
                <li>
                  <div>
                    <img src="/img-padrao.svg" alt="Img" />
                  </div>
                  <strong>Categoria</strong>
                </li>
                <li>
                  <div>
                    <img src="/img-padrao.svg" alt="Img" />
                  </div>
                  <strong>Categoria</strong>
                </li>
                <li>
                  <div>
                    <img src="/img-padrao.svg" alt="Img" />
                  </div>
                  <strong>Categoria</strong>
                </li>
                <li>
                  <div>
                    <img src="/img-padrao.svg" alt="Img" />
                  </div>
                  <strong>Categoria</strong>
                </li>
                <li>
                  <div>
                    <img src="/img-padrao.svg" alt="Img" />
                  </div>
                  <strong>Categoria</strong>
                </li>
                <li>
                  <div>
                    <img src="/img-padrao.svg" alt="Img" />
                  </div>
                  <strong>Categoria</strong>
                </li>
                <li>
                  <div>
                    <img src="/img-padrao.svg" alt="Img" />
                  </div>
                  <strong>Categoria</strong>
                </li>
              </ul>
            </section>
          </>
        )
      case 1:
        return (
          <>
            <div className={Styles.title}>
              <h1>Título</h1>
              <img src="/img-padrao.svg" alt="Imagem" />
            </div>
            <PassosCadastro passo={passo} />
            <div className={Styles.infomaçoesBasicas}>
              <label>
                <h2>Título do produto</h2>
                <input type="text" placeholder="Digite aqui o texto" />
              </label>
              <div>
                <label>
                  <h2>Vestuário</h2>
                  <input type="text" placeholder="Selecione" />
                </label>
                <label>
                  <h2>Tamanho</h2>
                  <input type="text" placeholder="Selecione" />
                </label>
                <label>
                  <h2>Marca</h2>
                  <input type="text" placeholder="Selecione" />
                </label>
                <label>
                  <h2>Condição</h2>
                  <input type="text" placeholder="Selecione" />
                </label>
              </div>
            </div>
            <div className={Styles.divisor} />
            <div className={Styles.valorProduto}>
              <h1>Qual o valor?</h1>
              <div>
                <label>
                  <h2>Valor</h2>
                  <input type="text" placeholder="R$ 0,00" />
                  <span>Quanto deseja receber + 20% de taxa</span>
                </label>
                <strong>ou</strong>
                <label>
                  <h2>Quanto quer receber?</h2>
                  <input type="text" placeholder="R$ 0,00" />
                  <span>Valor total -20% de taxa</span>
                </label>
              </div>
            </div>
            <div className={Styles.divisor} />
            <div className={Styles.adicionarFotos}>
              <h1>Adicione Fotos</h1>
              <h2>Adicione fotos do produto</h2>
              <div>
                <img src="/img-padrao.svg" alt="img" />
                <strong>Arraste imagens aqui</strong>
                <label>
                  Adicionar foto <input type="file" />
                </label>
              </div>
            </div>
            <div className={Styles.buttons}>
              <button onClick={() => setPasso(0)}>Voltar</button>
              <button onClick={() => setPasso(2)}>Próximo</button>
            </div>
          </>
        )
      case 2:
        return (
          <>
            <div className={Styles.title}>
              <h1>Título</h1>
              <img src="/img-padrao.svg" alt="Imagem" />
            </div>
            <PassosCadastro passo={passo} />
            <div className={Styles.descriçaoProduto}>
              <label>
                <h2>Descrição</h2>
                <textarea rows={4} placeholder="Digite aqui o texto" />
              </label>
              <div>
                <label>
                  <h2>Info</h2>
                  <input type="text" placeholder="Digite aqui o texto" />
                </label>
                <div>
                  <label>
                    <h2>Categoria</h2>
                    <input type="text" placeholder="Selecione uma categoria" />
                  </label>
                  <label>
                    <h2>Descrição da categoria</h2>
                    <input
                      type="text"
                      placeholder="Campo para preencher a categoria"
                    />
                  </label>
                  <button className={Styles.botãoFlutuante}>&#43;</button>
                </div>
                <label>
                  <h2>Info</h2>
                  <input
                    type="text"
                    placeholder="Nome campo sugerido relacionado ao tipo de esporte"
                  />
                  <button className={Styles.botãoFlutuante}>&#43;</button>
                </label>
              </div>
            </div>
            <div className={Styles.buttons}>
              <button onClick={() => setPasso(1)}>Voltar</button>
              <button onClick={() => setPasso(3)}>Próximo</button>
            </div>
          </>
        )
      case 3:
        return (
          <>
            <div className={Styles.title}>
              <h1>Título</h1>
              <img src="/img-padrao.svg" alt="Imagem" />
            </div>
            <PassosCadastro passo={passo} />
            <div className={Styles.tipoEntrega}>
              <label>
                <h2>Qual tipo de endereço de entrega?</h2>
                <input type="text" placeholder="Selecione" />
              </label>
              <div className={Styles.selecionarEndereço}>
                <h2>Qual o endereço?</h2>
                <ul>
                  <li>
                    <div className={Styles.highlighted} />
                    <span>
                      R. Santos Dumont, 1487 <br /> Ponta Grossa PR 84060-120
                    </span>
                  </li>
                  <li>
                    <div />
                    <span>
                      R. Santos Dumont, 1487 <br /> Ponta Grossa PR 84060-120
                    </span>
                  </li>
                  <li>
                    <div />
                    <span>
                      R. Santos Dumont, 1487 <br /> Ponta Grossa PR 84060-120
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <NewAdressButton />
            <div className={Styles.buttons}>
              <button onClick={() => setPasso(2)}>Voltar</button>
              <button onClick={() => setPasso(4)}>Próximo</button>
            </div>
          </>
        )
      case 4:
        return (
          <>
            <div className={Styles.titleLastPage}>
              <h1>Resumo do anúncio</h1>
              <h2>Seu anúncio irá aparecer assim:</h2>
            </div>
            <section className={Styles.resumoAnuncio}>
              <div className={Styles.imagens}>
                <div className={Styles.imagemGrande}>
                  <img src="/img-padrao.svg" alt="Img" />
                  <button className={Styles.botaoEditar}>
                    <img src="/pencil.svg" alt="Botao de editar" />
                    Editar
                  </button>
                </div>
                <div className={Styles.carrossel}>
                  <Slider {...settings}>
                    <div>
                      <div className={Styles.imagensCarrossel}>
                        <img src="/img-padrao.svg" alt="Img" />
                      </div>
                    </div>
                    <div>
                      <div className={Styles.imagensCarrossel}>
                        <img src="/img-padrao.svg" alt="Img" />
                      </div>
                    </div>
                    <div>
                      <div className={Styles.imagensCarrossel}>
                        <img src="/img-padrao.svg" alt="Img" />
                      </div>
                    </div>
                    <div>
                      <div className={Styles.imagensCarrossel}>
                        <img src="/img-padrao.svg" alt="Img" />
                      </div>
                    </div>
                    <div>
                      <div className={Styles.imagensCarrossel}>
                        <img src="/img-padrao.svg" alt="Img" />
                      </div>
                    </div>
                    <div>
                      <div className={Styles.imagensCarrossel}>
                        <img src="/img-padrao.svg" alt="Img" />
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
              <div className={Styles.informaçoes}>
                <div className={Styles.tagsAnuncio}>
                  <span>Exemplo tag 1</span>
                  <span>Tag 2</span>
                  <button className={Styles.botaoEditar}>
                    <img src="/pencil.svg" alt="Botao de editar" />
                    Editar
                  </button>
                </div>
                <div className={Styles.tituloAnuncio}>
                  <h1>Título do anúncio</h1>
                  <button className={Styles.botaoEditar}>
                    <img src="/pencil.svg" alt="Botao de editar" />
                    Editar
                  </button>
                </div>
                <div className={Styles.descricaoAnuncio}>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <button className={Styles.botaoEditar}>
                    <img src="/pencil.svg" alt="Botao de editar" />
                    Editar
                  </button>
                </div>
                <div className={Styles.categoriaAnuncio}>
                  <strong>Título Categoria</strong>
                  <span>Lorem Ipsum is simply dummy text.</span>
                  <button className={Styles.botaoEditar}>
                    <img src="/pencil.svg" alt="Botao de editar" />
                    Editar
                  </button>
                </div>
                <div className={Styles.preçoAnuncio}>
                  <span>de R$320</span>
                  <strong>
                    <sup>por</sup>R$260
                  </strong>
                  <h2>R$360 preço estimado no varejo</h2>
                  <button className={Styles.botaoEditar}>
                    <img src="/pencil.svg" alt="Botao de editar" />
                    Editar
                  </button>
                </div>
              </div>
            </section>
            <div className={Styles.buttonsLastPage}>
              <button onClick={() => setPasso(3)}>Voltar</button>
              <button onClick={() => setPasso(4)}>Publicar anúncio</button>
            </div>
          </>
        )
      default:
        return <h1>Carregando conteúdo...</h1>
    }
  }

  return (
    <>
      <Link href="/">
        <a className={Styles.arrow}>
          <PrevArrow />
        </a>
      </Link>
      <header className={Styles.header}>
        <img src="/voit-logo.svg" alt="Logo" />
      </header>
      <main className={Styles.container}>{mudarConteudo(passo)} </main>
      <Footer />
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const access_token = parseCookies(ctx)

  if (!access_token['access-token']) {
    return {
      redirect: {
        destination: '/usuario/login',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
