import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import getGenres from '../redux/animeGenres/actions';
import Genre from './genre';
import './animeGenres.scss';
import { clearSlice } from '../redux/genreDetails/genreDetailsSlice';

const AnimeGenres = () => {
  const { genres, isLoading, errorMessage } = useSelector((state) => state.animeGenres);
  const dispatch = useDispatch();
  // This state is for this component so it's not necesary to use redux
  const [showGenres, setShowGenres] = useState(true);

  useEffect(() => {
    dispatch(getGenres());
    dispatch(clearSlice());
  }, []);

  return (
    <section className="genres-section">
      <div className="anime-topic">
        <h2>Anime</h2>
        <p>
          (
          {genres.length}
          {' '}
          genres)
        </p>
      </div>
      <button type="button" className="anime-filter" onClick={() => setShowGenres(!showGenres)}>
        Anime Genres
        {
          showGenres
            ? <FontAwesomeIcon icon={faAngleDown} />
            : <FontAwesomeIcon icon={faAngleRight} />
        }
      </button>
      {isLoading && <h2 style={{ color: '#fff', margin: 'auto' }}>Loading...</h2>}
      {errorMessage && <h2 style={{ color: '#fff', margin: 'auto' }}>{errorMessage}</h2>}
      {showGenres && (
      <div className="card-container">
        {genres.map((genre) => (
          <Genre key={genre.mal_id} id={genre.mal_id} name={genre.name} count={genre.count} />
        ))}
      </div>
      )}
    </section>
  );
};

export default AnimeGenres;
