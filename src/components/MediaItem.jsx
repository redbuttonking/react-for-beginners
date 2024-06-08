import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../styles/MediaItem.module.css';
import { useEffect, useRef } from 'react';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

function MediaItem({ id, coverImg, title, popularity }) {
  const movieContainerRef = useRef(null);

  // const scrollLeft = () => {
  //   movieContainerRef.current.scrollBy({
  //     left: -200,
  //     behavior: 'smooth',
  //   });
  // };

  // const scrollRight = () => {
  //   movieContainerRef.current.scrollBy({
  //     left: 200,
  //     behavior: 'smooth',
  //   });
  // };

  const handleWheel = (event) => {
    // event.preventDefault();
    // movieContainerRef.current.scrollBy({
    //   left: event.deltaY < 0 ? -100 : 100,
    // });
    console.log(event);
  };

  return (
    <div className={style.movie}>
      <Link to={`/movie/${id}`}>
        <div className={style.overlay} onWheel={(event) => handleWheel(event)}>
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

MediaItem.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  popularity: PropTypes.string.isRequired,
};

export default MediaItem;
