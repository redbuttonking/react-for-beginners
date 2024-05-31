import PropTypes from 'prop-types';
import style from '../styles/Menu.module.css';

function Menu({ text }) {
  return <span className={style.title}>{text}</span>;
}

Menu.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Menu;
