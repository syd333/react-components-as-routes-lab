import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const renderedMovies = () => (
    movies.map(movie => (
      <div>
        <h1>{movie.title}</h1>
        <h4>{movie.time}</h4>
        <ul>
          {movie.genres.map( genre => <li>{genre}</li>)}
        </ul>
      </div>
    ))
  )
  return (
    <div className="movies">
     <h1>Movies Page</h1>
     {renderedMovies()}
    </div>
  );
};

export default Movies;
