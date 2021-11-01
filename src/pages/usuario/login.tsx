import { Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'

import { PrevArrow } from '../../components/Arrows'
import { BotaoLoginFacebook } from '../../containers/login/BotãoLoginFacebook'
import { BotaoLoginGoogle } from '../../containers/login/BotãoLoginGoogle'

import Styles from '../../styles/login.module.scss'
import api from '../../services/api'

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um email válido')
    .required('Este campo é obrigatório'),
  senha: Yup.string().required('Este campo é obrigatório')
})

export default function Login(): JSX.Element {
  async function onSubmit(dados) {
    try {
      const { data } = await api.post('/login', {
        data: dados
      })
      console.log(data)
    } catch (error) {
      console.log(error.response)
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
                  type="password"
                  name="senha"
                  className={
                    errors.senha && touched.senha && dirty ? Styles.erro : ''
                  }
                />
                {dirty && errors.senha && touched.senha && (
                  <strong>{errors.senha}</strong>
                )}
              </label>
              <button type="submit">Entrar</button>
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
    </>
  )
}
