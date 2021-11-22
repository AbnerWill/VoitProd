/* eslint-disable camelcase */

import { useRouter } from 'next/router'
import { Spinner } from 'react-bootstrap'

import { Footer } from '../../../components/Footer'
import NavbarVoit from '../../../components/Navbar'
import { ProductItemCard } from '../../../containers/listaProdutos/BuyProductItemCard'
import { FiltroProdutos } from '../../../containers/listaProdutos/FiltroProdutos'
import { ProdutoDestaque } from '../../../components/ProdutoDestaque'
import { NearestProducts } from '../../../components/NearestProducts'
import { SportSelection } from '../../../components/SportSelection'
import { MostSearchedWords } from '../../../components/MostSearchedWords'

import Styles from '../../../styles/produtos.module.scss'
import api from '../../../services/api'

import { GetStaticPaths, GetStaticProps } from 'next'
import { Paginacao } from '../../../containers/listaProdutos/Paginacao'
import { useEffect, useState } from 'react'

type Link = {
  url: string
  label: string
  active: boolean
}
interface Produto {
  produto_id: number
  data_adicionadio: string
  codigo_produto: string
  nome: string
  descricao: string
  largura: string
  comprimento: string
  peso: string
  altura: string
  foto: string
  valor: number
  valor_com_desconto: number
  categoria_id: number
  subcategoria_id: number
  usuario_id: number
  loja_id: number
  marca: string
  produto_estado: string
}

interface ProductPagination {
  data: Produto[]
  links: Link[]
  current_page: number
  first_page_url: number
  last_page: number
  last_page_url: string
  prev_page_url: string
  next_page_url: string
  total: number
  per_page: number
}

interface AtributosResponse {
  atributo_grupo_id: number
  nome: string
  atributo_grupo: {
    atributo_grupo_valor_id: number
    nome: string
  }[]
}

interface ProductsPageProps {
  produtosPagination: ProductPagination
  atributos: AtributosResponse[]
}

export default function ProductsPage({
  produtosPagination,
  atributos
}: ProductsPageProps): JSX.Element {
  const [paginacao, setPaginacao] = useState<ProductPagination>({
    ...produtosPagination,
    links: [...produtosPagination.links]
  })
  const [currentPage, setCurrentPage] = useState<Link>(
    paginacao.links.find(pagina => pagina.active === true)
  )
  const [produtos, setProdutos] = useState([...produtosPagination.data])
  const [atributosFiltro, setAtributosFiltro] = useState({})
  const [loading, setLoading] = useState<boolean>(false)

  const { query } = useRouter()
  const { categoria_id, subcategoria_id } = query
  const urlParams = {
    categoria_id: String(categoria_id),
    subcategoria_id: String(subcategoria_id)
  }

  useEffect(() => {
    getPageItems(currentPage)
  }, [currentPage])

  async function getPageItems(page: Link) {
    try {
      setLoading(true)
      const response = await api.get(page.url, {
        params: {
          ...urlParams,
          page_size: 20
        }
      })
      setLoading(false)

      const newPaginacao = response.data
      const newProdutos = response.data.data

      setProdutos(newProdutos)
      setPaginacao(newPaginacao)
    } catch (error) {
      console.log(error)
    }
  }

  async function nextPage() {
    try {
      setLoading(true)
      const response = await api.get(paginacao.next_page_url, {
        params: {
          ...urlParams,
          page_size: 20
        }
      })
      setLoading(false)

      const newPaginacao = response.data
      const newProdutos = response.data.data

      setProdutos(newProdutos)
      setPaginacao(newPaginacao)

      console.log(response.data)
    } catch (error) {
      console.log(error.response)
    }
  }

  async function prevPage() {
    try {
      setLoading(true)
      const response = await api.get(paginacao.prev_page_url, {
        params: {
          ...urlParams,
          page_size: 20
        }
      })
      setLoading(false)

      const newPaginacao = response.data
      const newProdutos = response.data.data

      setProdutos(newProdutos)
      setPaginacao(newPaginacao)

      console.log(response.data)
    } catch (error) {
      console.log(error.response)
    }
  }

  return (
    <>
      <NavbarVoit />
      <ProdutoDestaque />
      <main className={Styles.main}>
        <div className={Styles.wrapper}>
          <FiltroProdutos atributos={atributos} />
          <div>
            {loading ? (
              <div className={Styles.skeleton}>
                <Spinner animation="border">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            ) : (
              <section className={Styles.productsGrid}>
                {produtos.map(produto => {
                  return (
                    <ProductItemCard
                      key={produto.produto_id}
                      nome={produto.nome}
                      valor={produto.valor}
                      foto={produto.foto}
                      id={produto.produto_id}
                    />
                  )
                })}
              </section>
            )}
            <div>
              <Paginacao
                setCurrentPage={setCurrentPage}
                pages={paginacao.links}
                nextPage={nextPage}
                prevPage={prevPage}
              />
            </div>
          </div>
        </div>
        <SportSelection />
        <NearestProducts />
        <MostSearchedWords />
      </main>
      <Footer />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { params } = ctx
  const { categoria_id, subcategoria_id } = params

  const urlParams = {
    categoria_id: String(categoria_id),
    subcategoria_id: String(subcategoria_id)
  }

  const produtosResponse = await api.get('/produto/categoria_produto', {
    params: {
      ...urlParams,
      page_size: 20
    }
  })

  const produtosPagination = {
    current_page: produtosResponse.data.current_page,
    last_page: produtosResponse.data.last_page,
    first_page_url: produtosResponse.data.first_page_url,
    last_page_url: produtosResponse.data.last_page_url,
    prev_page_url: produtosResponse.data.prev_page_url,
    next_page_url: produtosResponse.data.next_page_url,
    per_page: Number(produtosResponse.data.per_page),
    from: produtosResponse.data.from,
    to: produtosResponse.data.to,
    total: produtosResponse.data.total,
    data: produtosResponse.data.data,
    links: produtosResponse.data.links
  }

  const atributosResponse = await api.get('/atributo/publica', {
    params: {
      ...urlParams
    }
  })

  const atributos = atributosResponse.data.map(atributo => {
    return {
      atributo_grupo_id: atributo.atributo_grupo_id,
      nome: atributo.nome,
      atributo_grupo: atributo.atributo_grupo.map(atributo_valor => {
        return {
          atributo_grupo_valor_id: atributo_valor.atributo_grupo_valor_id,
          nome: atributo_valor.nome
        }
      })
    }
  })

  return {
    props: {
      produtosPagination,
      atributos
    }
  }
}
