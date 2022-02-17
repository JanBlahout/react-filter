import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Movie from './components/Movie';

import './App.css';
import Filter from './components/Filter';

function App() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  const fetchPopularMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=e4886ab72073d79f8cec499008cdc848&language=en-US&page=1'
    );
    const movies = await data.json();
        setPopularMovies(movies.results);
    setFilteredMovies(movies.results);
  };

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    <div className="App">
      <Filter
        popularMovies={popularMovies}
        setFiltered={setFilteredMovies}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />
      <motion.div layout className="popular-movies">
        <AnimatePresence>
          {filteredMovies.map(movie => (
            <Movie
              key={movie.id}
              title={movie.title}
              backdrop={movie.backdrop_path}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
