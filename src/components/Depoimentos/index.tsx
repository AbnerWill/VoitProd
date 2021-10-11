import Styles from './styles.module.scss'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import { TituloSecao } from '../TituloSecao'

export function Depoimentos(): JSX.Element {
  return (
    <div className={Styles.bgDepoimentos}>
      <Container>
        <div className="d-flex justify-content-center align-items-center">
          <TituloSecao titulo="Depoimentos" />
        </div>
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div>
              <p>
                Although this is well intentioned and the goal certainly is to
                reduce the quantity of these bothersome thoughts, the technique
                is inherently flawed.
              </p>
            </div>
            <div className="d-flex mb-3">
              <Image
                src="/user.svg"
                alt="imagem usuário"
                width={75}
                height={75}
              />
              <div className="d-flex flex-column justify-content-center">
                <span className={Styles.nome}>Nome Sobrenome</span>
                <span className={Styles.funcao}>função</span>
              </div>
            </div>
            <div>
              <Image
                src="/estrelas.svg"
                alt="imagem usuário"
                width={150}
                height={30}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div>
              <p>
                Although this is well intentioned and the goal certainly is to
                reduce the quantity of these bothersome thoughts, the technique
                is inherently flawed.
              </p>
            </div>
            <div className="d-flex mb-3">
              <Image
                src="/user.svg"
                alt="imagem usuário"
                width={75}
                height={75}
              />
              <div className="d-flex flex-column justify-content-center">
                <span className={Styles.nome}>Nome Sobrenome</span>
                <span className={Styles.funcao}>função</span>
              </div>
            </div>
            <div>
              <Image
                src="/estrelas.svg"
                alt="imagem usuário"
                width={150}
                height={30}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div>
              <p>
                Although this is well intentioned and the goal certainly is to
                reduce the quantity of these bothersome thoughts, the technique
                is inherently flawed.
              </p>
            </div>
            <div className="d-flex mb-3">
              <Image
                src="/user.svg"
                alt="imagem usuário"
                width={75}
                height={75}
              />
              <div className="d-flex flex-column justify-content-center">
                <span className={Styles.nome}>Nome Sobrenome</span>
                <span className={Styles.funcao}>função</span>
              </div>
            </div>
            <div>
              <Image
                src="/estrelas.svg"
                alt="imagem usuário"
                width={150}
                height={30}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
