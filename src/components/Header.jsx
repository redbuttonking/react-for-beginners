import style from '../styles/Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={style.title}>
      <Link to={'/react-for-beginners'}>Home</Link>
      <Link to={'#'}>Series</Link>
      <Link to={'#'}>Popular</Link>
    </header>
  );
}

export default Header;
