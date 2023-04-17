import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import getGenreDetails from '../redux/genreDetails/actions';
import Anime from './anime';
import './genreDetails.scss';

const GenreDetails = ({ genreId }) => {
  const { animes, isLoading, errorMessage } = useSelector((state) => state.genreDetails);
  const { genres } = useSelector((state) => state.animeGenres);
  const dispatch = useDispatch();
  const indexOfGenre = genres.findIndex((genre) => genre.mal_id === genreId);
  // This state is for this component so it's not necesary to use redux
  const [showAnimes, setShowAnimes] = useState(true);

  useEffect(() => {
    dispatch(getGenreDetails(genreId));
  }, []);

  if (genreId === 0) {
    return (
      <section className="genre-details-section" style={{ padding: '2rem' }}>
        <h1 style={{ color: '#fff', margin: 'auto', textAlign: 'center' }}>Go to the main page and select a genre</h1>
      </section>
    );
  }

  return (
    <section className="genre-details-section">
      <div className="genre-topic">
        <h2>{genres[indexOfGenre].name}</h2>
        <p>
          (
          {genres[indexOfGenre].count}
          {' '}
          Animes)
        </p>
      </div>
      <button type="button" className="anime-filter" onClick={() => setShowAnimes(!showAnimes)}>
        Animes
        {
          showAnimes
            ? <FontAwesomeIcon icon={faAngleDown} className="icon" />
            : <FontAwesomeIcon icon={faAngleRight} className="icon" />
        }
      </button>
      {isLoading && <h2 style={{ color: '#fff', margin: 'auto' }}>Loading...</h2>}
      {errorMessage && <h2 style={{ color: '#fff', margin: 'auto' }}>{errorMessage}</h2>}
      {showAnimes && (
      <div className="card-container">
        {animes.map((anime) => (
          <Anime
            key={anime.mal_id}
            img={anime.images.jpg.image_url}
            name={anime.title}
            favorites={anime.favorites}
          />
        ))}
      </div>
      )}
    </section>
  );
};

GenreDetails.propTypes = {
  genreId: PropTypes.number.isRequired,
};

export default GenreDetails;
