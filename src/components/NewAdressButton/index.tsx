import Styles from './styles.module.scss'

export function NewAdressButton(): JSX.Element {
  return (
    <button className={Styles.button}>Deseja incluir um novo endereço?</button>
  )
}
