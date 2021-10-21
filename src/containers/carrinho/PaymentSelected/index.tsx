import Styles from './styles.module.scss'

export function PaymentSelected(): JSX.Element {
  return (
    <div className={Styles.card}>
      <div>
        <img src="/mastercard.svg" alt="Cartão mastercard" />
        <h2>Crédito com final 0099</h2>
      </div>

      <div>
        <h2>Cupom Desconto</h2>
        <input type="text" placeholder="Insira o CUPOM" />
      </div>
    </div>
  )
}
