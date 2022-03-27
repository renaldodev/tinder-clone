import '../styles/globals.css'
import type { AppProps } from 'next/app'
import TinderProvider from '../context/TinderContext'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider serverUrl={"https://p0gvkiznbpi7.usemoralis.com:2053/server"}  appId="uDZvk5nka6xMcnp45OZqS7lm3nRv71KkV8ebNdzW">
      <TinderProvider>
        <Component {...pageProps} />
      </TinderProvider>
    </MoralisProvider>
  )
}

export default MyApp
