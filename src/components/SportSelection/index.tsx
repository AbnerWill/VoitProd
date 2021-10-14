import Slider from 'react-slick'
import { NextArrow, PrevArrow } from '../Arrows'
import { StarredItemCard } from '../StarredProductItemCard'
import Styles from './styles.module.scss'

export function SportSelection(): JSX.Element {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  }

  return (
    <section className={Styles.sportSelectionSection}>
      <h1>Seleção do Esporte</h1>
      <h2>Equipamentos novos ou usados, aqui você encontra com preço justo</h2>
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
  )
}
