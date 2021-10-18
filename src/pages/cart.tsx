import { useState } from 'react'
import { CartProductItemCard } from '../components/CartProductItemCard'
import { CartResume } from '../components/CartResume'
import { CartStepper } from '../components/CartStepper'
import { Footer } from '../components/Footer'
import { NewAdressButton } from '../components/NewAdressButton'
import { PaymentMethodSelect } from '../components/PaymentMethodSelect'
import { SavedAddressCard } from '../components/SavedAddressCard'
import { SearchCEP } from '../components/SearchCEP'

import Styles from '../styles/cart.module.scss'

export default function Cart(): JSX.Element {
  const [step, setStep] = useState<number>(3)

  function cartContent(step: number) {
    switch (step) {
      case 1:
        return (
          <main className={Styles.container}>
            <div className={Styles.content}>
              <div>
                <h1>Minha cestinha: </h1>
                <ul>
                  <li>
                    <CartProductItemCard />
                  </li>
                  <li>
                    <CartProductItemCard />
                  </li>
                </ul>
              </div>
              <CartResume />
            </div>
            <div className={Styles.footer}>
              <SearchCEP />
              <div className={Styles.buttons}>
                <button>Efetuar pedido</button>
                <button>Continuar comprando</button>
              </div>
            </div>
          </main>
        )
      case 2:
        return (
          <main className={Styles.container}>
            <div className={Styles.content}>
              <div>
                <h1>Selecione o endereço:</h1>
                <ul>
                  <li>
                    <SavedAddressCard />
                  </li>
                </ul>
                <NewAdressButton />
              </div>
              <CartResume />
            </div>
            <div className={Styles.footer}>
              <div className={Styles.buttons}>
                <button>Seguir para pagamento</button>
                <button>Continuar comprando</button>
              </div>
            </div>
          </main>
        )
      case 3:
        return (
          <main className={Styles.container}>
            <div className={Styles.content}>
              <PaymentMethodSelect />
              <CartResume />
            </div>
            <div className={Styles.footer}>
              <div className={Styles.buttons}>
                <button>Pagar com cartão de crédito</button>
              </div>
            </div>
          </main>
        )
      default:
        return <h1>Nada encontrado</h1>
    }
  }

  return (
    <>
      <CartStepper step={step} />
      {cartContent(step)}
      <Footer />
    </>
  )
}
