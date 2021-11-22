/* eslint-disable camelcase */
import { parseCookies } from 'nookies'
import { GetServerSideProps } from 'next'
import { Footer } from '../components/Footer'
import { NavInterna } from '../components/NavInterna'
import { PedidoInterna } from '../components/PedidoInterna'

export default function Pedido({token}): JSX.Element {
  return (
    <div>
      <section>
        <NavInterna />
      </section>
      <section>
        <PedidoInterna token={token}/>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const access_token = parseCookies(ctx)

  if (!access_token['access-token']) {
    return {
      redirect: {
        destination: '/usuario/login',
        permanent: false
      }
    }
  }

  const token = access_token['access-token']

  return {
    props: {token}
  }
}
