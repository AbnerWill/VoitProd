import { Container, Table } from 'react-bootstrap'
import { TituloSecao } from '../TituloSecao'
import Styles from './styles.module.scss'

export function Caracteristicas(): JSX.Element {
  return (
    <div>
      <Container>
        <TituloSecao titulo="Principais Características:" />
        <Table striped>
          <tbody>
            <tr>
              <th className={Styles.tituloTabela}>CONTEÚDO DA EMBALAGEM</th>
              <td className={Styles.descricaoTabela}>1 par</td>
            </tr>
            <tr>
              <th className={Styles.tituloTabela}>Entressola</th>
              <td className={Styles.descricaoTabela}>EVA</td>
            </tr>
          </tbody>
        </Table>
      </Container>
    </div>
  )
}
