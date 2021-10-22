import Image from 'next/image'
import { TituloSecao } from '../TituloSecao'
import Styles from './styles.module.scss'

export function Ajuda(): JSX.Element {
  return (
    <div className={Styles.divAjuda}>
      <TituloSecao titulo="Precisa de ajuda? Chame um especialista" />
      <p className={Styles.subTitulo}>
        Temos uma equipe especializada pronta para te atender no WhatsApp,
        qualquer coisa é só chamar
      </p>
      <button className={Styles.btnAjuda}>
        <i className="fab fa-whatsapp fa-2x"></i>
        fale com a gente !
      </button>
    </div>
  )
}
