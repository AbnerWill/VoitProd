import { Container, Dropdown, Nav, Navbar, NavItem } from 'react-bootstrap'
import styles from './styles.module.scss'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import api from '../../services/api'

export default function NavbarVoit(): JSX.Element {
  const [request, setRequest] = useState([])
  useEffect(() => {
    async function getCategorias() {
      const { data } = await api.get('/categoria/publica')
      setRequest(data)
    }
    getCategorias()
  }, [])
  const categorias = request.map((item, index) => {
    const { nome } = item
    const subCategoria = item.sub_categoria.map((item, index) => {
      console.log(item)
      return (
        <ul key={index}>
          <span>Subcategoria</span>
          <li>
            <a href="">{item.nome}</a>
          </li>
        </ul>
      )
    })
    return (
      <>
        <span key={index} className={styles.dropBtn}>
          {nome}
          <span className={styles.drop}>
            {subCategoria}
            <div>
              <img src="/img-padrao.svg" alt="" />
            </div>
          </span>
        </span>
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
                    className="fas fa-shopping-basket fa-lg me-2"
                  ></i>
                  <a href="" className={styles.login}>
                    <i aria-hidden className="fas fa-user me-1"></i>
                    entrar
                  </a>
                </li>
              </ul>
            </Nav>
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
          <button className={styles.btnVender}>quero vender</button>
        </div>
      </Container>
    </section>
  )
}
