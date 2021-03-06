import { Container } from 'react-bootstrap'
import Slider from 'react-slick'
import { NextArrow, PrevArrow } from '../Arrows'
import { StarredItemCard } from '../StarredProductItemCard'
import Styles from './styles.module.scss'

export function NearestProducts(): JSX.Element {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <Container>
      <section className={Styles.nearestProductsSection}>
        <h1>Produtos Próximos de Você</h1>
        <h2>
          Equipamentos novos ou usados, aqui você encontra com preço justo
        </h2>
        <div className={Styles.carouselContainer}>
          <Slider {...settings}>
            <StarredItemCard />
            <StarredItemCard />
            <StarredItemCard />
            <StarredItemCard />
            <StarredItemCard />
            <StarredItemCard />
            <StarredItemCard />
            <StarredItemCard />
          </Slider>
        </div>
      </section>
    </Container>
  )
}
