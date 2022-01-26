import Link from "next/link"
import {useGame} from "../context/cart"
import Image from "next/image"
import AuthContext from "../context/AuthContext"
import { useContext } from "react"

const CardGame = ({...props}) =>{
    const {agregarAlCarro} = useGame()
    const games = props.games
    const category = props.category
    const lastPageVisit = props.lastPageVisit
    const gamesPorPage = props.gamesPorPage
    const {isLogged} = useContext(AuthContext)

    const prodByCat = games.map(x => x.genre === category.genre ?
      <article key={x.id}>
              <Link  href={`/games/${x.id}`} passHref>
                  <a><Image alt={x.title} className="img-inicio" src={x.thumbnail} width={370} height={200}/></a>
              </Link>
              <div className="title-card"><h3>{x.title}</h3></div>
              <p className="card-description">{x.short_description.substring(0,35)}</p>
              {isLogged ? <button onClick={() => agregarAlCarro(x)}>Add to cart</button> : null}
      </article> : null)

    const allProd = games.slice(lastPageVisit, lastPageVisit + gamesPorPage).map(x =>
      <article key={x.id}>
              <Link  href={`/games/${x.id}`} passHref>
                  <a><Image alt={x.title} className="img-inicio" src={x.thumbnail} width={370} height={200}/></a>
              </Link>
              <div className="title-card"><h3>{x.title}</h3></div>
              <p className="card-description">{x.short_description.substring(0,35)}...</p>
              {isLogged ? <button onClick={() => agregarAlCarro(x)}>Add to cart</button> : null}
      </article>)
    
     if(category.genre === undefined || category.genre === ""){
         return allProd
     }else{
         return prodByCat
     }
}

export default CardGame