import { CustomCheckbox } from '../CustomCheckbox'
import Styles from './styles.module.scss'

export function ProductsFilter(): JSX.Element {
  return (
    <aside className={Styles.container}>
      <div className={Styles.filtersSelected}>
        <h1>Filtros:</h1>
        <div>
          <span>Tênis</span>
          <span className={Styles.separator}></span>
          <button type="button">&#10006;</button>
        </div>
        <div>
          <span>Masculino</span>
          <span className={Styles.separator}></span>
          <button type="button">&#10006;</button>
        </div>
        <div>
          <span>Leve</span>
          <span className={Styles.separator}></span>
          <button type="button">&#10006;</button>
        </div>
      </div>
      <div>
        <h1>Gênero:</h1>
        <CustomCheckbox name="Masculino" />
        <CustomCheckbox name="Feminino" />
        <CustomCheckbox name="Infantil" />
      </div>
      <div>
        <h1>Característica:</h1>
        <CustomCheckbox name="Absorção" />
        <CustomCheckbox name="Impacto" />
        <CustomCheckbox name="Leve" />
      </div>
      <div>
        <h1>Marcas:</h1>
        <CustomCheckbox name="Mizuno" />
        <CustomCheckbox name="Nike" />
        <CustomCheckbox name="Adidas" />
      </div>
      <div>
        <h1>Preço:</h1>
        <CustomCheckbox name="R$0 ---- R$500" />
        <CustomCheckbox name="R$500 ---- R$1500" />
        <CustomCheckbox name="+ de R$1500" />
      </div>
      <div>
        <h1>Tags:</h1>
        <CustomCheckbox name="Todas" />
        <CustomCheckbox name="Descontaaaço" />
        <CustomCheckbox name="Usado" />
      </div>
      <div>
        <h1>Cor:</h1>
        <div className={Styles.grid}>
          <CustomCheckbox name="Preto" />
          <CustomCheckbox name="Branco" />
          <CustomCheckbox name="Azul" />
          <CustomCheckbox name="Rosa" />
          <CustomCheckbox name="Amarelo" />
          <CustomCheckbox name="Vermelho" />
        </div>
      </div>
      <div>
        <h1>Material:</h1>
        <div className={Styles.grid}>
          <CustomCheckbox name="Tecido" />
          <CustomCheckbox name="Couro" />
          <CustomCheckbox name="Camurça" />
          <CustomCheckbox name="Lona" />
          <CustomCheckbox name="Nobuk" />
          <CustomCheckbox name="Verniz" />
        </div>
      </div>
    </aside>
  )
}
