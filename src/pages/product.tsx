import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Product } from '../components/product'
import { PergunteVendedor } from '../components/PergunteVendedor'
import { PalavrasMaisBuscadas } from '../components/PalavrasMaisBuscadas'
import { PodeGostar } from '../components/PodeGostar'
import { CompreJunto } from '../components/CompreJunto'
import { Caracteristicas } from '../components/Caracteristicas'

export default function Produto(): JSX.Element {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <Product />
      </section>
      <section>
        <PergunteVendedor />
      </section>
      <section>
        <Caracteristicas />
      </section>
      <section>
        <PalavrasMaisBuscadas />
      </section>
      <section>
        <CompreJunto />
      </section>
      <section>
        <PodeGostar />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}
