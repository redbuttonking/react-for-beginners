import style from '../styles/Header.module.css';
import { Link, NavLink } from 'react-router-dom';

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
          <NavLink to={'/TVseries'} className={({ isActive }) => (isActive ? style.activeLink : style.navLink)}>
            TV
          </NavLink>
        </span>
      </div>

      <div className={style.search}>
        <span className={style.navItem}>
          <Link to={'/search'} className={style.navLink}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
        </span>
      </div>
    </header>
  );
}

export default Header;
