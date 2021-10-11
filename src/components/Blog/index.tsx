import Styles from './styles.module.scss'
import Image from 'next/image'
import { Container } from 'react-bootstrap'

export function Blog(): JSX.Element {
  return (
    <div className={Styles.divBlog}>
      <div className="d-flex justify-content-center">
        <p className={Styles.blogTitulo}>
          Veja dicas e tutoriais em nosso blog
        </p>
      </div>
      <Container>
        <div className="row">
          <div className="col-6">
            <div className={Styles.primeiroPost}>
              <Image
                src="/img-padrao.svg"
                alt="imagem blog"
                width={150}
                height={150}
              />
              <p className={Styles.dataPrimeiroPost}>jul . 15</p>
              <p className={Styles.tituloPrimeiroPost}>
                Título da notícia, tutorial ou dicas
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className={Styles.divImgBlog}>
              <Image
                src="/img-padrao.svg"
                alt="imagem blog"
                width={150}
                height={150}
              />
            </div>
            <div className="p-3">
              <p className={Styles.dataOutros}>jul . 15</p>
              <p className={Styles.tituloOutros}>
                Título da notícia, tutorial ou dicas
              </p>
            </div>
          </div>
          <div className="col-3">
            <div className={Styles.divImgBlog}>
              <Image
                src="/img-padrao.svg"
                alt="imagem blog"
                width={150}
                height={150}
              />
            </div>
            <div className="p-3">
              <p className={Styles.dataOutros}>jul . 15</p>
              <p className={Styles.tituloOutros}>
                Título da notícia, tutorial ou dicas
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
