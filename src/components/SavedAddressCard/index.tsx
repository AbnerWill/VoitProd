import Styles from './styles.module.scss'

export function SavedAddressCard(): JSX.Element {
  return (
    <div className={Styles.container}>
      <img src="/green.svg" alt="Icone de bola verde" />
      <div>
        <h1>Nome da pessoa</h1>
        <span>
          Rua Santo Mauro, 468 Centro - Ponta Grossa - PR <br />
          CEP: 84063-160
        </span>
      </div>
      <button>
        <img src="/pencil.svg" alt="Icone de lapis" />
        Alterar
      </button>
    </div>
  )
}
