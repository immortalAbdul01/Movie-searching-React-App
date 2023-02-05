import logo from './logo.svg';
import './App.css';
import SearchIcon from './search.svg'
import { useEffect, useState } from 'react'
import Movie from './movie';

const API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=97903e84"
const movie1 = {
  "Title": "Fighting, Flying and Driving: The Stunts of Spiderman 3",
  "Year": "2007",
  "imdbID": "tt1132238",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg"
}
const App = () => {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")
  const searchMovies = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }
  useEffect(() => {
    searchMovies('Yeh')
  }, [])
  return (
    <div className="app">
      <h1>FILMI DUNIA</h1>
      <div className="search">
        <input type="text" placeholder='search any movie' value={search} onChange={(e) =>

          setSearch(e.target.value)
        } />
        <img src={SearchIcon} alt="" onClick={() => {
          searchMovies(search)

        }} />
      </div>


      {
        movies?.length > 0 ? (
          <div className="container">
            {movies.map((movie) => (
              <Movie movie={movie} />
            ))}
          </div>
        ) :
          (
            <div className="empty">
              <h1>Opps no movie found</h1>
            </div>
          )
      }




    </div>
  );
}

export default App;
