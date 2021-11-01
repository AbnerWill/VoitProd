import Styles from './styles.module.scss'

export function SearchCEP(): JSX.Element {
  return (
    <div className={Styles.container}>
      <h1>Consulte o prazo de entrega</h1>
      <div>
        <input type="text" placeholder="Insira o CEP" />
        <button>Consultar</button>
      </div>
    </div>
  )
}
