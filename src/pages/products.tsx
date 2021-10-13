import NavbarVoit from '../components/Navbar'
import { ProductItemCard } from '../components/ProductItemCard'
import { ProductsFilter } from '../components/ProductsFilter'
import { ProdutoDestaque } from '../components/ProdutoDestaque'

import Styles from '../styles/products.module.scss'

export default function product(): JSX.Element {
  return (
    <>
      <NavbarVoit />
      <ProdutoDestaque />
      <main className={Styles.main}>
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
      </main>
    </>
  )
}
