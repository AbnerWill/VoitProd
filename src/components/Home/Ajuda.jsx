import Image from 'next/image'
import TituloSecao from '../TituloSecao'

export default function Ajuda() {
  const divAjuda = {
    backgroundColor: '#EAEDF5',
    margin: '20px 0',
    height: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const btnAjuda = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#00ff00',
    border: 'none',
    borderRadius: '10px',
    fontSize: '12px',
    textTransform: 'uppercase',
    fontWeight: '500',
    width: '220px',
    padding: '8px 0',
    margin: '20px 0',
    letterSpacing: '0.1rem'
  }
  return (
    <div style={divAjuda}>
      <TituloSecao titulo="Precisa de ajuda? Chame um especialista" />
      <p style={{ color: '#95A1BB', width: '420px', textAlign: 'center' }}>
        Temos uma equipe especializada pronta para te atender no WhatsApp,
        qualquer coisa é só chamar
      </p>
      <button style={btnAjuda}>
        <Image
          src="/whatsIcon.svg"
          alt="imagem produto"
          width={25}
          height={25}
        />
        fale com a gente !
      </button>
    </div>
  )
}
