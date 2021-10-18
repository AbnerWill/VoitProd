import { CustomCheckbox } from '../CustomCheckbox'

import Styles from './styles.module.scss'

export function PaymentMethodSelect(): JSX.Element {
  return (
    <div>
      <h1>Pagamento: </h1>
      <div>
        <CustomCheckbox name="Pague com Cartão de Crédito" />
      </div>
    </div>
  )
}
