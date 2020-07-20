import React from "react";

const MovieCard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <div className="movie-director">
        Director: <em>{props.director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{props.metascore}</strong>
      </div>
    </div>
  );
};

export default MovieCard;
