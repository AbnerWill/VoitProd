import Head from 'next/head'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import '../styles/globals.scss'
import { AppProps } from 'next/dist/shared/lib/router/router'
import SSRProvider from 'react-bootstrap/SSRProvider'
import { ListagemProdutosProvider } from '../contexts/ListagemProdutoContext'

library.add(fab, faCoffee)

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ListagemProdutosProvider>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </ListagemProdutosProvider>
  )
}

export default MyApp
