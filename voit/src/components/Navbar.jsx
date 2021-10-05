import { Container, Dropdown, Nav, Navbar  } from 'react-bootstrap'
import styles from '../styles/Navbar.module.css'
import Image from 'next/image';

export default function NavbarVoit() {
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
      <Navbar variant="light">
        <Container>
        <Nav className="justify-content-end">
          <ul className={styles.divNav}>
            <li>
              <Navbar.Brand href="/"><Image src="/voit-logo.svg" alt="Logo voit" width={100} height={35} /></Navbar.Brand>
            </li>
            <li className={styles.gps}>
              <Image className={styles.gpsImg} src="/gps.svg" alt="Logo voit" width={25} height={25} /><p>Informe seu endereço para entrega</p>
            </li>
            <li className={styles.divBuscar}>
              <input className={styles.inputBuscar} type="text" placeholder="Me diz o que está procurando..." />
              <Image src="/lupa.svg" alt="Logo voit" width={25} height={25} />
            </li>
            <li className={styles.entrar}>
              <Image src="/bolsa-cinza.svg" alt="Logo voit" width={40} height={40} />
              <a href="" className={styles.login}><Image src="/userLogin.svg" alt="Logo voit" width={30} height={30} />entrar</a>
            </li>
          </ul>
        </Nav>
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
            <li><a href="" className={styles.voitPro}>voit pro</a></li>
            <button className={styles.btnVender}>quero vender</button>
          </div>
          <Dropdown.Menu>
            <div className="row">
              <div className="col-2 text-center">
                <Dropdown.Item href="#/action-1">Subcategoria</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-2">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-3">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-4">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-5">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-6">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-7">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-8">Produto</Dropdown.Item>
              </div>
              <div className="col-2 text-center">
                <Dropdown.Item href="#/action-1">Subcategoria</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-2">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-3">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-4">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-5">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-6">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-7">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-8">Produto</Dropdown.Item>
              </div>
              <div className="col-2 text-center">
                <Dropdown.Item href="#/action-1">Subcategoria</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-2">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-3">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-4">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-5">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-6">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-7">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-8">Produto</Dropdown.Item>
              </div>
              <div className="col-2 text-center">
                <Dropdown.Item href="#/action-1">Subcategoria</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-2">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-3">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-4">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-5">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-6">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-7">Produto</Dropdown.Item>
                <Dropdown.Item className={styles.divDropNav} href="#/action-8">Produto</Dropdown.Item>
              </div>
              <div className="col-4 d-flex justify-content-center align-items-center">
                <div className={styles.dropImg}>
                  <Image src="/img-padrao.svg" alt="Logo voit" width={170} height={170} />
                </div>
              </div>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </Container>
    </section>
    );
  }