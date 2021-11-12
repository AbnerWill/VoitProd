import { Container } from 'react-bootstrap'
import Styles from './styles.module.scss'

export function PergunteVendedor(): JSX.Element {
  return (
    <div>
      <Container>
        <hr className={Styles.separador} />
        <div className="row">
          <div className="col-12 col-md-6">
            <p className={Styles.titulo}>Pergunte ao vendedor</p>
            <div className="d-flex">
              <input
                type="text"
                placeholder="Digite a sua pergunta"
                className={Styles.inputPergunte}
              />
              <button className={Styles.btnPergunte}>enviar</button>
            </div>
            <Container>
              <p className={Styles.ultimasPerguntas}>Últimas perguntas</p>
            </Container>
            <Container>
              <div className="d-flex align-items-center">
                <img
                  src="/img-pergunte-vendedor.svg"
                  alt="imagem usuário"
                  width={50}
                  height={50}
                />
                <span className={Styles.pergunta}>
                  Esse tênis tem quanto tempo de uso?
                </span>
              </div>
              <Container>
                <div className="d-flex align-items-center">
                  <img
                    src="/linha-pergunte.svg"
                    alt="linha"
                    height={12}
                    width={40}
                  />
                  <span className={Styles.resposta}>
                    Está praticamente novo, pouquíssimo sinal de uso
                  </span>
                </div>
              </Container>
            </Container>
          </div>
          <div className="col-12 col-md-6 text-center">
            <p className={Styles.titulo}>Infos de quem vende</p>
            <hr className={Styles.separador2} />
            <div className="d-flex justify-content-around align-items-center">
              <div className="d-flex">
                <img
                  src="/img-pergunte-vendedor.svg"
                  alt="imagem usuário"
                  width={50}
                  height={50}
                />
                <div className="d-flex flex-column justify-content-center">
                  <span className={Styles.nomeLoja}>Nome da Loja</span>
                  <span className={Styles.cidade}>Ponta Grossa PR</span>
                </div>
              </div>
              <div className="d-flex align-items-center jusity-content-end">
                <button className={Styles.btnSeguir}>seguir loja</button>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-around mt-5">
              <div className="d-flex flex-column  justify-content-center align-items-center">
                <span className={Styles.subTitulo}>Avaliações</span>
                <img
                  src="/estrelas.svg"
                  alt="avaliação"
                  width={100}
                  height={20}
                />
              </div>
              <div className="d-flex flex-column  justify-content-center align-items-center">
                <span className={Styles.subTitulo}>Vendidos</span>
                <span className={Styles.subTituloDescricao}>34</span>
              </div>
              <div className="d-flex flex-column  justify-content-center align-items-center">
                <span className={Styles.subTitulo}>Aqui desde</span>
                <span className={Styles.subTituloDescricao}>Mai/2020</span>
              </div>
            </div>
          </div>
        </div>
        <hr className={Styles.separador} />
      </Container>
    </div>
  )
}
