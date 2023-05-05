import React, { useState, useEffect } from 'react';

function MovieDetails({ id }) {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://127.0.0.1:8000/api/movie/`);
      const data = await response.json();
      setMovie(data);
    }

    fetchData();
  }, [id]);

  return (
    <div>
      {movie && (
        <div>
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
          <img src={movie.poster} alt={movie.title} />
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
