/* eslint-disable camelcase */
import { Footer } from '../../components/Footer'
import NavbarVoit from '../../components/Navbar'
import { ProductItemCard } from '../../containers/listaProdutos/BuyProductItemCard'
import { FiltroProdutos } from '../../containers/listaProdutos/FiltroProdutos'
import { ProdutoDestaque } from '../../components/ProdutoDestaque'
import { NearestProducts } from '../../components/NearestProducts'
import { SportSelection } from '../../components/SportSelection'
import { MostSearchedWords } from '../../components/MostSearchedWords'

import Styles from '../../styles/produtos.module.scss'
import api from '../../services/api'

import { DadosPublicosProduto } from '../../types/typesProduto'
import { GetServerSideProps } from 'next'
import { useListagemProdutos } from '../../contexts/ListagemProdutoContext'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface ProductsPageProps {
  products: Array<DadosPublicosProduto>
}

export default function ProductsPage({
  products
}: ProductsPageProps): JSX.Element {
  const { categoria_id, subcategoria_id } = useListagemProdutos()
  const [dadosProduto, setDadosProduto] = useState([])
  const router = useRouter()

  useEffect(() => {
    if (categoria_id || subcategoria_id) {
      getListaProdutos()
    } else {
      router.push('/')
    }
  }, [])

  async function getListaProdutos() {
    const response = await api.get('/produto/categoria_produto', {
      params: {
        categoria_id,
        subcategoria_id,
        page_size: 20
      }
    })

    console.log(response.data)
    console.log(categoria_id)

    const newDadosProduto = [...dadosProduto, ...response.data.data]
    console.log(newDadosProduto)

    setDadosProduto(newDadosProduto)
  }

  async function getAtributos() {
    // TODO
  }

  return (
    <>
      <NavbarVoit />
      <ProdutoDestaque />
      <main className={Styles.main}>
        <div className={Styles.wrapper}>
          <FiltroProdutos />
          <section className={Styles.productsGrid}>
            {dadosProduto?.map(produto => (
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
