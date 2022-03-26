import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TinderProvider from '../context/TinderContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TinderProvider>
      <Component {...pageProps} />
    </TinderProvider>
  )
}

export default MyApp
