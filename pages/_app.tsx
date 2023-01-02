import '../styles/globals.css'
import type { AppProps } from 'next/app'
import "@fullcalendar/common/main.css";



export default function App({ Component, pageProps }: AppProps) {
 
  return (

  <div  >
    <Component {...pageProps}  />
  </div>)
}
