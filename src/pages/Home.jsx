import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import style from '../styles/Home.module.css';

function Home() {
  const [loding, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (await fetch('https://yts.mx/api/v2/list_movies.json?minimum_rating=8&sort_by=year')).json();
    setMovies(json.data.movies);
    setLoding(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loding ? (
        <h1>Loding...</h1>
      ) : (
        <div>
          <div className={style.movies}>
            {movies.map((movie) => (
              <Movie key={movie.id} id={movie.id} coverImg={movie.medium_cover_image} title={movie.title} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
export default Home;
