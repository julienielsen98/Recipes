import { useState, useEffect } from "react";
import MovieCards from "../../Components/Movies/MovieCards";
import Header from "../../Components/Header";
import "../../styles/MovieStyle.css";
const API_URL = "http://www.omdbapi.com?apikey=78ebf986";

function Movies() {
  const [movies, setmovies] = useState([]);
  const [search, setsearch] = useState("");

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setmovies(data.Search);
  };

  useEffect(() => {
    searchMovie("Christmas");
  }, []);

  return (
    <>
      <Header />
      <br />
      <div className="movies-container">
        <div className="search">
          <input
            className="searchbar"
            placeholder="Search for Movies "
            value={search}
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
          <button className="searchbtn" onClick={() => searchMovie(search)}>
            Search
          </button>
        </div>
        <br />
        {movies?.length > 0 ? (
          <div className="movieCard-container">
            {movies.map((movieCard) => (
              <MovieCards movieObject={movieCard} key={movieCard.imdbID} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h3>No movies found</h3>
          </div>
        )}
      </div>
    </>
  );
}
export default Movies;
