import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  fetch('/api/')
  return <Component {...pageProps} />
}
