import Slider from 'react-slick'

import { Footer } from '../components/Footer'
import NavbarVoit from '../components/Navbar'
import { ProductItemCard } from '../components/ProductItemCard'
import { ProductsFilter } from '../components/ProductsFilter'
import { ProdutoDestaque } from '../components/ProdutoDestaque'
import { ProdutosProximos } from '../components/ProdutosProximos'
import { SelecaoEsporte } from '../components/SelecaoEsporte'

import Styles from '../styles/products.module.scss'

export default function product(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  }

  return (
    <>
      <NavbarVoit />
      <ProdutoDestaque />
      <main className={Styles.main}>
        <div className={Styles.wrapper}>
          <ProductsFilter />
          <section className={Styles.productsGrid}>
            <ProductItemCard />
            <ProductItemCard />
            <ProductItemCard />
            <ProductItemCard />
            <ProductItemCard />
            <ProductItemCard />
            <ProductItemCard />
            <ProductItemCard />
            <ProductItemCard />
            <ProductItemCard />
            <ProductItemCard />
            <ProductItemCard />
            <ProductItemCard />
            <ProductItemCard />
            <ProductItemCard />
            <ProductItemCard />
            <ProductItemCard />
            <ProductItemCard />
            <ProductItemCard />
            <ProductItemCard />
            <ProductItemCard />
          </section>
        </div>
        <SelecaoEsporte />
        <ProdutosProximos />
      </main>
      <Footer />
    </>
  )
}
