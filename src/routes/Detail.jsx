import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import Movie from '../components/Movie';
import style from '../styles/Detail.module.css';

function Detail() {
  const { id } = useParams();

  const [loding, setLoding] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovies = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovie(json.data.movie);
    setLoding(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return (
    <div>
      {loding ? (
        <h1 className={style.loding}>detail loding</h1>
      ) : (
        <div>
          <img className={style.coverImg} alt="movie_cover_img" src={movie.large_cover_image} />
          <div className={style.info}>
            <h2>
              {movie.title} _ {movie.year}
            </h2>
          </div>
          <ul className={style.genres}>
            {movie.genres.map((genres) => (
              <li>{genres}</li>
            ))}
          </ul>
        </div>
      )}

      {/* <div>
        {movie.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          genres={movie.genres}
          summary={movie.summary}
        />
        ))}
      </div> */}
    </div>
  );
}

export default Detail;
