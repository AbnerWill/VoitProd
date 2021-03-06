import Head from 'next/head'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Titulospaginas } from '../components/Titulospaginas'
import { Privacidade } from '../components/Privacidade'
import { Container } from 'react-bootstrap'

export default function PoliticaPrivacidade(): JSX.Element {
  return (
    <section>
      <Head>
        <title>Voit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <Navbar />
      </section>
      <Container>
        <section>
          <Titulospaginas />
        </section>
        <section>
          <Privacidade />
        </section>
      </Container>
      <section>
        <Footer />
      </section>
    </section>
  )
}
