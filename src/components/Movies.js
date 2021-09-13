import React from 'react';
import { movies } from '../data';

//const moviesProp = movies

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => (
        <div>
          {movie.title}
          <br></br>
          {movie.time}
          <ul>
            {movie.genres.map(genre => (
              <li>{genre}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Movies;
