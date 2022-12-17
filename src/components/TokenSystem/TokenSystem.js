import MovieTokenSystem from './MovieTokenSystem';

const App = () => {
  const movie = {
    id: 1,
    title: 'The Matrix',
    description: 'A computer hacker learns of the true nature of his reality and his role in the war against its controllers.'
  };

  return (
    <div>
      <MovieTokenSystem movie={movie} />
    </div>
  );
};
