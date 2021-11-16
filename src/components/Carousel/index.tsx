import { useState } from 'react'
import Slider from 'react-slick'

import { NextArrow, PrevArrow } from '../../components/Arrows'
import Styles from './styles.module.scss'

export function CarouselProduto(props): JSX.Element {
  const [image, setImage] = useState('/img-padrao.svg')
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow insetRight />,
    prevArrow: <PrevArrow insetLeft />
  }
  const imagens = [
    '/img-padrao.svg',
    '/estrelas.svg',
    '/bolsa-cinza.svg',
    '/gps.svg'
  ]

  function renderizarImagens() {
    const fotos = imagens.map((item, index) => {
      return (
        <div key={index}>
          <div className={Styles.imagensCarrossel}>
            <img src={item} alt="Img" onClick={() => setImage(item)} />
          </div>
        </div>
      )
    })
    return fotos
  }
  return (
    <>
      <section className={Styles.resumoAnuncio}>
        <div className={Styles.imagens}>
          <div className={Styles.imagemGrande}>
            <img src={image} alt="Img" />
          </div>
          <div className={Styles.carrossel}>
            <Slider {...settings}>{renderizarImagens()}</Slider>
          </div>
        </div>
      </section>
    </>
  )
}
