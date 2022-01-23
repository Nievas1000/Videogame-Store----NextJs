import '../styles/globals.css'
import '../styles/NavBar.css'
import '../styles/Cart.css'
import '../styles/AllGamesList.css'
import '../styles/Game.css'
import '../styles/Home.css'
import NavBar from './NavBar'
import {CartProvider} from "./context/cart"
import Cart from './components/Cart'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return(
    <div>
      <Head>
        <title>KingGames</title>
        <link rel="icon" href="/KG_icon.ico" style={{fontSize:20}}/>
      </Head>
      <CartProvider>
        <header>
          <NavBar titulo="KingGames"/>
        </header>
          <Cart/>
          <Component {...pageProps} />
      </CartProvider>
    </div>)
}

export default MyApp
