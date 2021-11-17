/* eslint-disable camelcase */
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { parseCookies } from 'nookies'
import { useEffect, useState } from 'react'
import imageToBase64 from 'image-to-base64/browser'
import Slider from 'react-slick'

import { NextArrow, PrevArrow } from '../../components/Arrows'
import { Footer } from '../../components/Footer'
import { PassosCadastro } from '../../containers/cadastroProdutos/PassosCadastro'
import api from '../../services/api'

import Styles from './cadastro.module.scss'
import { CustomField } from '../../components/CustomField'
import { CustomDropdown } from '../../components/CustomDropdown'

interface Categoria {
  categoria_id: number
  nome: string
  descricao: string
  atributo?: {
    atributo_grupo_id: number
    data_adicionado: string
    nome: string
    atributo_grupo: {
      atributo_grupo_valor_id: number
      data_adicionado: string
      nome: string
    }[]
  }[]
  sub_categoria: {
    subcategoria_id: string
    nome: string
    descricao: string
  }[]
}

interface Cor {
  cor_id: number
  data_adicionado: string
  nome: string
  ordem: number
}

interface Tamanho {
  tamanho_id: number
  nome: string
  ordem: number
  data_adicionado: string
}

interface DadosProduto {
  loja_id: string
  categoria_id: string
  subcategoria_id: string
  nome: string
  valor: number
  codigo_produto?: string
  cor_id?: string
  tamanho_id?: string
  marca?: string
  produto_estado?: string
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
  fotos?: {
    ordem: number
    base64: Promise<string | ArrayBuffer>
  }[]
}

// interface ImagensBase64 {
//   ordem: number
//   base64: string | ArrayBuffer
// }

// interface CadastroProdutoProps {
//   cores: Cor[]
//   tamanhos: Tamanho[]
// }

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
  produto_estado: Yup.string()
  // imagens: Yup.array().of(Yup.string())
})

const informaçõesSecundariasSchema = Yup.object().shape({
  descricao: Yup.string().required('Digite a descrição do produto'),
  subcategoria_id: Yup.string().required('Escolha uma subcategoria do produto'),
  altura: Yup.number(),
  largura: Yup.number(),
  comprimento: Yup.number(),
  peso: Yup.number(),
  cor_id: Yup.number(),
  tamanho_id: Yup.number(),
  categoria_id: Yup.string(),
  atributo: Yup.object({
    atributo_grupo_valor_id: Yup.string(),
    nome: Yup.string()
  }),
  valorAtributo: Yup.string()
})

export default function CadastroProduto(): JSX.Element {
  const [passo, setPasso] = useState(0)
  const [dadosProduto, setDadosProduto] =
    useState<DadosProduto>(dadosProdutoInicial)
  const [atributosSalvos, setAtributosSalvos] = useState([])
  const [categorias, setCategorias] = useState<Categoria[]>([])
  const [cores, setCores] = useState<Cor[]>([])
  const [tamanhos, setTamanhos] = useState<Tamanho[]>([])
  const [listaImagens, setListaImagens] = useState<File[]>([])
  const [imagemPreview, setImagemPreview] = useState<string>('')
  const [imagensBase64, setImagensBase64] = useState([])

  const [loadingCores, setLoadingCores] = useState<boolean>(false)
  const [loadingTamanhos, setLoadingTamanhos] = useState<boolean>(false)

  const access_token = parseCookies()

  useEffect(() => {
    getCategorias()
    getCores()
    getTamanhos()
  }, [])

  async function getCores() {
    try {
      setLoadingCores(true)
      const corResponse = await api.get('/cor', {
        headers: {
          authorization: `Bearer ${access_token['access-token']}`
        }
      })
      setLoadingCores(false)

      const newCores: Cor[] = corResponse.data.map(cor => {
        return {
          cor_id: cor.cor_id,
          data_adicionado: cor.data_adicionado,
          nome: cor.nome,
          ordem: cor.ordem
        }
      })

      setCores([...cores, ...newCores])
    } catch (error) {
      setLoadingCores(false)
      console.log(error)
    }
  }

  async function getTamanhos() {
    try {
      setLoadingTamanhos(true)
      const tamanhoResponse = await api.get('/tamanho', {
        headers: {
          authorization: `Bearer ${access_token['access-token']}`
        }
      })
      setLoadingTamanhos(false)

      const newTamanhos: Tamanho[] = tamanhoResponse.data.map(tamanho => {
        return {
          tamanho_id: tamanho.tamanho_id,
          data_adicionado: tamanho.data_adicionado,
          nome: tamanho.nome,
          ordem: tamanho.ordem
        }
      })

      setTamanhos([...tamanhos, ...newTamanhos])
    } catch (error) {
      setLoadingTamanhos(false)
      console.log(error)
    }
  }

  async function getCategorias() {
    const categoriaResponse = await api.get('/categoria', {
      headers: {
        authorization: `Bearer ${access_token['access-token']}`
      }
    })

    const newCategorias: Categoria[] = categoriaResponse.data.map(categoria => {
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
        }),
        atributo: categoria.atributo.map(atributo => {
          return {
            atributo_grupo_id: atributo.atributo_grupo_id,
            data_adicionado: atributo.data_adicionado,
            nome: atributo.nome,
            atributo_grupo: atributo.atributo_grupo.map(valor => {
              return {
                atributo_grupo_valor_id: valor.atributo_grupo_valor_id,
                data_adicionado: valor.data_adicionado,
                nome: valor.nome
              }
            })
          }
        })
      }
    })

    setCategorias([...categorias, ...newCategorias])
  }

  function getSubcategorias(id: number) {
    const categoria = categorias.find(
      categoria => categoria.categoria_id === id
    )

    return categoria.sub_categoria
  }

  function getAtributos(id: number) {
    const categoria = categorias.find(
      categoria => categoria.categoria_id === id
    )

    return categoria.atributo
  }

  function toBase64(file: File) {
    return new Promise<string | ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = error => reject(error)
    })
  }

  async function SubmitInformacoesBasicas(values) {
    const newImagensBase64 = [...imagensBase64]

    for (const imagem of listaImagens) {
      const response = await toBase64(imagem)
      // console.log(response)
      newImagensBase64.push(response)
    }

    const newFotos = newImagensBase64.map((valor, index) => {
      return {
        ordem: String(index),
        base64: valor
      }
    })

    setDadosProduto({
      ...dadosProduto,
      nome: values.nome,
      marca: values.marca,
      produto_estado: values.produto_estado,
      valor: values.valor,
      valor_com_desconto: values.valorDesconto,
      foto: newFotos[0].base64
    })

    setImagensBase64(newFotos)

    setImagemPreview(URL.createObjectURL(listaImagens[0]))

    setPasso(oldValue => oldValue + 1)
  }

  function SubmitInformacoesSecundarias(values) {
    setDadosProduto({
      ...dadosProduto,
      loja_id: '14',
      codigo_produto: 'cvbj8345',
      cor_id: String(values.cor_id),
      tamanho_id: String(values.tamanho_id),
      subcategoria_id: String(values.subcategoria_id),
      descricao: values.descricao,
      peso: values.peso,
      altura: values.altura,
      largura: values.largura,
      comprimento: values.comprimento,
      categoria_id: String(values.categoria_id),
      produto_atributo: atributosSalvos.map(atributo => {
        return {
          atributo_grupo_valor_id: String(atributo.atributo_grupo_valor_id),
          valor: atributo.valor
        }
      })
    })

    setPasso(oldValue => oldValue + 1)
  }

  async function PublicarProduto() {
    const data = { ...dadosProduto }
    const imagensData = {
      loja_id: '14',
      fotos: [...imagensBase64]
    }

    try {
      const produtoResponse = await api.post('/produto', data, {
        headers: {
          Authorization: `Bearer ${access_token['access-token']}`
        }
      })

      const imagensResponse = await api.post(
        `/produto/${produtoResponse.data.produto_id}/foto`,
        imagensData,
        {
          headers: {
            Authorization: `Bearer ${access_token['access-token']}`
          }
        }
      )
    } catch (error) {
      console.log(error.response)
    }
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
            <PassosCadastro passo={passo} />
            <Formik
              validationSchema={informaçoesBasicasSchema}
              initialValues={{
                nome: '' || dadosProduto.nome,
                cor_id: '' || dadosProduto.cor_id,
                tamanho_id: '' || dadosProduto.tamanho_id,
                marca: '' || dadosProduto.marca,
                produto_estado: '' || dadosProduto.produto_estado,
                valor: dadosProduto.valor || '',
                valorDesconto: '' || dadosProduto.valor_com_desconto
              }}
              onSubmit={values => SubmitInformacoesBasicas(values)}
            >
              {({ values, dirty, handleChange }) => (
                <Form>
                  <div className={Styles.informaçoesBasicas}>
                    <CustomField
                      label="Título do produto"
                      type="text"
                      name="nome"
                      value={values.nome}
                      dirty={dirty}
                      placeholder="Digite o título do produto"
                    />
                    <div>
                      <CustomDropdown
                        contenttype="cor"
                        label="Cor"
                        name="cor_id"
                        cor={cores}
                        loading={loadingCores}
                      />
                      <CustomDropdown
                        contenttype="tamanho"
                        label="Tamanho"
                        name="tamanho_id"
                        tamanho={tamanhos}
                        loading={loadingTamanhos}
                      />
                      <CustomField
                        value={values.marca}
                        label="Marca"
                        type="text"
                        name="marca"
                      />
                      <CustomDropdown
                        contenttype="strings"
                        label="Condição"
                        name="produto_estado"
                        array={['usado', 'novo']}
                      />
                    </div>
                  </div>
                  <div className={Styles.divisor} />
                  <div className={Styles.valorProduto}>
                    <h1>Qual o valor?</h1>
                    <div>
                      <div>
                        <CustomField
                          value={values.valor}
                          label="Valor"
                          name="valor"
                          type="number"
                        />
                        <span>Quanto deseja receber + 20% de taxa</span>
                      </div>
                      <span>ou</span>
                      <div>
                        <CustomField
                          label="Quanto quer receber?"
                          name="valorDesconto"
                          type="number"
                          value={values.valorDesconto}
                        />
                        <span>Valor total - 20% de taxa</span>
                      </div>
                    </div>
                  </div>
                  <div className={Styles.divisor} />
                  <div className={Styles.adicionarFotos}>
                    <h1>Adicione Fotos</h1>
                    <h2>Adicione fotos do produto</h2>
                    <label>
                      <img src="/img-padrao.svg" alt="img" />
                      <strong>Arraste imagens aqui</strong>
                      <div>
                        Adicionar foto{' '}
                        <input
                          type="file"
                          multiple
                          accept=".jpg, .png, .jpeg"
                          onChange={event => {
                            setListaImagens([
                              ...listaImagens,
                              ...Object.values(event.currentTarget.files)
                            ])
                          }}
                        />
                      </div>
                      {listaImagens.map((imagem, index) => (
                        <span key={index}>{imagem.name}</span>
                      ))}
                    </label>
                  </div>
                  <div className={Styles.buttons}>
                    <button type="submit">Próximo</button>
                  </div>
                </Form>
              )}
            </Formik>
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
              validationSchema={informaçõesSecundariasSchema}
              initialValues={{
                descricao: '' || dadosProduto.descricao,
                altura: 0 || dadosProduto.altura,
                largura: 0 || dadosProduto.largura,
                comprimento: 0 || dadosProduto.comprimento,
                peso: 0 || dadosProduto.peso,
                categoria_id: '',
                subcategoria_id: '',
                atributo: {
                  atributo_grupo_valor_id: '',
                  nome: ''
                },
                valorAtributo: ''
              }}
              onSubmit={values => SubmitInformacoesSecundarias(values)}
            >
              {({ values, errors, touched, dirty, handleChange }) => (
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
                      <label className={Styles.customInput}>
                        <h2>Altura</h2>
                        <input
                          min="0"
                          name="altura"
                          type="number"
                          value={values.altura}
                          onChange={handleChange}
                          className={
                            dirty && errors.altura && touched.altura
                              ? Styles.erro
                              : ''
                          }
                        />
                        {dirty && errors.altura && touched.altura && (
                          <strong>{errors.altura}</strong>
                        )}
                      </label>
                      <label className={Styles.customInput}>
                        <h2>Largura</h2>
                        <input
                          min="0"
                          name="largura"
                          type="number"
                          value={values.largura}
                          onChange={handleChange}
                          className={
                            dirty && errors.largura && touched.largura
                              ? Styles.erro
                              : ''
                          }
                        />
                        {dirty && errors.largura && touched.largura && (
                          <strong>{errors.largura}</strong>
                        )}
                      </label>
                      <label className={Styles.customInput}>
                        <h2>Comprimento</h2>
                        <input
                          min="0"
                          name="comprimento"
                          type="number"
                          value={values.comprimento}
                          onChange={handleChange}
                          className={
                            dirty && errors.comprimento && touched.comprimento
                              ? Styles.erro
                              : ''
                          }
                        />
                        {dirty && errors.comprimento && touched.comprimento && (
                          <strong>{errors.comprimento}</strong>
                        )}
                      </label>
                      <label className={Styles.customInput}>
                        <h2>Peso</h2>
                        <input
                          min="0"
                          name="peso"
                          type="number"
                          value={values.peso}
                          onChange={handleChange}
                          className={
                            dirty && errors.peso && touched.peso
                              ? Styles.erro
                              : ''
                          }
                        />
                        {dirty && errors.peso && touched.peso && (
                          <strong>{errors.peso}</strong>
                        )}
                      </label>
                    </div>
                    <div>
                      <div>
                        <CustomDropdown
                          contenttype="categorias"
                          label="Categoria"
                          name="categoria_id"
                          categorias={categorias}
                        />
                        <CustomDropdown
                          contenttype="sub_categorias"
                          label="Subcategoria"
                          name="subcategoria_id"
                          sub_categorias={
                            values.categoria_id
                              ? getSubcategorias(
                                  values.categoria_id
                                    ? Number(values.categoria_id)
                                    : Number(dadosProduto.categoria_id)
                                )
                              : []
                          }
                        />
                      </div>
                      {atributosSalvos.map(atributoSalvo => (
                        <div key={atributoSalvo.atributo_grupo_valor_id}>
                          <label className={Styles.customInput}>
                            <h2>Atributo</h2>
                            <input value={atributoSalvo.nome} readOnly />
                          </label>
                          <label className={Styles.customInput}>
                            <h2>Valor</h2>
                            <input value={atributoSalvo.valor} readOnly />
                          </label>
                        </div>
                      ))}
                      <div>
                        <CustomDropdown
                          contenttype="atributos"
                          label="Atributo"
                          name="atributo"
                          atributos={
                            values.categoria_id
                              ? getAtributos(
                                  values.categoria_id
                                    ? Number(values.categoria_id)
                                    : Number(dadosProduto.categoria_id)
                                )
                              : []
                          }
                        />
                        <CustomField
                          label="Valor"
                          name="valorAtributo"
                          type="text"
                        />
                        <button
                          className={Styles.botãoFlutuante}
                          type="button"
                          onClick={() => {
                            setAtributosSalvos([
                              ...atributosSalvos,
                              {
                                atributo_grupo_valor_id:
                                  values.atributo.atributo_grupo_valor_id,
                                nome: values.atributo.nome,
                                valor: values.valorAtributo
                              }
                            ])
                          }}
                        >
                          <img src="/mais.svg" alt="Operador de adição" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className={Styles.buttons}>
                    <button
                      type="button"
                      onClick={() => setPasso(oldValue => oldValue - 1)}
                    >
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
            <div className={Styles.titleLastPage}>
              <h1>Resumo do anúncio</h1>
              <h2>Seu anúncio irá aparecer assim:</h2>
            </div>
            <section className={Styles.resumoAnuncio}>
              <div className={Styles.imagens}>
                <div
                  style={{
                    backgroundImage: `URL(${imagemPreview})`
                  }}
                  className={Styles.imagemGrande}
                >
                  <button className={Styles.botaoEditar}>
                    <img src="/pencil.svg" alt="Botao de editar" />
                    Editar
                  </button>
                </div>
                <div className={Styles.carrossel}>
                  <Slider {...settings}>
                    {listaImagens.map((imagem, index) => (
                      <div key={index}>
                        <div
                          onClick={() =>
                            setImagemPreview(URL.createObjectURL(imagem))
                          }
                          style={{
                            backgroundImage: `URL(${URL.createObjectURL(
                              imagem
                            )})`
                          }}
                          className={Styles.imagensCarrossel}
                        ></div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div className={Styles.informaçoes}>
                <div className={Styles.tituloAnuncio}>
                  <h1>{dadosProduto.nome}</h1>
                  <button className={Styles.botaoEditar}>
                    <img src="/pencil.svg" alt="Botao de editar" />
                    Editar
                  </button>
                </div>
                <div className={Styles.descricaoAnuncio}>
                  <p>{dadosProduto.descricao}</p>
                  <button className={Styles.botaoEditar}>
                    <img src="/pencil.svg" alt="Botao de editar" />
                    Editar
                  </button>
                </div>
                <div className={Styles.categoriaAnuncio}>
                  <strong>
                    {
                      categorias.find(
                        categoria =>
                          String(categoria.categoria_id) ===
                          dadosProduto.categoria_id
                      ).nome
                    }
                  </strong>
                  <span>
                    {
                      categorias
                        .find(
                          categoria =>
                            String(categoria.categoria_id) ===
                            dadosProduto.categoria_id
                        )
                        .sub_categoria.find(
                          subcategoria =>
                            String(subcategoria.subcategoria_id) ===
                            dadosProduto.subcategoria_id
                        ).nome
                    }
                  </span>
                  <button className={Styles.botaoEditar}>
                    <img src="/pencil.svg" alt="Botao de editar" />
                    Editar
                  </button>
                </div>
                <div className={Styles.preçoAnuncio}>
                  <span>
                    de{' '}
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(dadosProduto.valor)}
                  </span>
                  <strong>
                    <sup>por</sup>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(dadosProduto.valor_com_desconto)}
                  </strong>
                  <button className={Styles.botaoEditar}>
                    <img src="/pencil.svg" alt="Botao de editar" />
                    Editar
                  </button>
                </div>
              </div>
            </section>
            <div className={Styles.buttonsLastPage}>
              <button onClick={() => setPasso(passo => passo - 1)}>
                Voltar
              </button>
              <button onClick={PublicarProduto}>Publicar anúncio</button>
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
