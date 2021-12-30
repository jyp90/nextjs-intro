import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBars from '../components/NavBars'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <div>
      <NavBars />
      <span>hello</span>
      </div>
      <style jsx>{`
      a {
          color: white;
      }
      `}
      </style>
    </>
}

export default MyApp
