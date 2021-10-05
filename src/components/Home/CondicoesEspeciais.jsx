import { Container } from 'react-bootstrap'

export default function CondicoesEspeciais() {
  const condicaoEspecial = {
    color: '#95A1BB',
    fontSize: '18px',
    fontWeight: '500',
    margin: '0',
    padding: '0'
  }
  const descricaoCondicao = { color: '#95A1BB', fontSize: '16px' }

  return (
    <div
      style={{
        backgroundColor: '#EAEDF5',
        padding: '20px 0',
        margin: '20px 0 0 0'
      }}
    >
      <Container>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-3 text-center">
            <p style={condicaoEspecial}>Condição especial 01</p>
            <span style={descricaoCondicao}>
              Descrição sobre a<br />
              condição
            </span>
          </div>
          <div className="col-12 col-sm-6 col-md-3 text-center">
            <p style={condicaoEspecial}>Condição especial 02</p>
            <p style={descricaoCondicao}>
              Descrição sobre a<br />
              condição
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-3 text-center">
            <p style={condicaoEspecial}>Condição especial 03</p>
            <p style={descricaoCondicao}>
              Descrição sobre a<br />
              condição
            </p>
          </div>
          <div className="col-12 col-sm-6 col-md-3 text-center">
            <p style={condicaoEspecial}>Condição especial 04</p>
            <p style={descricaoCondicao}>
              Descrição sobre a<br />
              condição
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}
