import CommentArea from "../components/CommentArea"
import Image from "next/image";
import {useGame} from "../context/cart"

const Game = ({data}) =>{
    const {agregarAlCarro} = useGame()
    return(
        <div className="container-prod">
            <div className="zona-prod">
                <div className="zona-1">
                    <Image alt={data.title} className="img-prog" src={data.thumbnail} width={365} height={206} layout="fixed"/><br/>
                    <button onClick={() => agregarAlCarro(data)}>Add to cart</button>
                </div>
                <div className="zona-2">
                    <h1 className="title-prod">{data.title}</h1>
                    <h4 className="genero-prod">Genre: {data.genre}</h4>
                    <h4>Release date: {data.release_date}</h4>
                    <h4>Publisher: {data.publisher}</h4>
                    <div className="description">
                        <h2>Description</h2>
                        <p>{data.description}</p>
                    </div>
                    <div className="requirements">
                        <h2>Minimum system requirements</h2>
                        <span>OS: {data.minimum_system_requirements.os}</span><br/>
                        <span>Processor: {data.minimum_system_requirements.processor}</span><br/>
                        <span>Memory: {data.minimum_system_requirements.memory}</span><br/>
                        <span>Graphics: {data.minimum_system_requirements.graphics}</span><br/>
                        <span>Storage: {data.minimum_system_requirements.storage}</span><br/>
                    </div>
                    <h2>{data.title} Screenshots</h2>
                    <div className="zona-screen">
                        <img className="screenshots" src={data.screenshots[0].image} width={200} height={130} alt={data.title}/>
                        <img className="screenshots" src={data.screenshots[1].image} width={200} height={130} alt={data.title} />
                        <img className="screenshots" src={data.screenshots[2].image} width={200} height={130} alt={data.title} />
                    </div>              
                    <div className="comentarios">
                        <CommentArea/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Game

export const getStaticProps = async ({params}) =>{
    const response = await fetch(`https://www.freetogame.com/api/game?id=${params.id}`)
    const data = await response.json()

    return {props: {data}}
}

export const getStaticPaths = async () =>{
    const paths = []
    return{
        paths,
        fallback:'blocking'
    }
}