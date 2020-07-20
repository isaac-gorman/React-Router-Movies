import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import axios from "axios";
import SavedList from "./Movies/SavedList";
import MoviesList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then((response) => {
          console.log("I am the data", response.data);
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
    setSaved([...saved, id]);
  };

  return (
    <div>
      <SavedList list={saved} />
      <Route exact path="/">
        <MoviesList movies={movieList} />
      </Route>
      <Route path={`/movies/:id`}>
        <Movie addSavedList={addToSavedList} />
      </Route>
    </div>
  );
};

export default App;
