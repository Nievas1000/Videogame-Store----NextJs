import ReactPaginate from "react-paginate"
import { useState } from "react"
import {Formik, Form} from 'formik'
import Select from "./components/Select"
import CardGame from "./components/CardGame"

export default function Games({games}) {
  const [page, setPage] = useState(0)
  const [category, setCategory] = useState({})
  const generosPrev = []
  games.filter((el) => generosPrev.push(el.genre))
  const generos = generosPrev.filter((el,i) =>{
      return generosPrev.indexOf(el) === i
  })
  
  const gamesPorPage = 12
  const lastPageVisit = page * gamesPorPage

  const SearchCat = (value) =>{
      setCategory(value)
  }

  const countPage = Math.ceil(games.length / gamesPorPage)

  const changePage = ({selected}) =>{
      setPage(selected)
  }
  return (
    <div>
        <div className="title-allgames">
            <h1 data-testid="titulo">All games have a value of 1000$</h1>
        </div>
        <div>
            <Formik initialValues={{genre:""}} onSubmit={SearchCat}>
                    <Form className="form-cat">
                    <Select name = "genre" label={"Genre"}>
                        <option value="">All Genres</option>
                        {generos.map(x =>
                            <option key={x} value={x}>{x}</option>
                        )}
                    </Select>
                    <button type="submit">Search</button>
                    </Form>
                </Formik>
            <div className="container">
                <div className="tajetas">
                    <CardGame
                    games={games} page={page} 
                    category={category} 
                    gamesPorPage={gamesPorPage} 
                    lastPageVisit={lastPageVisit}
                    />
                </div>
            </div>
            <ReactPaginate
                    previousLabel={"Previus"}
                    nextLabel={"Next"}
                    pageCount={countPage}
                    onPageChange={changePage}
                    containerClassName={"paginationContainer"}
                    previousLinkClassName={"paginationPrevius"}
                    nextLinkClassName={"paginationNext"}
                    disabledClassName={"paginationDisable"}
                    activeClassName={"paginationActive"}
                    pageClassName={"page"}
            />
            </div>
    </div>
  )
}
export const getStaticProps = async () =>{
    const response = await fetch(`https://www.freetogame.com/api/games`)
    const data = await response.json()
    const games = data.slice(0,250)


    return{
        props: {games}
    }
}