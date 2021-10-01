import styles from '../../styles/PromocoesEspeciais.module.css'
import TituloSecao from '../TituloSecao';
import Image from 'next/image';
import { Container } from 'react-bootstrap';

export default function PromocoesEspeciais() {
    return (
        <div className={styles.bgEspeciais}>
            <div className={styles.divTitulo}>
                <TituloSecao titulo="Promoções Especiais" />
                <p className={styles.subTitulo}>Equipamentos novos ou usados, aqui você encontra com preço justo</p>
            </div>
            <Container>
                <div className={styles.divCard}>
                    <div className={styles.divImg}>
                        <Image src="/img-padrao.svg" alt="imagem produto promocional" height={150} width={150} />
                    </div>
                    <div>
                        <p>Título promoção</p>
                        <p>Texto da descrição</p>
                        <p>10% OFF</p>
                        <button>veja mais</button>
                    </div>
                </div>
            </Container>
        </div>
    );
}