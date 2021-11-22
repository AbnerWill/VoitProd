import Styles from './styles.module.scss'
import Image from 'next/image'

export function Titulospaginas(): JSX.Element {
  return (
    <div className={Styles.destaque}>
      <div className="d-flex">
        <h3 className={Styles.produtodestaque}>Título</h3>
        <div className={Styles.imagem}>
          <Image
            src="/img-padrao.svg"
            alt="imagem produto"
            height={100}
            width={150}
          />
        </div>
      </div>
    </div>
  )
}
