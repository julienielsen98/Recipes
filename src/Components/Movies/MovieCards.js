import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/MovieStyle.css";

const MovieCards = ({ movieObject: movieCard }) => {
  let navigate = useNavigate();
  return (
    <div
      className="movie"
      key={movieCard.imdbID}
      onClick={() => {
        navigate(`/Movies/${movieCard.imdbID}`);
      }}
    >
      <img src={movieCard.Poster} alt={movieCard.Title} className="movieImg" />
      <p>{movieCard.Genre}</p>
      <hr />
    </div>
  );
};

export default MovieCards;
