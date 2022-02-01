import '../styles/globals.css'
import '../styles/NavBar.css'
import '../styles/Cart.css'
import '../styles/AllGamesList.css'
import '../styles/Game.css'
import '../styles/Home.css'
import '../styles/SignUp.css'
import '../styles/Validation.css'
import NavBar from '../components/NavBar'
import {CartProvider} from "../context/CartContext"
import Head from 'next/head'
import { ContextAuthProvider } from '../context/AuthContext'


function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Head>
        <title>KingGames</title>
        <link rel="icon" href="/KG_icon.ico"/>
      </Head>
      <ContextAuthProvider>
        <CartProvider>
          <header>
            <NavBar titulo="KingGames"/>
          </header>
          <Component {...pageProps} />
        </CartProvider>
      </ContextAuthProvider>
    </div>)
}

export default MyApp
