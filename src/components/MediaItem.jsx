import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../styles/MediaItem.module.css';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function MediaItem({ id, coverImg, title, popularity, content }) {
  return (
    <div className={style.movie}>
      {content === 'movie' ? (
        <Link to={`/${content}/${id}`}>
          <div className={style.overlay}>
            <img src={IMG_URL + coverImg} alt="cover_img" />
            <div className={style.info}>
              <h3>{title}</h3>
              <p>Popularity : {Math.round(popularity)}</p>
            </div>
          </div>
        </Link>
      ) : (
        <Link to={`/${content}/${id}`}>
          <div className={style.overlay}>
            <img src={IMG_URL + coverImg} alt="cover_img" />
            <div className={style.info}>
              <h3>{title}</h3>
              <p>Popularity : {Math.round(popularity)}</p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

MediaItem.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  popularity: PropTypes.string.isRequired,
};

export default MediaItem;
