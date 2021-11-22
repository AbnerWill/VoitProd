import Styles from './styles.module.scss'
import Image from 'next/image'

export function Contatos(): JSX.Element {
  return (
    <div className={Styles.contato}>
      <div className="row">
        <div className="col-sm-5">
          <p className={Styles.section1}>
            Descrição informática, lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.{' '}
          </p>
        </div>
        <div className="col-sm-7">
          <form action="">
            <div className="row d-flex">
              <input
                type="text"
                placeholder="Nome"
                className={Styles.inputNome}
              />
              <input
                type="text"
                placeholder="Telefone"
                className={Styles.inputTelefone}
              />
            </div>
            <div className="row d-flex">
              <input
                type="text"
                placeholder="Email"
                className={Styles.inputEmail}
              />
              <input
                type="text"
                placeholder="Assunto"
                className={Styles.inputAssunto}
              />
            </div>
            <div className="row">
              <input
                type="text"
                placeholder="Mensagem"
                className={Styles.inputMensagem}
              />
            </div>
            <div className="row">
              <button className={Styles.botaoEnviar}>Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
