import Head from 'next/head'
import { Ajuda } from '../components/Ajuda'
import { CondicoesEspeciais } from '../components/CondicoesEspeciais'
import { Diarias } from '../components/Diarias/Diarias'
import { ProdutoDestaque } from '../components/ProdutoDestaque'
import { ProdutoHome } from '../components/ProdutoHome'
import { PromocoesEspeciais } from '../components/PromocoesEspeciais'
import Navbar from '../components/Navbar'
import { Modalidade } from '../components/Modalidade'
import { SportSelection } from '../components/SportSelection'
import { NearestProducts } from '../components/NearestProducts'
import { MelhoresDescontos } from '../components/MelhoresDescontos'
import { CallToAction } from '../components/CallToAction'
import { Blog } from '../components/Blog'
import { Depoimentos } from '../components/Depoimentos'
import { Parceiros } from '../components/Parceiros'
import { SobreNos } from '../components/SobreNos'
import { Footer } from '../components/Footer'

export default function Home(): JSX.Element {
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
      <section>
        <ProdutoHome />
      </section>
      <section>
        <CondicoesEspeciais />
      </section>
      <section>
        <Ajuda />
      </section>
      <section>
        <PromocoesEspeciais />
      </section>
      <section>
        <ProdutoDestaque />
      </section>
      <section>
        <Diarias />
      </section>
      <section>
        <Modalidade />
      </section>
      <section>
        <SportSelection />
      </section>
      <section>
        <NearestProducts />
      </section>
      <section>
        <MelhoresDescontos />
      </section>
      <section>
        <CallToAction />
      </section>
      <section>
        <Blog />
      </section>
      <section>
        <Depoimentos />
      </section>
      <section>
        <Parceiros />
      </section>
      <section>
        <SobreNos />
      </section>
      <section>
        <Footer />
      </section>
    </section>
  )
}