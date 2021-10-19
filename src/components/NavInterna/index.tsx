import { Voltar } from '../Voltar'
import Image from 'next/image'
import { Container } from 'react-bootstrap'
import Styles from './styles.module.scss'

export function NavInterna(): JSX.Element {
  return (
    <Container>
      <div className="row">
        <div className="col-5">
          <Voltar />
        </div>
        <div className="col-7 d-flex align-items-center">
          <Image src="/voit-logo.svg" alt="logo voit" height={50} width={100} />
        </div>
      </div>
    </Container>
  )
}
