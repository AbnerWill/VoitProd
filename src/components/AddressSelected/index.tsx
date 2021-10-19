import Styles from './styles.module.scss'

export function AddressSelected(): JSX.Element {
  return (
    <div className={Styles.card}>
      <h2>Bruno</h2>
      <p>
        Rua Santos Dumont 1487
        <br /> Ponta Grossa - PR
        <br /> 840610-260
        <br /> Telefone: 42 9 9900.9900
      </p>
    </div>
  )
}
