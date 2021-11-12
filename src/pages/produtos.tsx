import { Footer } from '../components/Footer'
import NavbarVoit from '../components/Navbar'
import { ProductItemCard } from '../containers/listaProdutos/BuyProductItemCard'
import { FiltroProdutos } from '../containers/listaProdutos/FiltroProdutos'
import { ProdutoDestaque } from '../components/ProdutoDestaque'
import { NearestProducts } from '../components/NearestProducts'
import { SportSelection } from '../components/SportSelection'
import { MostSearchedWords } from '../components/MostSearchedWords'

import Styles from '../styles/produtos.module.scss'
import api from '../services/api'

import { DadosPublicosProduto } from '../types/typesProduto'
import { GetServerSideProps, GetStaticProps } from 'next'
import { parseCookies } from 'nookies'

interface ProductsPageProps {
  products: Array<DadosPublicosProduto>
}

export default function ProductsPage({
  products
}: ProductsPageProps): JSX.Element {
  return (
    <>
      <NavbarVoit />
      <ProdutoDestaque />
      <main className={Styles.main}>
        <div className={Styles.wrapper}>
          <FiltroProdutos />
          <section className={Styles.productsGrid}>
            {products?.map((produto, index) => (
              <ProductItemCard
                key={index}
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

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/produto/publica', {
    // headers: {
    //   authorization: `Bearer`
    // },
    params: {
      loja_id: '3'
    }
  })

  const products: DadosPublicosProduto[] = data

  return {
    props: {
      products
    }
  }
}
