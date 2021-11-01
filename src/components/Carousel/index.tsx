import Slider from 'react-slick'

import { NextArrow, PrevArrow } from '../../components/Arrows'
import Styles from './styles.module.scss'

import { useState, useEffect } from 'react'
import api from '../../services/api'

export function CarouselProduto(): JSX.Element {
  const [produto, setProduto] = useState('')

  useEffect(() => {
    async function getProduto() {
      const { data } = await api.get('/produto/publica', {
        headers: {
          authorization: 'Bearer 155|XA0ai3qHXqTHf2ppZyD104EkLDPHp3LeBoBWSFuY'
        },
        params: {
          loja_id: '3'
        }
      })
      setProduto(data)
    }
    getProduto()
  }, [])

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
            <img src="/img-padrao.svg" alt="Img" />
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
