import Styles from './styles.module.scss'
import Image from 'next/image'

export function CompreJuntoMobile(): JSX.Element {
  return (
    <div className="row">
      <div className="col-12 col-lg-4">
        <div className="d-flex flex-column align-items-center">
          <div className={Styles.card}>
            <Image
              src="/img-padrao.svg"
              alt="imagem produto"
              width={150}
              height={150}
            />
          </div>
          <p className={Styles.produto}>Tenis Nike SB553</p>
          <p className={Styles.preco}>R$ 290</p>
        </div>
        <div className="d-flex justify-content-center align-items-center d-lg-none mb-5 mt-5">
          <i className="fas fa-plus fa-2x"></i>
        </div>
      </div>
      <div className="col-12 col-sm-3 col-lg-2 d-lg-flex d-none justify-content-center align-items-center">
        <i className="fas fa-plus fa-2x"></i>
      </div>
      <div className="col-12 col-sm-6 d-flex flex-column align-items-center">
        <div className={Styles.cardProduto}>
          <Image
            src="/img-padrao.svg"
            alt="imagem produto"
            width={100}
            height={100}
          />
        </div>
        <p className={Styles.produtoCard}>Tenis Nike SB553</p>
        <p className={Styles.precoCard}>R$ 290</p>
      </div>
      <div className="col-12 col-sm-6 d-flex flex-column align-items-center">
        <div className={Styles.cardProduto}>
          <Image
            src="/img-padrao.svg"
            alt="imagem produto"
            width={100}
            height={100}
          />
        </div>
        <p className={Styles.produtoCard}>Tenis Nike SB553</p>
        <p className={Styles.precoCard}>R$ 290</p>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5">
        <i className="fas fa-equals fa-2x"></i>
      </div>
      <div className="col-12">
        <div className={Styles.card}>
          <p className={Styles.economize}>Economize R$ 197</p>
          <p className={Styles.leve}>Leve 3 produtos por</p>
          <p className={Styles.precoOld}>de R$487</p>
          <p className={Styles.precoNew}>por R$ 290</p>
          <button className={Styles.btnCombo}>comprar os 3 produtos</button>
        </div>
      </div>
    </div>
  )
}
