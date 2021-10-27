import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import Link from 'next/link'
import { useState } from 'react'
import { PrevArrow } from '../../components/Arrows'

import Styles from '../../styles/cadastro.module.scss'
import api from '../../services/api'

const regexCpf = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}))$/

const schema = Yup.object().shape({
  nome: Yup.string().required(),
  email: Yup.string().email('Digite um email válido').required(),
  senha: Yup.string().required(),
  celular: Yup.string().length(15),
  cpf: Yup.string()
    .max(14)
    .matches(regexCpf, 'Digite um CPF do tipo XXX.XXX.XXX-XX')
})

function mascaraCPF(cpf) {
  cpf = cpf.replace(/\D/g, '')
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2')
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2')

  return cpf
}

function mascaraCelular(numero) {
  numero = numero.replace(/\D/g, '')

  numero = numero.replace(/^(\d{2})(\d)/g, '($1)$2')

  numero = numero.replace(/(\d)(\d{4})$/, '$1-$2')

  return numero
}

export default function Cadastro(): JSX.Element {
  const [formEnviado, setFormEnviado] = useState<boolean>(false)

  async function onSubmit(dados) {
    try {
      const response = await api.post('/usuario', dados)

      console.log(response)
    } catch (error) {
      console.log(error)
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
          <div className={Styles.formEnviado}>
            <h1>Cadastro criado com sucesso</h1>
            <h2>
              Você será redirecionado para a página de início em 5 segundos
            </h2>
          </div>
        ) : (
          <div className={Styles.content}>
            <h1>Crie sua conta na voit</h1>
            <Formik
              validationSchema={schema}
              initialValues={{
                nome: '',
                celular: '',
                email: '',
                senha: '',
                cpf: ''
              }}
              onSubmit={values => onSubmit(values)}
            >
              {({ values, errors }) => (
                <Form>
                  <label>
                    <h2>Nome</h2>
                    <Field type="text" name="nome" />
                  </label>
                  <label>
                    <h2>E-mail</h2>
                    <Field type="email" name="email" />
                  </label>
                  <label>
                    <h2>Celular</h2>
                    <Field
                      type="phone"
                      name="celular"
                      value={mascaraCelular(values.celular)}
                      maxLength={15}
                    />
                  </label>
                  <label>
                    <h2>Senha</h2>
                    <Field type="password" name="senha" />
                  </label>
                  <label>
                    <h2>CPF</h2>
                    <Field
                      type="text"
                      name="cpf"
                      maxLength={14}
                      value={mascaraCPF(values.cpf)}
                    />
                  </label>
                  <button type="submit">Criar conta</button>
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
