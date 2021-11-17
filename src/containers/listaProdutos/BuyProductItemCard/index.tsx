import Styles from './styles.module.scss'

interface ProductItemCardProps {
  nome: string
  valor: number
  foto: string
}

export function ProductItemCard({
  nome,
  valor,
  foto
}: ProductItemCardProps): JSX.Element {
  return (
    <div className={Styles.container}>
      <div className={Styles.imgContainer}>
        <img src={foto} alt="Imagem do produto" />
      </div>
      <div className={Styles.content}>
        <h1>{nome}</h1>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(valor)}
        </strong>
        <span>
          em até 12x{' '}
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(valor / 12)}
        </span>
        <button type="button">
          Adcionar produto <img src="/buycartIcon.svg" alt="Icone de comprar" />
        </button>
      </div>
    </div>
  )
}
