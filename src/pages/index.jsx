import Head from 'next/head'
import Ajuda from '../components/Home/Ajuda';
import CondicoesEspeciais from '../components/Home/CondicoesEspeciais';
import Diarias from '../components/Home/Diarias';
import ProdutoDestaque from '../components/Home/ProdutoDestaque';
import ProdutoHome from '../components/Home/ProdutoHome';
import PromocoesEspeciais from '../components/Home/PromocoesEspeciais';
import Navbar from '../components/Navbar';


export default function Home() {
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
    </section>
  )
}
