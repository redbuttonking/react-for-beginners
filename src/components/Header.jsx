import style from '../styles/Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <span className={style.navItem}>
        <NavLink
          to={'/react-for-beginners'}
          className={({ isActive }) => (isActive ? style.activeLink : style.navLink)}
        >
          Home
        </NavLink>
      </span>
      <span className={style.navItem}>
        <NavLink to={'/123'} className={({ isActive }) => (isActive ? style.activeLink : style.navLink)}>
          Series
        </NavLink>
      </span>
      <span className={style.navItem}>
        <NavLink to={'/456'} className={({ isActive }) => (isActive ? style.activeLink : style.navLink)}>
          Popular
        </NavLink>
      </span>
    </header>
  );
}

export default Header;
