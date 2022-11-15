import '../styles/globals.css'
import {ContextProvider} from './api/context.js'

function MyApp({ Component, pageProps }) {
  return <ContextProvider>
  <Component {...pageProps} />
  /</ContextProvider>
}

export default MyApp ;


