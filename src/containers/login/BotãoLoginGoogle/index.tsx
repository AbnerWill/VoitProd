import Styles from './styles.module.scss'

export function BotaoLoginGoogle(): JSX.Element {
  return (
    <button className={Styles.button}>
      <img src="/gmail.svg" alt="Icone gmail" />
      Gmail
    </button>
  )
}
