import { Carousel } from 'react-bootstrap'
import Styles from './styles.module.scss'

export function CarouselProduto(): JSX.Element {
  return (
    <div className={Styles.bgCarousel}>
      <Carousel>
        <Carousel.Item>
          <img
            className={Styles.imgCarousel}
            src="/img-padrao.svg"
            alt="Imagem produto"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={Styles.imgCarousel}
            src="/img-padrao.svg"
            alt="Imagem produto"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={Styles.imgCarousel}
            src="/img-padrao.svg"
            alt="Imagem produto"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
