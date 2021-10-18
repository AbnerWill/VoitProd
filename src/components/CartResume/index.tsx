import Styles from './styles.module.scss'

export function CartResume(): JSX.Element {
  return (
    <aside className={Styles.container}>
      <h1 className={Styles.title}>Resumo da compra:</h1>
      <div className={Styles.resume}>
        <div>
          Subtotal (2 itens)
          <strong>R$ 440,00</strong>
        </div>
        <div>
          Cupom Desconto
          <input type="text" placeholder="Insira o CUPOM" />
        </div>
        <div>
          Frete
          <span>Frete grátis</span>
        </div>
        <div>
          Descontos
          <strong>R$ 130,00</strong>
        </div>
        <div className={Styles.total}>
          Valor total
          <div>
            <strong>R$ 310,00</strong>
            <span>Em até 10x de R$31 sem juros</span>
          </div>
        </div>
        <strong>Você está economizando R$130</strong>
      </div>
    </aside>
  )
}
