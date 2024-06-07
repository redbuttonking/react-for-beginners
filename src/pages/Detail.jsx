import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from '../styles/Detail.module.css';

const IMG_URL = 'https://image.tmdb.org/t/p/original';

function Detail() {
  const { id } = useParams();

  const [loding, setLoding] = useState(true);
  const [movie, setMovie] = useState([]);

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
        `https://api.themoviedb.org/3/movie/${id}?language=ko-KR&api_key=a6b9b3423ea9a594f8d5ca9ec1413ad9`,
        options
      )
    ).json();
    setMovie(json);
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
        <div className={style.container}>
          <img className={style.backdropImg} alt="movie_cover_img" src={IMG_URL + movie.backdrop_path} />

          <div className={style.bdImgOverlay}>
            <div className={style.content}>
              <img className={style.coverImg} alt="movie_cover_img" src={IMG_URL + movie.poster_path} />

              <div className={style.info}>
                <h3 className={style.title}>{movie.title}</h3>
                <div className={style.genres}>
                  {movie.genres.map((genre) => (
                    <span>{genre.name}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
