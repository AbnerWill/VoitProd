import { useState } from 'react'
import { AddressSelected } from '../AddressSelected'
import { CartProductItemCard } from '../CartProductItemCard'
import { CartResume } from '../CartResume'
import { CartStepper } from '../CartStepper'
import { NewAdressButton } from '../NewAdressButton'
import { PaymentMethodSelect } from '../PaymentMethodSelect'
import { PaymentSelected } from '../PaymentSelected'
import { SavedAddressCard } from '../SavedAddressCard'
import { SearchCEP } from '../SearchCEP'
import Styles from './styles.module.scss'

export function CartContent(): JSX.Element {
  const [step, setStep] = useState<number>(3)
  const [paymentMethod, setPaymentMethod] = useState('credit')

  switch (step) {
    case 1:
      return (
        <>
          <CartStepper step={step} />
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
        </>
      )
    case 2:
      return (
        <>
          <CartStepper step={step} />
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
        </>
      )
    case 3:
      return (
        <>
          <CartStepper step={step} />
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
        </>
      )
    case 4:
      return (
        <>
          <CartStepper step={step} />
          <main className={Styles.container}>
            <div className={Styles.resume}>
              <CartResume />
              <div>
                <h1>Endereço:</h1>
                <AddressSelected />
              </div>
              <div>
                <h1>Forma de Pagamento:</h1>
                <PaymentSelected />
                <button>Confirmar Pedido</button>
              </div>
            </div>
          </main>
        </>
      )
    case 5:
      return (
        <main className={Styles.finishedOrder}>
          <img src="/voit-logo.svg" alt="Logo da Voit" />

          {paymentMethod === 'credit' ? (
            <div className={Styles.credit}>
              <h1>Pagamento realizado com sucesso</h1>
              <h2>Acompanhe seu e-mail para mais informações</h2>
              <img src="/confirm.svg" alt="Icone de confirmação" />
              <h2>
                Em alguns segundos você será
                <br /> redirecionado para a home
              </h2>
            </div>
          ) : (
            <div className={Styles.boleto}>
              <h1>Seu boleto foi gerado e encaminhado para seu e-mail</h1>
              <h2>Você também pode visualizar aqui:</h2>
              <button>
                <img src="/boleto.svg" alt="Icone de confirmação" />
                <h2>Visualizar boleto</h2>
              </button>
            </div>
          )}
        </main>
      )
    default:
      return <h1>Nada encontrado</h1>
  }
}
