import Styles from './styles.module.scss'

export function MostSearchedWords(): JSX.Element {
  return (
    <section className={Styles.mostSearchedWordsSection}>
      <h1>Palavras mais buscadas</h1>
      <div>
        <div>
          <span>bicicleta aro 29</span>
          <span>all star feminino</span>
          <span>promoções</span>
          <span>tênis nike</span>
          <span>óculos oakley juliet</span>
        </div>
        <div>
          <span>tênis feminino</span>
          <span>cupom de desconto</span>
          <span>tênis masculino</span>
          <span>all star branco</span>
          <span>roupa para ciclismo feminina</span>
        </div>
        <div>
          <span>roupa para ciclismo masculina</span>
          <span>bota caterpillar</span>
          <span>tapete de yoga</span>
          <span>produtos do corinthians</span>
          <span>tênis sem cadarço</span>
        </div>
        <div>
          <span>conjunto de moletom feminino</span>
          <span>tênis nike em promoção</span>
          <span>mountain bike</span>
          <span>whey protein isolado</span>
          <span>jaqueta corta vento</span>
        </div>
      </div>
    </section>
  )
}
