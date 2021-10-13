import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import styles from './styles.module.scss'
import Image from 'next/image'

export default function NavbarVoit(): JSX.Element {
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
                  <i className="fas fa-search fa-lg"></i>
                </li>
                <li className={styles.entrar}>
                  <i className="fas fa-shopping-basket me-2"></i>
                  <a href="" className={styles.login}>
                    <i className="fas fa-user me-1"></i>
                    entrar
                  </a>
                </li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Dropdown>
          <div className={styles.categorias}>
            <Dropdown.Toggle className={styles.dropBtn} id="dropdown-basic">
              basquete
            </Dropdown.Toggle>
            <Dropdown.Toggle className={styles.dropBtn} id="dropdown-basic">
              bike
            </Dropdown.Toggle>
            <Dropdown.Toggle className={styles.dropBtn} id="dropdown-basic">
              corrida
            </Dropdown.Toggle>
            <Dropdown.Toggle className={styles.dropBtn} id="dropdown-basic">
              futebol
            </Dropdown.Toggle>
            <Dropdown.Toggle className={styles.dropBtn} id="dropdown-basic">
              handebol
            </Dropdown.Toggle>
            <Dropdown.Toggle className={styles.dropBtn} id="dropdown-basic">
              lutas
            </Dropdown.Toggle>
            <Dropdown.Toggle className={styles.dropBtn} id="dropdown-basic">
              fitness
            </Dropdown.Toggle>
            <Dropdown.Toggle className={styles.dropBtn} id="dropdown-basic">
              pesca
            </Dropdown.Toggle>
            <Dropdown.Toggle className={styles.dropBtn} id="dropdown-basic">
              outros
            </Dropdown.Toggle>
            <li>
              <a href="" className={styles.voitPro}>
                voit pro
              </a>
            </li>
            <button className={styles.btnVender}>quero vender</button>
          </div>
          <Dropdown.Menu>
            <div className="row">
              <div className="col-2 text-center">
                <Dropdown.Item href="#/action-1">Subcategoria</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-2">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-3">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-4">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-5">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-6">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-7">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-8">
                  Produto
                </Dropdown.Item>
              </div>
              <div className="col-2 text-center">
                <Dropdown.Item href="#/action-1">Subcategoria</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-2">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-3">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-4">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-5">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-6">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-7">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-8">
                  Produto
                </Dropdown.Item>
              </div>
              <div className="col-2 text-center">
                <Dropdown.Item href="#/action-1">Subcategoria</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-2">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-3">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-4">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-5">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-6">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-7">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-8">
                  Produto
                </Dropdown.Item>
              </div>
              <div className="col-2 text-center">
                <Dropdown.Item href="#/action-1">Subcategoria</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-2">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-3">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-4">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-5">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-6">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-7">
                  Produto
                </Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-8">
                  Produto
                </Dropdown.Item>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <div className={styles.dropImg}>
                  <Image
                    src="/img-padrao.svg"
                    alt="Logo voit"
                    width={170}
                    height={170}
                  />
                </div>
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </section>
  )
}
