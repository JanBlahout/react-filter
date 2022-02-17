import { useEffect, useState } from 'react';
const Filter = props => {
  const [filterName, setFilterName] = useState('');
  const { popularMovies, setFiltered, activeGenre, setActiveGenre } = props;

  useEffect(() => {
    let filtered;
    if (activeGenre === 0) {
      if (filterName.length > 0) {
        filtered = popularMovies.filter(movie =>
          movie.title.toLowerCase().includes(filterName.toLowerCase())
        );
        setFiltered(filtered);
        return;
      }
      setFiltered(popularMovies);
      return;
    }

    if (activeGenre !== 0) {
      filtered = popularMovies.filter(movie =>
        movie.genre_ids.includes(activeGenre)
      );

      if (filterName.length > 1) {
        filtered = popularMovies.filter(
          movie =>
            movie.title.toLowerCase().includes(filterName.toLowerCase()) &&
            movie.genre_ids.includes(activeGenre)
        );
      }
      setFiltered(filtered);
      return;
    }
  }, [activeGenre, popularMovies, setFiltered, filterName]);

  const onChangeFilter = e => {
    setFilterName(e.target.value);
  };

  return (
    <div className="filter-container">
      <button
        className={activeGenre === 0 ? 'active' : ''}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={activeGenre === 35 ? 'active' : ''}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 28 ? 'active' : ''}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
      <input placeholder="Search based on title" onChange={onChangeFilter} />
    </div>
  );
};

export default Filter;
