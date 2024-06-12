import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../styles/SearchInfo.module.css';

function SearchInfo({ text }) {
  const [movieLoding, setMovieLoding] = useState(true);
  const [tvSeriesLoding, setTvSeriesLoding] = useState(true);

  const [tvSeriesSearch, setTvSeriesSearch] = useState([]);
  const [movieSearch, setMovieSearch] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmI5YjM0MjNlYTlhNTk0ZjhkNWNhOWVjMTQxM2FkOSIsInN1YiI6IjY2NWQ5ZGQ0MTZkMmZhNjk2ZWRkODBlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.72BwyMmykV_qZqil2csMYEAPjT3pCjoPyOg1wiW4Kv4',
    },
  };

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${text}&include_adult=false&language=ko-KR&page=1`,
        options
      )
    ).json();
    setMovieSearch(json.results);
    setMovieLoding(false);
  };

  const getTvSeries = async () => {
    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/search/tv?query=${text}&include_adult=false&language=ko-KR&page=1`,
        options
      )
    ).json();
    setTvSeriesSearch(json.results);
    setTvSeriesLoding(false);
  };

  useEffect(() => {
    if (text) {
      getMovies();
      getTvSeries();
    }
  }, [text]);

  return (
    <div className={style.bgcDiv}>
      {movieLoding || tvSeriesLoding ? null : (
        <div className={style.bgc}>
          <div className={style.movieContainer}>
            <div className={style.movieText}>영화</div>
            {movieSearch.length > 0 ? (
              movieSearch.map((movie) => (
                <div className={style.movieText} key={movie.id}>
                  <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                </div>
              ))
            ) : (
              <div className={style.noResult}>일치하는 항목이 없습니다.</div>
            )}
          </div>
          <div className={style.tvContainer}>
            <div className={style.movieText}>TV 시리즈</div>
            {tvSeriesSearch.length > 0 ? (
              tvSeriesSearch.map((tv) => (
                <div className={style.movieText} key={tv.id}>
                  <Link to={`/tv/${tv.id}`}>{tv.name}</Link>
                </div>
              ))
            ) : (
              <div className={style.noResult}>일치하는 항목이 없습니다.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
SearchInfo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SearchInfo;
