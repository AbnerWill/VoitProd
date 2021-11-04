import Slider from 'react-slick'

import { NextArrow, PrevArrow } from '../../components/Arrows'
import Styles from './styles.module.scss'

export function CarouselProduto(props): JSX.Element {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow insetRight />,
    prevArrow: <PrevArrow insetLeft />
  }
  return (
    <>
      <section className={Styles.resumoAnuncio}>
        <div className={Styles.imagens}>
          <div className={Styles.imagemGrande}>
            <img src={props.foto} alt="Img" />
          </div>
          <div className={Styles.carrossel}>
            <Slider {...settings}>
              <div>
                <div className={Styles.imagensCarrossel}>
                  <img src="/img-padrao.svg" alt="Img" />
                </div>
              </div>
              <div>
                <div className={Styles.imagensCarrossel}>
                  <img src="/img-padrao.svg" alt="Img" />
                </div>
              </div>
              <div>
                <div className={Styles.imagensCarrossel}>
                  <img src="/img-padrao.svg" alt="Img" />
                </div>
              </div>
              <div>
                <div className={Styles.imagensCarrossel}>
                  <img src="/img-padrao.svg" alt="Img" />
                </div>
              </div>
              <div>
                <div className={Styles.imagensCarrossel}>
                  <img src="/img-padrao.svg" alt="Img" />
                </div>
              </div>
              <div>
                <div className={Styles.imagensCarrossel}>
                  <img src="/img-padrao.svg" alt="Img" />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}
