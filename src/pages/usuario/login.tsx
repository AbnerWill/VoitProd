import { setCookie } from 'nookies'
import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import Router from 'next/router'

import { Spinner } from 'react-bootstrap'

import { PrevArrow } from '../../components/Arrows'
import { BotaoLoginFacebook } from '../../containers/login/BotãoLoginFacebook'
import { BotaoLoginGoogle } from '../../containers/login/BotãoLoginGoogle'

import Styles from '../../styles/login.module.scss'
import api from '../../services/api'
import { useState } from 'react'
import { ModalEsqueciSenha } from '../../containers/CadastroUsuario/ModalEsqueciSenha'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um email válido')
    .required('Este campo é obrigatório'),
  senha: Yup.string().required('Este campo é obrigatório')
})

export default function Login(): JSX.Element {
  const [mensagemErro, setMensagemErro] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const [mostrarSenha, setMostrarSenha] = useState<boolean>(false)
  const [abrirModal, setAbrirModal] = useState(false)

  const toggleMostrarSenha = () => setMostrarSenha(!mostrarSenha)

  async function onSubmit(dados) {
    try {
      setMensagemErro('')
      setLoading(true)
      const { data } = await api.post('/login', dados)
      setLoading(false)

      setCookie(null, 'access-token', data?.access_token, {
        path: '/',
        maxAge: 60 * 60 * 24
      })

      Router.push('/pedidos')
    } catch (error) {
      setLoading(false)
      setMensagemErro(error.response.data.mensagem)
    }
  }

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
        <Formik
          validationSchema={schema}
          validateOnBlur
          initialValues={{
            email: '',
            senha: ''
          }}
          onSubmit={values => onSubmit(values)}
        >
          {({ errors, touched, dirty }) => (
            <Form>
              <label>
                <h2>E-mail*</h2>
                <Field
                  type="email"
                  name="email"
                  placeholder="Digite seu email"
                  className={
                    errors.email && touched.email && dirty ? Styles.erro : ''
                  }
                />
                {dirty && errors.email && touched.email && (
                  <strong>{errors.email}</strong>
                )}
              </label>
              <label>
                <h2>Senha*</h2>
                <Field
                  type={mostrarSenha ? 'text' : 'password'}
                  name="senha"
                  placeholder="Digite sua senha"
                  className={
                    errors.senha && touched.senha && dirty ? Styles.erro : ''
                  }
                />
                <button
                  className={Styles.mostrarSenha}
                  type="button"
                  onClick={toggleMostrarSenha}
                >
                  {mostrarSenha ? (
                    <img src="/escondersenha.svg" alt="Esconder senha" />
                  ) : (
                    <img src="/mostrarsenha.svg" alt="Mostrar senha" />
                  )}
                </button>
                {dirty && errors.senha && touched.senha && (
                  <strong>{errors.senha}</strong>
                )}
              </label>
              <a
                className={Styles.esqueciSenha}
                onClick={() => setAbrirModal(true)}
              >
                Esqueceu sua senha?
              </a>
              {mensagemErro && (
                <div className={Styles.mensagemErro}>
                  <strong>{mensagemErro}</strong>
                </div>
              )}
              <button type="submit" className={Styles.submitButton}>
                {loading ? (
                  <Spinner animation="border">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                ) : (
                  <span>Entrar</span>
                )}
              </button>
            </Form>
          )}
        </Formik>
        <span>ou</span>
        <Link href="/usuario/cadastro">
          <button>Criar conta com o e-mail</button>
        </Link>
      </section>
      <footer className={Styles.footer}>
        voit.co Copyright &copy; 2020. All rights reserved.
      </footer>

      <ModalEsqueciSenha
        onHide={() => setAbrirModal(false)}
        show={abrirModal}
      />
    </>
  )
}
