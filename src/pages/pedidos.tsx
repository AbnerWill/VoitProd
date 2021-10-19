import { Footer } from '../components/Footer'
import { NavInterna } from '../components/NavInterna'
import { PedidoInterna } from '../components/PedidoInterna'

export default function Pedido(): JSX.Element {
  return (
    <div>
      <section>
        <NavInterna />
      </section>
      <section>
        <PedidoInterna />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}
