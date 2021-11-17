/* eslint-disable camelcase */
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

import { DadosPublicosProduto } from '../../../types/typesProduto'
import { GetStaticPaths, GetStaticProps } from 'next'

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

interface ProductsResponse {
  data: Produto[]
  current_page: number
  first_page_url: number
  last_page: number
  last_page_url: string
  next_page_url: string
}

interface ProductsPageProps {
  ProductProps: ProductsResponse
}

export default function ProductsPage({
  ProductProps
}: ProductsPageProps): JSX.Element {
  return (
    <>
      <NavbarVoit />
      <ProdutoDestaque />
      <main className={Styles.main}>
        <div className={Styles.wrapper}>
          <FiltroProdutos />
          <section className={Styles.productsGrid}>
            {ProductProps.data?.map(produto => (
              <ProductItemCard
                key={produto.produto_id}
                nome={produto.nome}
                valor={produto.valor}
                foto={produto.foto}
              />
            ))}
          </section>
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

  const ProductProps: ProductsResponse = {
    ...produtosResponse.data
  }

  const atributosResponse = await api.get('/atributo/publica', {
    params: {
      ...urlParams
    }
  })

  console.log(atributosResponse.data)

  return {
    props: {
      ProductProps
    }
  }
}
