import Slider from 'react-slick'

import { Footer } from '../components/Footer'
import NavbarVoit from '../components/Navbar'
import { ProductItemCard } from '../components/BuyProductItemCard'
import { ProductsFilter } from '../components/ProductsFilter'
import { ProdutoDestaque } from '../components/ProdutoDestaque'
import { NearestProducts } from '../components/NearestProducts'
import { SportSelection } from '../components/SportSelection'

import Styles from '../styles/products.module.scss'
import { MostSearchedWords } from '../components/MostSearchedWords'

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
        <SportSelection />
        <NearestProducts />
        <MostSearchedWords />
      </main>
      <Footer />
    </>
  )
}
