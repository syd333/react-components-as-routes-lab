import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const renderedDirectors = () => (
    directors.map(d => (
      <div>
        <h1>{d.name}</h1>
        <ul>
          {d.movies.map( movie => <li>{movie}</li>)}
        </ul>
      </div>
    ))
  )
  return (
    <div className="directors">
    <h1>Directors Page</h1>
    {renderedDirectors()}
   </div>
  );
}

export default Directors
