import { CartResume } from '../components/CartResume'
import { CartStepper } from '../components/CartStepper'
import { Footer } from '../components/Footer'

import Styles from '../styles/cart.module.scss'

export default function Cart(): JSX.Element {
  return (
    <>
      <CartStepper step={1} />
      <main className={Styles.container}>
        <div className={Styles.content}>
          <div>aaaaaa</div>
          <CartResume />
        </div>
      </main>
      <Footer />
    </>
  )
}
