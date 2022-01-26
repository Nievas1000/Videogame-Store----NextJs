import Image from "next/image"
import Link from "next/link"

export default function Home({gamesRelevance,gamesByDate}) {
  return (
    <div>
      <div className="titles">
        <h1>Play the best games for free!</h1>
        <h4>Browse our collection and choose your favorite games!</h4>
      </div>
      <div className="games"> 
      <div className="relevant">
      <h2>Most played ever</h2>
        {gamesRelevance.map(x =>
          <div className="gameRel" key={x.id}>
            <Image src={x.thumbnail} alt={x.title} width={250} height={170} priority layout="fixed"/>
            <Link  href={`/games/${x.id}`}>
            <div>
              <h3>{x.title}</h3>
              <p>{x.short_description}</p>
              <p>Platform: {x.platform}</p>
            </div>
            </Link>
          </div>
          )}
          </div>
          <div className="popular">
          <h2>Most player 2022</h2>
          {gamesByDate.map(x =>
            <div key={x.id}>
              <Link  href={`/games/${x.id}`}>
              <a>
              <Image
                className="img-pop"
                src={x.thumbnail}
                alt={x.title}
                layout="fixed"
                width={250} 
                height={200}/>
              </a>
              </Link>
            </div>
          )}
          </div>
      </div>
    </div>
    
  )
}
export const getStaticProps = async () =>{
    const response = await fetch(`https://www.freetogame.com/api/games?sort-by=relevance`)
    const data = await response.json()
    const gamesRelevance = data.slice(0,10)

    const response2 = await fetch(`https://www.freetogame.com/api/games?sort-by=release-date`)
    const data2 = await response2.json()
    const gamesByDate = data2.slice(0,5)

    return{
        props: {gamesRelevance,gamesByDate}
    }
}