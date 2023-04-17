import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useLocation } from 'react-router-dom';
import './header.scss';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      {location.pathname === '/details' && (
      <NavLink to="/">
        <FontAwesomeIcon icon={faAngleLeft} />
      </NavLink>
      )}
      <h3>Anime Genre Browser</h3>
    </header>
  );
};

export default Header;
