import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Product } from '../components/product'

export default function Produto(): JSX.Element {
  return (
    <div>
      <Navbar />
      <section>
        <Product />
      </section>
      <Footer />
    </div>
  )
}
