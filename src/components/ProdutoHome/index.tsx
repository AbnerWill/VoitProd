import { useEffect, useState } from 'react'
import { Button } from '../Button/index'
import styles from './styles.module.scss'
import Link from 'next/link'

export function ProdutoHome(props): JSX.Element {
  const [produto, setProduto] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/api/caracteristicas')
      .then(r => r.json())
      .then(setProduto)
  }, [])

  function renderizarResposta(index) {
    if (produto) {
      return produto.caracteristicas[index]
    }
  }

  return (
    <div className="d-flex flex-md-row flex-column">
      <div className="col-2 d-none d-md-block"></div>
      <div className={'col-12 col-md-5'}>
        <p className={styles.produtoTitulo}>{renderizarResposta(0)}</p>
        <p className={styles.produtoDescricao}>{renderizarResposta(1)}</p>
        <p className={styles.produtoCheck}>
          <img src="/check.svg" alt="imagem produto" width={25} height={25} />
          {renderizarResposta(2)}
        </p>
        <p className={styles.produtoCheck}>
          <img src="/check.svg" alt="imagem produto" width={25} height={25} />
          {renderizarResposta(3)}
        </p>
        <p className={styles.produtoCheck}>
          <img src="/check.svg" alt="imagem produto" width={25} height={25} />
          {renderizarResposta(4)}
        </p>
        <span className={styles.divPrecoProduto}>
          <span className={styles.produtoPreco}>{`R$ ${renderizarResposta(
            5
          )}`}</span>
          <Link href="/produto" passHref>
            <a href="" className={styles.button}>
              compre agora
            </a>
          </Link>
        </span>
      </div>
      <div
        className={
          'col-12 col-md-5 d-flex justify-content-center align-items-center mt-3 mt-lg-0'
        }
      >
        <div className={styles.divImgProduto}>
          <img
            src="/img-padrao.svg"
            alt="imagem produto"
            width={170}
            height={170}
          />
        </div>
      </div>
    </div>
  )
}
