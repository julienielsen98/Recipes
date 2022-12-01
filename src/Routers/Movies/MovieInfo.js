import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../Components/Header";

function MovieInfo() {
  const { MovieId } = useParams();
  const [movie, setMovie] = useState([]);

  const fetchMovieDetails = useCallback((MovieId) => {
    axios
      .get(`https://www.omdbapi.com/?i=${MovieId}&apikey=78ebf986`)
      .then((res) => {
        setMovie(res.data);
      });
  }, []);

  useEffect(() => {
    fetchMovieDetails(MovieId);
  }, [fetchMovieDetails, MovieId]);

  console.log(movie);

  return (
    <>
      <Header />
      <br />
      <div className="Container" id="Container-movie">
        <div className="info-container" key={movie.imdbID}>
          <div className="info">
            <br />
            <img src={movie.Poster} alt={movie.Title} className="movieImg" />
          </div>
          <div className="info-details">
            <h3 className="title">{movie.Title}</h3>
            <p className="title-p-tag">
              {movie.Genre} - {movie.Type} from {movie.Year}
            </p>
            <h2>{movie.Awards}</h2>

            <h3>{movie.Plot}</h3>
            <p>Actors: {movie.Actors}</p>
            <p>Director:{movie.Director}</p>
            <p>Writer: {movie.Writer}</p>
            <h4>Runtime{movie.Runtime}</h4>
            <h4>Released{movie.Released}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieInfo;
