import Link from 'next/link'

import { PrevArrow } from '../../components/Arrows'
import { BotaoLoginFacebook } from '../../containers/login/BotãoLoginFacebook'
import { BotaoLoginGoogle } from '../../containers/login/BotãoLoginGoogle'

import Styles from '../../styles/login.module.scss'

export default function Login(): JSX.Element {
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
      <section className={Styles.container}>
        <h1>Faça seu login</h1>
        <BotaoLoginGoogle />
        <BotaoLoginFacebook />
        <span>ou</span>
        <button>Criar conta com o e-mail</button>
      </section>
      <footer className={Styles.footer}>
        voit.co Copyright &copy; 2020. All rights reserved.
      </footer>
    </>
  )
}
