import React from "react";

const MovieCard = ({ movieObject: movieCard }) => {
  return (
    <div className="movie">
      <div className="movieImg">
        <img src={movieCard.Poster} alt={movieCard.Title} />
      </div>
      <span className="type">Type: {movieCard.Type}</span>
      <h3>{movieCard.Title}</h3>
      <p>{movieCard.Year}</p>
      <hr></hr>
    </div>
  );
};

export default MovieCard;
