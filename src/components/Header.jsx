import style from '../styles/Header.module.css';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className={style.topBar}>
      <div className={style.nav}>
        <span className={style.navItem}>
          <span className={style.textIcon}>NETFELX</span>
          <NavLink
            to={'/react-for-beginners'}
            className={({ isActive }) => (isActive ? style.activeLink : style.navLink)}
          >
            영화
          </NavLink>
        </span>
        <span className={style.navItem}>
          <NavLink to={'/123'} className={({ isActive }) => (isActive ? style.activeLink : style.navLink)}>
            TV
          </NavLink>
        </span>
      </div>

      <div className={style.search}>
        <span className={style.navItem}>
          <NavLink to={'/search'} className={({ isActive }) => (isActive ? style.activeLink : style.navLink)}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </NavLink>
        </span>
      </div>
    </header>
  );
}

export default Header;
