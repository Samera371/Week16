import "./MovieList.css";

import { Movie } from "../../types";
import MovieCard from "../movie-card/MovieCard";

// import { defaultMovies } from "../../data/movies";

interface MovieListProps {
  movies: Movie[];
  deleteMovie: (id: string) => void;
}

const MovieList = ({ movies, deleteMovie }: MovieListProps) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} deleteMovie={deleteMovie} />
      ))}
    </div>
  );
};

export default MovieList;