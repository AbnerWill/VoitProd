import Styles from './styles.module.scss'

export function StarredItemCard(): JSX.Element {
  return (
    <div className={Styles.itemCardContainer}>
      <div>
        <img src="/img-padrao.svg" alt="Imagem padrão" />
      </div>
      <h1 className={Styles.cardName}>Tenis Nike SB553</h1>
      <strong>R$290</strong>
      <img src="/estrelas.svg" alt="Imagens de estrelas" />
    </div>
  )
}
