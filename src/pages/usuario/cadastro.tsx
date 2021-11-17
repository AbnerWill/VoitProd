import { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'

import { Spinner } from 'react-bootstrap'

import api from '../../services/api'

import { mascaraCelular } from '../../utils/mascaraCelular'
import { mascaraCPF } from '../../utils/mascaraCPF'

import { PrevArrow } from '../../components/Arrows'

import Styles from '../../styles/cadastro.module.scss'
import { FormEnviado } from '../../containers/CadastroUsuario/PaginaRedirecionar'

interface DadosCadastroUsuario {
  nome: string
  email: string
  senha: string
  cpf: string
  celular: string
}

const regexCpf = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/

const schema = Yup.object().shape({
  nome: Yup.string().required('Este campo é obrigatório'),
  email: Yup.string()
    .email('Digite um email válido')
    .required('Este campo é obrigatório'),
  senha: Yup.string()
    .min(8, 'Digite uma senha de no mínimo 8 caracteres')
    .required('Este campo é obrigatório'),
  cpf: Yup.string()
    .max(14)
    .matches(regexCpf, 'Digite um CPF do tipo XXX.XXX.XXX-XX'),
  celular: Yup.string().min(13, 'Digite o numero completo')
})

export default function Cadastro(): JSX.Element {
  const [formEnviado, setFormEnviado] = useState<boolean>(false)
  const [mensagemErro, setMensagemErro] = useState<string[]>([''])
  const [loading, setLoading] = useState<boolean>(false)

  async function onSubmit(dados: DadosCadastroUsuario) {
    try {
      setMensagemErro([''])
      setLoading(true)
      const response = await api.post('/usuario', dados)
      setLoading(false)

      if (response.status === 201) {
        setFormEnviado(true)
      }
    } catch (error) {
      setLoading(false)
      setMensagemErro([
        ...mensagemErro,
        ...error.response.data.cpf,
        ...error.response.data.email,
        ...error.response.data.celular,
        ...error.response.data.senha,
        ...error.response.data.nome
      ])
      console.log(mensagemErro)
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
        {formEnviado ? (
          <FormEnviado />
        ) : (
          <div className={Styles.content}>
            <h1>Crie sua conta na voit</h1>
            <Formik
              validationSchema={schema}
              validateOnBlur
              initialValues={{
                nome: '',
                celular: '',
                email: '',
                senha: '',
                cpf: ''
              }}
              onSubmit={values => onSubmit(values)}
            >
              {({ values, errors, touched, dirty }) => (
                <Form>
                  <label>
                    <h2>Nome*</h2>
                    <Field
                      type="text"
                      name="nome"
                      className={
                        errors.nome && touched.nome && dirty ? Styles.erro : ''
                      }
                    />
                    {dirty && errors.nome && touched.nome && (
                      <strong>{errors.nome}</strong>
                    )}
                  </label>
                  <label>
                    <h2>E-mail*</h2>
                    <Field
                      type="email"
                      name="email"
                      className={
                        errors.email && touched.email && dirty
                          ? Styles.erro
                          : ''
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
                        errors.senha && touched.senha && dirty
                          ? Styles.erro
                          : ''
                      }
                    />
                    {dirty && errors.senha && touched.senha && (
                      <strong>{errors.senha}</strong>
                    )}
                  </label>
                  <label>
                    <h2>CPF</h2>
                    <Field
                      type="text"
                      name="cpf"
                      maxLength={14}
                      value={mascaraCPF(values.cpf)}
                      className={
                        errors.cpf && touched.cpf && dirty ? Styles.erro : ''
                      }
                    />
                    {dirty && errors.cpf && touched.cpf && (
                      <strong>{errors.cpf}</strong>
                    )}
                  </label>
                  <label>
                    <h2>Celular</h2>
                    <Field
                      type="phone"
                      name="celular"
                      value={mascaraCelular(values.celular)}
                      maxLength={14}
                      className={
                        errors.celular && touched.celular && dirty
                          ? Styles.erro
                          : ''
                      }
                    />
                    {dirty && errors.celular && touched.celular && (
                      <strong>{errors.celular}</strong>
                    )}
                  </label>
                  {mensagemErro &&
                    mensagemErro.map((msg, index) => (
                      <div className={Styles.mensagemErro} key={index}>
                        <strong>{msg}</strong>
                      </div>
                    ))}
                  <button type="submit">
                    {loading ? (
                      <Spinner animation="border">
                        <span className="visually-hidden">Loading...</span>
                      </Spinner>
                    ) : (
                      <span>Criar conta</span>
                    )}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </section>
      <footer className={Styles.footer}>
        voit.co Copyright &copy; 2020. All rights reserved.
      </footer>
    </>
  )
}
