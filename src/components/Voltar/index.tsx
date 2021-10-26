import Styles from './styles.module.scss'

export function Voltar(): JSX.Element {
  return (
    <div className={Styles.divVoltar}>
      <button className={Styles.btnVoltar}>
        <i aria-hidden className="fas fa-angle-left fa-4x"></i>
      </button>
      <a href="/" className={Styles.linkVoltar}>
        voltar
      </a>
    </div>
  )
}
