import styles from '../styles/navbar.module.css'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
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
      <ul className={styles.divNav}>
        <li>
          <Image src="/voit-logo.svg" alt="Logo voit" width={100} height={35} />
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
      <ul className={styles.categorias}>
        <li><a href="">basquete</a></li>
        <li><a href="">corrida</a></li>
        <li><a href="">futebol</a></li>
        <li><a href="">handebol</a></li>
        <li><a href="">lutas</a></li>
        <li><a href="">fitness</a></li>
        <li><a href="">pesca</a></li>
        <li><a href="">outros</a></li>
        <li><a href="" className={styles.voitPro}>voit pro</a></li>
        <button className={styles.btnVender}>quero vender</button>
      </ul>
    </section>
  );
}