import React from 'react'
import { useGlobalContext } from './context'

const Movies = () => {
  const { movie } = useGlobalContext();
  
  return (
    <>
      {movie.map((curMovie) => {
        return (
          <div key={curMovie.id}>
            <h2>{curMovie.title}</h2>
          </div>
        );
      })}
    </>
  )
}

export default Movies
