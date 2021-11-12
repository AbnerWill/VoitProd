import Styles from './styles.module.scss'

interface PassosCadastroProps {
  passo: number
}

export function PassosCadastro({ passo }: PassosCadastroProps): JSX.Element {
  return (
    <div className={Styles.container}>
      <h1>Informações básicas do produto</h1>
      <h2>Elas serão a base do seu anúncio</h2>
      <div className={Styles.passo}>
        <strong className={passo === 0 ? Styles.highlighted : ''}>1</strong>
        <strong className={passo === 1 ? Styles.highlighted : ''}>2</strong>
        <strong className={passo === 2 ? Styles.highlighted : ''}>3</strong>
      </div>
    </div>
  )
}
