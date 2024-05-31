import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../styles/Movie.module.css';

function Movie({ id, coverImg, title, genres, summary }) {
  return (
    <div className={style.movie}>
      <Link to={`/movie/${id}`}>
        <img src={coverImg} alt="movie_cover_img" />
      </Link>
      <h2 className={style.movieTitle}>{title}</h2>

      {/* <ul>
        {genres.map((genres) => (
          <li>{genres}</li>
        ))}
      </ul> */}
      {/* <p>{summary}</p> */}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  // summary: PropTypes.string.isRequired,
  // genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
