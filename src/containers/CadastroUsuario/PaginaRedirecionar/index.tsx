import Router from 'next/router'
import { useEffect } from 'react'
import Styles from './styles.module.scss'

export function FormEnviado(): JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      Router.push('/usuario/login')
    }, 5000)
  }, [])

  return (
    <div className={Styles.formEnviado}>
      <h1>Cadastro criado com sucesso</h1>
      <h2>Você será redirecionado para a página de início em 5 segundos</h2>
    </div>
  )
}
