import { Container } from 'react-bootstrap'
import Styles from './styles.module.scss'
import Image from 'next/image'
import { TituloSecao } from '../TituloSecao'

export function SobreNos(): JSX.Element {
  return (
    <div className={Styles.divSobre}>
      <Container>
        <div className="row">
          <div className="col-4">
            <div className={Styles.divImgSobre}>
              <Image
                src="/img-padrao.svg"
                alt="imagem voit"
                height={180}
                width={180}
              />
            </div>
          </div>
          <div className="col-8">
            <div className={Styles.divTitulo}>
              <TituloSecao titulo="Sobre Nós" />
            </div>
            <div className="d-flex">
              <p className={Styles.textoSobre}>
                Acreditamos que a experiência do nosso cliente deve ser única e
                exclusiva em cada detalhe e que para se alcançar isso a
                interação humana é fundamental. E é exatamente por isso que nós
                fomentamos e incentivamos a troca. A troca de informação, a
                troca de conteúdo, a troca de dicas e de experiências para
                evoluirmos juntos!
              </p>
              <p className={Styles.textoSobre}>
                Assim cada VOITER perceberá, ao longo de sua jornada conosco,
                que comprar e vender passa ser o resultado natural dessa
                comunidade que ele está inserido, e que nossa relação é mais do
                que comercial e sim, de evolução, de desenvolvimento e parceria.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
