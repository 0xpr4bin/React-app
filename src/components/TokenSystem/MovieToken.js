import React, { useState } from 'react';

const MovieTokenSystem = ({ movie }) => {
  const [tokens, setTokens] = useState(0); // Initialize tokens to 0
  const [error, setError] = useState(null); // Initialize error to null

  const handlePurchase = () => {
    // Send a request to the server to purchase a token
    fetch('/api/purchase-token', {
      method: 'POST',
      body: JSON.stringify({ movieId: movie.id }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // If the purchase was successful, update the token count
          setTokens(tokens + 1);
          setError(null);
        } else {
          // If the purchase was not successful, set an error message
          setError(data.error);
        }
      });
  };

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      {error && <p>{error}</p>}
      <button onClick={handlePurchase}>Purchase Token</button>
      <p>Tokens: {tokens}</p>
    </div>
  );
};

export default MovieTokenSystem;
