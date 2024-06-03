import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import style from '../styles/Home.module.css';

function Home() {
  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);

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
    setLoding(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    console.log(movies);
  }, [movies]);

  return (
    <div>
      {loding ? (
        <h1>Loding...</h1>
      ) : (
        <div>
          <div className={style.movies}>
            {movies.map((movie) => (
              <Movie key={movie.id} id={movie.id} coverImg={movie.poster_path} title={movie.title} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
