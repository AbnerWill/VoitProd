import Styles from './styles.module.scss'

export function ProductItemCard(): JSX.Element {
  return (
    <div className={Styles.container}>
      <div className={Styles.imgContainer}>
        <img src="img-padrao.svg" alt="img" />
      </div>
      <div className={Styles.content}>
        <h1>Nome do produto</h1>
        <strong>R$290</strong>
        <span>em até 12x 29,00</span>
        <button type="button">
          Adcionar produto <img src="buycartIcon.svg" alt="Icone de comprar" />
        </button>
      </div>
    </div>
  )
}
