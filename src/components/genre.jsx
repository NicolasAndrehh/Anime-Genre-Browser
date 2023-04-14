import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setGenreId } from '../redux/genreDetails/genreDetailsSlice';

const Genre = ({ id, name, count }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id) => {
    dispatch(setGenreId(id));
    navigate('/details');
  };

  return (
    <div className="genre-card" onClick={() => handleClick(id)} onKeyDown={() => handleClick(id)} role="link" tabIndex="0">
      <h3>{name}</h3>
      <p>
        {count}
        {' '}
        animes
      </p>
    </div>
  );
};

Genre.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default Genre;
