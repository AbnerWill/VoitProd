import Styles from './styles.module.scss'
import Image from 'next/image'

export function Historia(): JSX.Element {
  return (
    <div>
      <div className={Styles.historiatitulo}>
        <div className="row">
          <div className={Styles.titulohistoria}>
            <h2>Sobre a história</h2>
          </div>
        </div>
      </div>
      <div className={Styles.sobrenos}>
        <div className="row">
          <div className="col-sm-4">
            <Image
              src="/img-padrao.svg"
              alt="imagem produto"
              className={Styles.imagemhistoria}
              height={200}
              width={400}
            />
          </div>
          <div className="col-sm-8">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
      <div className={Styles.quatroimagens}>
        <div className="row">
          <div className="col-sm-3">
            <Image
              src="/img-padrao.svg"
              alt="imagem produto"
              className={Styles.imagemsection3}
              height={250}
              width={300}
            />
          </div>
          <div className="col-sm-3">
            <Image
              src="/img-padrao.svg"
              alt="imagem produto"
              className={Styles.imagemsection3}
              height={250}
              width={300}
            />
          </div>
          <div className="col-sm-3">
            <Image
              src="/img-padrao.svg"
              alt="imagem produto"
              className={Styles.imagemsection3}
              height={250}
              width={300}
            />
          </div>
          <div className="col-sm-3">
            <Image
              src="/img-padrao.svg"
              alt="imagem produto"
              className={Styles.imagemsection3}
              height={250}
              width={300}
            />
          </div>
        </div>
      </div>
      <div className={Styles.section4}>
        <div className="row">
          <div className="col-sm-4">
            <p>
              It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with
              desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry’s standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
          <div className="col-sm-8">
            <div className={Styles.colunasection4}>
              <Image
                src="/img-padrao.svg"
                alt="imagem produto"
                className={Styles.imagemsection4}
                height={400}
                width={800}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
