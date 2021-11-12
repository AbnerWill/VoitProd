import Styles from './styles.module.scss'

export function Desconto(props): JSX.Element {
  return <span className={Styles.desconto}>{props.desconto}</span>
}
