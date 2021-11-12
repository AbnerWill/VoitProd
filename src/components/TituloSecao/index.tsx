import Styles from './styles.module.scss'

export function TituloSecao(props): JSX.Element {
  return <p className={Styles.titulo}>{props.titulo}</p>
}
