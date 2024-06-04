import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import style from '../styles/SearchInfo.module.css';

function SearchInfo({ text }) {
  const [loding, setLoding] = useState(true);
  const [response, setResponse] = useState([]);

  const getSearchVal = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmI5YjM0MjNlYTlhNTk0ZjhkNWNhOWVjMTQxM2FkOSIsInN1YiI6IjY2NWQ5ZGQ0MTZkMmZhNjk2ZWRkODBlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.72BwyMmykV_qZqil2csMYEAPjT3pCjoPyOg1wiW4Kv4',
      },
    };

    const json = await (
      await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${text}&include_adult=false&language=ko-KR&page=1`,
        options
      )
    ).json();
    setResponse(json.results);
    setLoding(false);
  };

  useEffect(() => {
    if (text) {
      getSearchVal();
      console.log(response.id);
    }
  }, [text]);

  return (
    <div className={style.bgcDiv}>
      {loding ? null : (
        <div className={style.bgc}>
          {response.length > 0 ? (
            response.map((movie) => (
              <div className={style.movieText} key={movie.id}>
                <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              </div>
            ))
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}
    </div>
  );
}
SearchInfo.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SearchInfo;
