import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import '../styles/globals.css'

library.add(fab, faCoffee)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
