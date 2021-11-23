/* eslint-disable camelcase */
import { Container, Dropdown, Nav, Navbar, NavItem } from 'react-bootstrap'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import api from '../../services/api'
import { useListagemProdutos } from '../../contexts/ListagemProdutoContext'

export default function NavbarVoit(): JSX.Element {
  const { setCategoria_id, setSubcategoria_id, setNome } = useListagemProdutos()

  const [request, setRequest] = useState([])

  useEffect(() => {
    async function getCategorias() {
      try {
        const { data } = await api.get('/categoria/publica')
        setRequest(data)
      } catch (error) {
        console.log(error)
      }
    }
    getCategorias()
  }, [])
  const categorias = request.map((categoria, index) => {
    const { nome } = categoria
    const subCategoria = categoria.sub_categoria.map((subcategoria, index) => {
      return (
        <ul key={index}>
          <li>
            <Link
              href={`/produtos/${categoria.categoria_id}/${subcategoria.subcategoria_id}`}
            >
              <a>{subcategoria.nome}</a>
            </Link>
          </li>
        </ul>
      )
    })
    return (
      <>
        <a key={index} className={styles.dropBtn}>
          {nome}
          <span className={styles.drop}>
            {subCategoria}
            <div>
              <img src="/img-padrao.svg" alt="" />
            </div>
          </span>
        </a>
      </>
    )
  })
  return (
    <section className={styles.bordaNav}>
      <div className={styles.limitado}>
        <div className={styles.aproveite}>
          <p>Aproveite!!! Frete Grátis por tempo limitado</p>
        </div>
        <ul className={styles.linksNav}>
          <li>sobre nós</li>
          <li>blog</li>
          <li>f.a.q</li>
          <li>contato</li>
        </ul>
      </div>
      <Navbar variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image
              src="/voit-logo.svg"
              alt="Logo voit"
              width={100}
              height={35}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className="w-100">
              <Nav>
                <ul className={styles.divNav}>
                  <li className={styles.gps}>
                    <Image
                      className={styles.gpsImg}
                      src="/gps.svg"
                      alt="Logo voit"
                      width={25}
                      height={25}
                    />
                    <p>Informe seu endereço para entrega</p>
                  </li>
                  <li className={styles.divBuscar}>
                    <input
                      className={styles.inputBuscar}
                      type="text"
                      placeholder="Me diz o que está procurando..."
                    />
                    <i aria-hidden className="fas fa-search fa-2x"></i>
                  </li>
                  <li className={styles.entrar}>
                    <i
                      aria-hidden
                      className="fas fa-shopping-basket fa-2x me-2"
                    ></i>
                    <Link href="/usuario/login" passHref>
                      <a className={styles.login}>
                        <i aria-hidden className="fas fa-user fa-lg me-4"></i>
                        entrar
                      </a>
                    </Link>
                  </li>
                </ul>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <div className={styles.categorias}>
          {categorias}
          <li>
            <a href="" className={styles.voitPro}>
              voit pro
            </a>
          </li>
          <Link href="/usuario/login" passHref>
            <button className={styles.btnVender}>quero vender</button>
          </Link>
        </div>
      </Container>
    </section>
  )
}
