import Styles from './styles.module.scss'

export function WhatsappContact(): JSX.Element {
  return (
    <button className={Styles.whatsappButton}>
      <img src="/whatsIcon.svg" alt="Icone do whatsapp" />
      <span>Fale com a gente!</span>
    </button>
  )
}
