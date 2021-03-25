import React from 'react';
import { ProgressPlugin } from 'webpack';
import { actors } from '../data';

const Actors = () => {
  const renderedActors = () =>(
    actors.map(actor => (
      <div>
        <h1>{actor.name}</h1>
        <ul>
          {actor.movies.map(movie => <li>{movie}</li>)}
        </ul>
      </div>
    ))
  )
  return (
    <div className="actor">
     <h1>Actors Page</h1>
     {renderedActors()}
    </div>
  );
};

export default Actors;
