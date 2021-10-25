import Link from 'next/link'
import { useState } from 'react'
import { PrevArrow } from '../../components/Arrows'

import Styles from '../../styles/cadastro.module.scss'

export default function Cadastro(): JSX.Element {
  const [formEnviado, setFormEnviado] = useState<boolean>(false)

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
        {formEnviado ? (
          <div className={Styles.formEnviado}>
            <h1>Cadastro criado com sucesso</h1>
            <h2>
              Você será redirecionado para a página de início em 5 segundos
            </h2>
          </div>
        ) : (
          <div className={Styles.content}>
            <h1>Crie sua conta na voit</h1>
            <form>
              <label>
                <h2>Nome</h2>
                <input type="text" />
              </label>
              <label>
                <h2>Telefone</h2>
                <input type="phone" />
              </label>
              <label>
                <h2>E-mail</h2>
                <input type="email" />
              </label>
              <label>
                <h2>Senha</h2>
                <input type="password" />
              </label>
              <label>
                <h2>Esporte favorito</h2>
                <input type="text" />
              </label>
              <div>
                <label>
                  <div className={Styles.checkbox}>
                    <input type="checkbox" />
                    <span className={Styles.checkmark}></span>
                  </div>
                  <span>Quero receber msg via whats</span>
                </label>
                <label>
                  <div className={Styles.checkbox}>
                    <input type="checkbox" />
                    <span className={Styles.checkmark}></span>
                  </div>
                  <span>Aceito os termos</span>
                </label>
              </div>
              <button type="submit">Criar conta</button>
            </form>
          </div>
        )}
      </section>
      <footer className={Styles.footer}>
        voit.co Copyright &copy; 2020. All rights reserved.
      </footer>
    </>
  )
}
