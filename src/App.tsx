import { Movie, NewMovie } from "./types";

import MovieList from "./components/movie-list/MovieList";
import Navbar from "./components/nav/Navbar";
import { defaultMovies } from "./data/movies";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [movies, setMovies] = useState<Movie[]>(defaultMovies);

  const handleAddMovie = (movie: NewMovie) => {
    const newMovie = {
      ...movie,
      ratings: [],
      id: uuidv4(),
    };

    console.log("Movie added:", movie);
    setMovies([...movies, newMovie]);
  };

  const handleDeleteMovie = (id: string) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  return (
    <div>
      <Navbar addMovie={handleAddMovie} />
      <MovieList movies={movies} deleteMovie={handleDeleteMovie} />
    </div>
  );
}

export default App;