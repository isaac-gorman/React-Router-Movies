import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  return (
    <div className="movie-list">
      {props.movies.map((crrV) => (
        <div>
          <MovieDetails key={crrV.id} movie={crrV} linkId={crrV.id} />
        </div>
      ))}
    </div>
  );
};

function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  return (
    <Link
      style={{ textDecoration: "none", color: "black" }}
      to={`movies/${movie.id}`}
    >
      <div className="movie-card">
        {/* <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div> */}
        <MovieCard title={title} director={director} metascore={metascore} />
      </div>
    </Link>
  );
}

export default MovieList;
