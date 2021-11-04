/* eslint-disable camelcase */
import { Formik, Form, Field } from 'formik'
import { Dropdown } from 'react-bootstrap'
import * as Yup from 'yup'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'

import { NextArrow, PrevArrow } from '../../components/Arrows'
import { Footer } from '../../components/Footer'
import { PassosCadastro } from '../../containers/cadastroProdutos/PassosCadastro'
import { NewAdressButton } from '../../containers/carrinho/NewAdressButton'
import api from '../../services/api'

import Styles from './cadastro.module.scss'
import { CustomField } from '../../components/CustomField'

interface Categoria {
  categoria_id: number
  nome: string
  descricao: string
  sub_categoria: {
    subcategoria_id: string
    nome: string
    descricao: string
  }[]
}

interface CadastroProdutoProps {
  categorias: Categoria[]
}

interface DadosProduto {
  loja_id: string
  categoria_id: string
  subcategoria_id: string
  nome: string
  valor: number
  cor?: string
  tamanho?: number
  marca?: string
  condicao?: string
  valor_com_desconto?: number
  descricao?: string
  altura?: number
  largura?: number
  comprimento?: number
  peso?: number
  produto_atributo?: {
    atributo_grupo_valor_id: string
    valor: string
  }[]
  foto?: string
}

const dadosProdutoInicial: DadosProduto = {
  loja_id: '',
  categoria_id: '',
  subcategoria_id: '',
  nome: '',
  valor: 0
}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  nextArrow: <NextArrow insetRight />,
  prevArrow: <PrevArrow insetLeft />
}

const informaçoesBasicasSchema = Yup.object().shape({
  nome: Yup.string().required('Digite o nome do produto'),
  valor: Yup.number().required('Digite o valor do produto'),
  valorDesconto: Yup.number(),
  cor: Yup.string(),
  tamanho: Yup.number(),
  marca: Yup.string(),
  condicao: Yup.string()
})

const informaçõesSecundariasSchema = Yup.object().shape({
  descricao: Yup.string().required('Digite a descrição do produto'),
  subcategoria_id: Yup.string().required('Escolha uma subcategoria do produto'),
  altura: Yup.number(),
  largura: Yup.number(),
  comprimento: Yup.number(),
  peso: Yup.number(),
  categoria_id: Yup.string()
})

export default function CadastroProduto({
  categorias
}: CadastroProdutoProps): JSX.Element {
  const [passo, setPasso] = useState(0)
  const [dadosProduto, setDadosProduto] =
    useState<DadosProduto>(dadosProdutoInicial)

  const access_token = parseCookies()

  function getSubcategoria(id: number) {
    const categoria = categorias.find(
      categoria => categoria.categoria_id === id
    )

    return categoria.sub_categoria
  }

  function SubmitInformacoesBasicas(values) {
    setDadosProduto({
      ...dadosProduto,
      nome: values.nome,
      cor: values.cor,
      tamanho: values.tamanho,
      marca: values.marca,
      condicao: values.condicao,
      valor: values.valor,
      valor_com_desconto: values.valorDesconto
    })

    setPasso(oldValue => oldValue + 1)
  }

  async function SubmitInformacoesSecundarias(values) {
    setDadosProduto({
      ...dadosProduto,
      subcategoria_id: values.subcategoria_id,
      descricao: values.descricao
    })

    // try {
    //   const response = await api.post('/produto', {
    //     data,
    //     headers: {
    //       authorization: `Bearer ${access_token['access-token']}`
    //     }
    //   })

    //   console.log(response)
    // } catch (error) {
    //   console.log(error.response)
    // }
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
                {categorias.map(categorias => (
                  <li
                    key={categorias.categoria_id}
                    onClick={() => {
                      setDadosProduto({
                        ...dadosProduto,
                        categoria_id: String(categorias.categoria_id)
                      })

                      setPasso(oldValue => oldValue + 1)
                    }}
                  >
                    <div>
                      <img src="/img-padrao.svg" alt="default" />
                    </div>
                    <strong>{categorias.nome}</strong>
                  </li>
                ))}
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
            <Formik
              validationSchema={informaçoesBasicasSchema}
              initialValues={{
                nome: '',
                cor: '',
                tamanho: '',
                marca: '',
                condicao: '',
                valor: '',
                valorDesconto: ''
              }}
              onSubmit={values => SubmitInformacoesBasicas(values)}
            >
              {({ dirty }) => (
                <Form>
                  <div className={Styles.informaçoesBasicas}>
                    <CustomField
                      label="Título do produto"
                      type="text"
                      name="nome"
                      dirty={dirty}
                      placeholder="Digite o título do produto"
                    />
                    <div>
                      <CustomField label="Cor" type="text" name="cor" />
                      <CustomField
                        label="Tamanho"
                        type="number"
                        name="tamanho"
                        min="0"
                      />
                      <CustomField label="Marca" type="text" name="marca" />
                      <CustomField
                        label="Condição"
                        type="text"
                        name="condicao"
                      />
                    </div>
                  </div>
                  <div className={Styles.divisor} />
                  <div className={Styles.valorProduto}>
                    <h1>Qual o valor?</h1>
                    <div>
                      <div>
                        <CustomField label="Valor" name="valor" type="number" />
                        <span>Quanto deseja receber + 20% de taxa</span>
                      </div>
                      <span>ou</span>
                      <div>
                        <CustomField
                          label="Quanto quer receber?"
                          name="valorDesconto"
                          type="number"
                        />
                        <span>Valor total - 20% de taxa</span>
                      </div>
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
                        Adicionar foto{' '}
                        <input
                          type="file"
                          multiple
                          accept=".jpg, .png, .jpeg"
                        />
                      </label>
                    </div>
                  </div>
                  <div className={Styles.buttons}>
                    <button type="button" onClick={() => setPasso(0)}>
                      Voltar
                    </button>
                    <button type="submit">Próximo</button>
                  </div>
                </Form>
              )}
            </Formik>
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
            <Formik
              validationSchema={informaçõesSecundariasSchema}
              initialValues={{
                descricao: '',
                altura: 0,
                largura: 0,
                comprimento: 0,
                peso: 0,
                categoria_id: '',
                subcategoria_id: ''
              }}
              onSubmit={values => SubmitInformacoesSecundarias(values)}
            >
              {() => (
                <Form>
                  <div className={Styles.descriçaoProduto}>
                    <label className={Styles.textarea}>
                      <h2>Descrição do produto</h2>
                      <Field
                        as="textarea"
                        name="descricao"
                        rows={4}
                        placeholder="Digite aqui o texto"
                      />
                    </label>
                    <div className={Styles.especificações}>
                      <CustomField label="Altura" name="altura" type="number" />
                      <CustomField
                        label="Largura"
                        name="largura"
                        type="number"
                      />
                      <CustomField
                        label="Comprimento"
                        name="comprimento"
                        type="number"
                      />
                      <CustomField label="Peso" name="peso" type="number" />
                    </div>
                    <div>
                      <div>
                        <CustomField
                          label="Categoria"
                          name="categoria_id"
                          type="text"
                        />
                        <CustomField
                          label="Subcategoria"
                          name="subcategoria_id"
                          type="text"
                        />
                      </div>
                      <div>
                        <CustomField
                          label="Atributo"
                          name="atributo"
                          type="text"
                        />
                        <CustomField
                          label="Valor"
                          name="valorAtributo"
                          type="text"
                        />
                        <button className={Styles.botãoFlutuante}>
                          <img src="/mais.svg" alt="Operador de adição" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={Styles.buttons}>
                    <button type="button" onClick={() => setPasso(1)}>
                      Voltar
                    </button>
                    <button type="submit">Próximo</button>
                  </div>
                </Form>
              )}
            </Formik>
          </>
        )
      // case 3:
      //   return (
      //     <>
      //       <div className={Styles.title}>
      //         <h1>Título</h1>
      //         <img src="/img-padrao.svg" alt="Imagem" />
      //       </div>
      //       <PassosCadastro passo={passo} />
      //       <div className={Styles.tipoEntrega}>
      //         <label>
      //           <h2>Qual tipo de endereço de entrega?</h2>
      //           <input type="text" placeholder="Selecione" />
      //         </label>
      //         <div className={Styles.selecionarEndereço}>
      //           <h2>Qual o endereço?</h2>
      //           <ul>
      //             <li>
      //               <div className={Styles.highlighted} />
      //               <span>
      //                 R. Santos Dumont, 1487 <br /> Ponta Grossa PR 84060-120
      //               </span>
      //             </li>
      //             <li>
      //               <div />
      //               <span>
      //                 R. Santos Dumont, 1487 <br /> Ponta Grossa PR 84060-120
      //               </span>
      //             </li>
      //             <li>
      //               <div />
      //               <span>
      //                 R. Santos Dumont, 1487 <br /> Ponta Grossa PR 84060-120
      //               </span>
      //             </li>
      //           </ul>
      //         </div>
      //       </div>
      //       <NewAdressButton />
      //       <div className={Styles.buttons}>
      //         <button onClick={() => setPasso(2)}>Voltar</button>
      //         <button onClick={() => setPasso(4)}>Próximo</button>
      //       </div>
      //     </>
      //   )
      // case 4:
      //   return (
      //     <>
      //       <div className={Styles.titleLastPage}>
      //         <h1>Resumo do anúncio</h1>
      //         <h2>Seu anúncio irá aparecer assim:</h2>
      //       </div>
      //       <section className={Styles.resumoAnuncio}>
      //         <div className={Styles.imagens}>
      //           <div className={Styles.imagemGrande}>
      //             <img src="/img-padrao.svg" alt="Img" />
      //             <button className={Styles.botaoEditar}>
      //               <img src="/pencil.svg" alt="Botao de editar" />
      //               Editar
      //             </button>
      //           </div>
      //           <div className={Styles.carrossel}>
      //             <Slider {...settings}>
      //               <div>
      //                 <div className={Styles.imagensCarrossel}>
      //                   <img src="/img-padrao.svg" alt="Img" />
      //                 </div>
      //               </div>
      //               <div>
      //                 <div className={Styles.imagensCarrossel}>
      //                   <img src="/img-padrao.svg" alt="Img" />
      //                 </div>
      //               </div>
      //               <div>
      //                 <div className={Styles.imagensCarrossel}>
      //                   <img src="/img-padrao.svg" alt="Img" />
      //                 </div>
      //               </div>
      //               <div>
      //                 <div className={Styles.imagensCarrossel}>
      //                   <img src="/img-padrao.svg" alt="Img" />
      //                 </div>
      //               </div>
      //               <div>
      //                 <div className={Styles.imagensCarrossel}>
      //                   <img src="/img-padrao.svg" alt="Img" />
      //                 </div>
      //               </div>
      //               <div>
      //                 <div className={Styles.imagensCarrossel}>
      //                   <img src="/img-padrao.svg" alt="Img" />
      //                 </div>
      //               </div>
      //             </Slider>
      //           </div>
      //         </div>
      //         <div className={Styles.informaçoes}>
      //           <div className={Styles.tagsAnuncio}>
      //             <span>Exemplo tag 1</span>
      //             <span>Tag 2</span>
      //             <button className={Styles.botaoEditar}>
      //               <img src="/pencil.svg" alt="Botao de editar" />
      //               Editar
      //             </button>
      //           </div>
      //           <div className={Styles.tituloAnuncio}>
      //             <h1>Título do anúncio</h1>
      //             <button className={Styles.botaoEditar}>
      //               <img src="/pencil.svg" alt="Botao de editar" />
      //               Editar
      //             </button>
      //           </div>
      //           <div className={Styles.descricaoAnuncio}>
      //             <p>
      //               Lorem Ipsum is simply dummy text of the printing and
      //               typesetting industry. Lorem Ipsum has been the industry’s
      //               standard dummy text ever since the 1500s, when an unknown
      //               printer took a galley of type and scrambled it to make a
      //               type specimen book.
      //             </p>
      //             <button className={Styles.botaoEditar}>
      //               <img src="/pencil.svg" alt="Botao de editar" />
      //               Editar
      //             </button>
      //           </div>
      //           <div className={Styles.categoriaAnuncio}>
      //             <strong>Título Categoria</strong>
      //             <span>Lorem Ipsum is simply dummy text.</span>
      //             <button className={Styles.botaoEditar}>
      //               <img src="/pencil.svg" alt="Botao de editar" />
      //               Editar
      //             </button>
      //           </div>
      //           <div className={Styles.preçoAnuncio}>
      //             <span>de R$320</span>
      //             <strong>
      //               <sup>por</sup>R$260
      //             </strong>
      //             <h2>R$360 preço estimado no varejo</h2>
      //             <button className={Styles.botaoEditar}>
      //               <img src="/pencil.svg" alt="Botao de editar" />
      //               Editar
      //             </button>
      //           </div>
      //         </div>
      //       </section>
      //       <div className={Styles.buttonsLastPage}>
      //         <button onClick={() => setPasso(3)}>Voltar</button>
      //         <button onClick={() => setPasso(4)}>Publicar anúncio</button>
      //       </div>
      //     </>
      //   )
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

  const { data } = await api.get('/categoria', {
    headers: {
      authorization: `Bearer ${access_token['access-token']}`
    }
  })

  const categorias: Categoria[] = data.map(categoria => {
    return {
      categoria_id: categoria.categoria_id,
      nome: categoria.nome,
      descricao: categoria.descricao,
      sub_categoria: categoria.sub_categoria.map(sub_categoria => {
        return {
          subcategoria_id: sub_categoria.subcategoria_id,
          nome: sub_categoria.nome,
          descricao: sub_categoria.descricao
        }
      })
    }
  })

  return {
    props: {
      categorias
    }
  }
}
