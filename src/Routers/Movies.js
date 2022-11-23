import { useState, useEffect } from "react";
import MovieCard from "../Components/MoviesCard";
// import { useParams } from "react-router";
import { BiSearchAlt } from "react-icons/bi";
import Header from "../Components/Header";

//KEY = "78ebf986";
const API_URL = "http://www.omdbapi.com?apikey=78ebf986";

// const movieObject = {
//   Title: "Guardians of the Galaxy Vol. 2",
//   Year: "2017",
//   Rated: "PG-13",
//   Released: "05 May 2017",
//   Runtime: "136 min",
//   Genre: "Action, Adventure, Comedy",
//   Director: "James Gunn",
//   Writer: "James Gunn, Dan Abnett, Andy Lanning",
//   Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
//   Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
//   Language: "English",
//   Country: "United States",
//   Awards: "Nominated for 1 Oscar. 15 wins & 59 nominations total",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
// };

function MovieAPI() {
  // !to et set of movies
  const [movies, setmovies] = useState([]);
  const [search, setsearch] = useState("");

  // ! the async helps to fetch data
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
      <div className="app">
        <h1>
          <span className="land">MovieLand</span>
        </h1>

        <div className="search">
          <input
            placeholder="Search for Movies "
            value={search}
            // !e.target.value use for storing items as string
            onChange={(e) => {
              setsearch(e.target.value);
            }}
          />
          <BiSearchAlt
            className="search-icons"
            onClick={() => searchMovie(search)}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="container">
            {movies.map((movieCard) => (
              <MovieCard movieObject={movieCard} />
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
export default MovieAPI;
