export default function BotaoGeral(props) {
  const estiloBtn = {
    backgroundColor: '#00ff00',
    border: 'none',
    borderRadius: '10px',
    fontSize: '12px',
    textTransform: 'uppercase',
    fontWeight: '500',
    minWidth: '170px',
    maxWidth: '220px',
    padding: '10px 0',
    letterSpacing: '0.1rem'
  }

  return (
    <>
      <button style={estiloBtn}>{props.titulo}</button>
    </>
  )
}
