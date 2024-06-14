import style from '../styles/Header.module.css';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className={style.topBar}>
      <div className={style.nav}>
        <div className={style.textIcon}>NETFELX</div>
        <div className={style.navItem}>
          <NavLink
            to={'/react-for-beginners'}
            className={({ isActive }) => (isActive ? style.activeLink : style.navLink)}
          >
            영화
          </NavLink>
        </div>
        <div className={style.navItem}>
          <NavLink to={'/TVseries'} className={({ isActive }) => (isActive ? style.activeLink : style.navLink)}>
            TV
          </NavLink>
        </div>
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
