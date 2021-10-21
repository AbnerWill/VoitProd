import Styles from './styles.module.scss'

interface CartStepperProps {
  step: number
}

export function CartStepper(props: CartStepperProps): JSX.Element {
  function changeStep(step: number) {
    if (step === props.step) {
      return Styles.currentStep
    }

    if (step < props.step) {
      return Styles.pastStep
    }

    return Styles.defaultStep
  }

  return (
    <header className={Styles.cartStepper}>
      <img src="/voit-logo.svg" alt="Logo da Voit" />
      <div>
        <ul>
          <li className={changeStep(1)}>Cestinha</li>
          <li className={changeStep(2)}>Endereço</li>
          <li className={changeStep(3)}>Pagamento</li>
          <li className={changeStep(4)}>Resumo</li>
          <li className={changeStep(5)}>Conclusão</li>
        </ul>
      </div>
    </header>
  )
}
