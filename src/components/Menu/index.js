import { NavLink } from 'react-router-dom';
import './styles.scss';

function Menu() {
  return (
    <nav className="header-nav">
      <NavLink
        name="Recherche"
        to="/"
      >
        Recherche
      </NavLink>
      <NavLink
        name="Recherche"
        to="/faq"
      >
        FAQ
      </NavLink>
    </nav>
  );
}

export default Menu;
