import { useEffect, useState } from 'react';
import MediaItem from '../components/MediaItem';
import Xscroll from '../components/Xscroll';
import style from '../styles/Movies.module.css';

function Movies() {
  const [popularityLod, setPopularityLod] = useState(true);
  const [upComingLod, setUpComingLod] = useState(true);

  const [movies, setMovies] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

  const getMovies = async () => {
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
        'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc',
        options
      )
    ).json();
    setMovies(json.results);
    setPopularityLod(false);
  };

  const getUpcoming = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmI5YjM0MjNlYTlhNTk0ZjhkNWNhOWVjMTQxM2FkOSIsInN1YiI6IjY2NWQ5ZGQ0MTZkMmZhNjk2ZWRkODBlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.72BwyMmykV_qZqil2csMYEAPjT3pCjoPyOg1wiW4Kv4',
      },
    };

    const json = await (
      await fetch('https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1', options)
    ).json();
    setUpcoming(json.results);
    setUpComingLod(false);
  };

  useEffect(() => {
    getMovies();
    getUpcoming();
  }, []);

  // useEffect(() => {
  //   console.log(movies);
  // }, [movies]);

  // useEffect(() => {
  //   console.log(upcoming);
  // }, [upcoming]);

  return (
    <div>
      {popularityLod || upComingLod ? (
        <h1 className={style.loding}>
          <div className={style.lodingIcon}>
            <i class="fa-solid fa-spinner fa-2xl"></i>
          </div>
        </h1>
      ) : (
        <div>
          <h1 className={style.subtitle}>인기 콘텐츠</h1>
          <Xscroll
            content={movies.map((movie) => (
              <MediaItem
                key={movie.id}
                id={movie.id}
                coverImg={movie.poster_path}
                title={movie.title}
                popularity={movie.popularity}
                content={'movie'}
              />
            ))}
          />

          <h1 className={style.subtitle}>개봉 예정작</h1>
          <Xscroll
            content={upcoming.map((upcoming) => (
              <MediaItem
                key={upcoming.id}
                id={upcoming.id}
                coverImg={upcoming.poster_path}
                title={upcoming.title}
                popularity={upcoming.popularity}
                content={'movie'}
              />
            ))}
          />
        </div>
      )}
    </div>
  );
}
export default Movies;
