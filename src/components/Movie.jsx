import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../styles/Movie.module.css';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function Movie({ id, coverImg, title }) {
  return (
    <div className={style.movie}>
      <Link to={`/movie/${id}`}>
        <img src={IMG_URL + coverImg} alt="movie_cover_img" />
      </Link>
      <div>{title}</div>
      <h2 className={style.movieTitle}>{title}</h2>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Movie;
