import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../styles/Movie.module.css';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function Movie({ id, coverImg, title, popularity }) {
  return (
    <div className={style.movie}>
      <Link to={`/movie/${id}`}>
        <div className={style.overlay}>
          <img src={IMG_URL + coverImg} alt="movie_cover_img" />
          <div className={style.info}>
            <h3>{title}</h3>
            <p>Popularity : {Math.round(popularity)}</p>
          </div>
        </div>
      </Link>
      {/* <h2 className={style.movieTitle}>{title}</h2> */}
      {/* <div>{title}</div> */}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  popularity: PropTypes.string.isRequired,
};

export default Movie;
