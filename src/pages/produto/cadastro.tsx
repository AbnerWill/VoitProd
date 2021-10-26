import Link from 'next/link'

import { PrevArrow } from '../../components/Arrows'
import { Footer } from '../../components/Footer'

import Styles from './cadastro.module.scss'

export default function CadastroProduto(): JSX.Element {
  return (
    <>
      <Link href="/">
        <a className={Styles.arrow}>
          <PrevArrow />
        </a>
      </Link>
      <header className={Styles.header}>
        <img src="/voit-logo.svg" alt="Logo" />
      </header>
      <main className={Styles.container}>
        <div className={Styles.title}>
          <h1>Título</h1>
          <img src="/img-padrao.svg" alt="Imagem" />
        </div>
        <h1 className={Styles.heading}>
          Em que categoria seu produto se encaixa?
        </h1>
        <section className={Styles.content}>
          <ul className={Styles.grid}>
            <li>
              <div>
                <img src="/img-padrao.svg" alt="Img" />
              </div>
              <strong>Categoria</strong>
            </li>
            <li>
              <div>
                <img src="/img-padrao.svg" alt="Img" />
              </div>
              <strong>Categoria</strong>
            </li>
            <li>
              <div>
                <img src="/img-padrao.svg" alt="Img" />
              </div>
              <strong>Categoria</strong>
            </li>
            <li>
              <div>
                <img src="/img-padrao.svg" alt="Img" />
              </div>
              <strong>Categoria</strong>
            </li>
            <li>
              <div>
                <img src="/img-padrao.svg" alt="Img" />
              </div>
              <strong>Categoria</strong>
            </li>
            <li>
              <div>
                <img src="/img-padrao.svg" alt="Img" />
              </div>
              <strong>Categoria</strong>
            </li>
            <li>
              <div>
                <img src="/img-padrao.svg" alt="Img" />
              </div>
              <strong>Categoria</strong>
            </li>
            <li>
              <div>
                <img src="/img-padrao.svg" alt="Img" />
              </div>
              <strong>Categoria</strong>
            </li>
            <li>
              <div>
                <img src="/img-padrao.svg" alt="Img" />
              </div>
              <strong>Categoria</strong>
            </li>
            <li>
              <div>
                <img src="/img-padrao.svg" alt="Img" />
              </div>
              <strong>Categoria</strong>
            </li>
            <li>
              <div>
                <img src="/img-padrao.svg" alt="Img" />
              </div>
              <strong>Categoria</strong>
            </li>
            <li>
              <div>
                <img src="/img-padrao.svg" alt="Img" />
              </div>
              <strong>Categoria</strong>
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  )
}
