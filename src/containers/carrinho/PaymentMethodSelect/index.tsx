import { CustomCheckbox } from '../../../components/CustomCheckbox'

import Styles from './styles.module.scss'

export function PaymentMethodSelect(): JSX.Element {
  return (
    <div>
      <h1>Pagamento: </h1>
      <div className={Styles.content}>
        <span className={Styles.creditCard}>
          <CustomCheckbox />
          <h1>Pague com Cartão de Crédito:</h1>
        </span>
        <div className={Styles.creditCardForm}>
          <div>
            <label>
              <h2>Número do Cartão</h2>
              <input type="number" placeholder="Número" />
            </label>
            <label className={Styles.smallLabel}>
              <h2>Validade</h2>
              <div>
                <input
                  type="number"
                  placeholder="Mês"
                  className={Styles.small}
                />
                <input
                  type="number"
                  placeholder="Ano"
                  className={Styles.small}
                />
              </div>
            </label>
          </div>
          <div>
            <label>
              <h2>Nome do Titular (como está gravado no Cartão)</h2>
              <input type="text" placeholder="Nome do titular" />
            </label>
            <label className={Styles.smallLabel}>
              <h2>Código de Segurança</h2>
              <input type="number" maxLength={3} className={Styles.small} />
            </label>
          </div>
          <div>
            <label>
              <h2>Opção de Parcelamento</h2>
              <input type="text" placeholder="1 x de R$ 310,00" />
            </label>
          </div>
          <span>
            <CustomCheckbox />
            <h2>Salvar cartão para futuras compras</h2>
          </span>
        </div>
        <span className={Styles.boleto}>
          <div>
            <CustomCheckbox />
            <h1>Pague com Boleto</h1>
          </div>
          <p>
            Você poderá visualizar ou imprimir após a finalização do pedido. A
            data de vencimento é de 2 dias corridos após a conclusão do pedido.
            Após esta data, ele perderá a validade.
          </p>
        </span>
      </div>
    </div>
  )
}
