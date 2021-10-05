import Styles from './styles.module.scss'

interface ButtonProps {
  title: string
}

export function Button(props: ButtonProps): JSX.Element {
  return <button className={Styles.button}>{props.title}</button>
}
