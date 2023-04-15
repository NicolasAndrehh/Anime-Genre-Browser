import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const Anime = ({ img, name, favorites }) => (
  <div className="anime-card">
    <img src={img} alt={name} />
    <div className="anime-info">
      <h3>{name}</h3>
      <p>
        {favorites}
        {' '}
        <FontAwesomeIcon icon={faHeart} style={{ color: '#539749' }} />
      </p>
    </div>
  </div>
);

Anime.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  favorites: PropTypes.number.isRequired,
};

export default Anime;
