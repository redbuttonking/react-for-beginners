import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../styles/Movie.module.css';

function Movie({ id, coverImg, title, genres, summary }) {
  return (
    <div className={style.bgc}>
      <img src={coverImg} alt="movie_cover_img" />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <h3>Genres</h3>
      <ul>
        {genres.map((genres) => (
          <li>{genres}</li>
        ))}
      </ul>
      {/* <p>{summary}</p> */}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
