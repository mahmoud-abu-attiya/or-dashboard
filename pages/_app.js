import '../styles/globals.css'
import Loading from '../layouts/Loading'

export default function MyApp({ Component, pageProps }) {
  return (
    <Loading>
      <Component {...pageProps} />
    </Loading>
  )}