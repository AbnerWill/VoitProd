import Styles from './styles.module.scss'

export function CartProductItemCard(): JSX.Element {
  return (
    <div className={Styles.productContainer}>
      <header>
        <div className={Styles.productImage}>
          <img src="/img-padrao.svg" alt="Default" />
        </div>
        <div className={Styles.itemDescription}>
          <h1>Tênis nike Downshifter 11 Masc. com varias cores</h1>
          <h2>
            Vendido e entregue por <strong>VOIT</strong>
          </h2>
          <span>
            <strong>Tamanho: </strong> 40
          </span>
          <span>
            <strong>Cor: </strong> Branco + Preto
          </span>
          <span>REF. 3324</span>
        </div>
        <button type="button" className={Styles.deleteButton}>
          <img src="/delete.svg" alt="Botão de deletar item" />
        </button>
      </header>
      <footer>
        <div className={Styles.itemQuantity}>
          <strong>Quantidade: </strong>
          <button>
            <img src="/minus.svg" alt="Sinal de menos" />
          </button>
          <div>1</div>
          <button>
            <img src="/plus.svg" alt="Sinal de mais" />
          </button>
        </div>
        <span className={Styles.productPrice}>
          R$450,00 <strong>R$220,00</strong>
        </span>
      </footer>
    </div>
  )
}
