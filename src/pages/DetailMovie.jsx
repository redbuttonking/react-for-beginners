import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from '../styles/Detail.module.css';

const IMG_URL = 'https://image.tmdb.org/t/p/original';
const VIDEO_URL = 'https://www.youtube.com/embed/';

function DetailMovie() {
  const { id } = useParams();

  const [movieLoding, setMovieLoding] = useState(true);
  const [videoLoding, setVideoLoding] = useState(true);
  const [movie, setMovie] = useState([]);
  const [video, setVideo] = useState([]);

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
    setMovieLoding(false);
  };

  const getVideo = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmI5YjM0MjNlYTlhNTk0ZjhkNWNhOWVjMTQxM2FkOSIsInN1YiI6IjY2NWQ5ZGQ0MTZkMmZhNjk2ZWRkODBlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.72BwyMmykV_qZqil2csMYEAPjT3pCjoPyOg1wiW4Kv4',
      },
    };

    const json = await (await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=ko-KR`, options)).json();
    setVideo(json.results);
    setVideoLoding(false);
  };

  useEffect(() => {
    getMovies();
    getVideo();
  }, []);

  return (
    <div>
      {movieLoding || videoLoding ? (
        <h1 className={style.loding}>
          <div className={style.lodingIcon}>
            <i class="fa-solid fa-spinner fa-2xl"></i>
          </div>
        </h1>
      ) : (
        <div className={style.container}>
          <img className={style.backdropImg} alt="movie_cover_img" src={IMG_URL + movie.backdrop_path} />

          <div className={style.bdImgOverlay}>
            <div className={style.content}>
              <img className={style.coverImg} alt="movie_cover_img" src={IMG_URL + movie.poster_path} />

              <div className={style.info}>
                <h3 className={style.title}>
                  {movie.title} <span>⭐ {movie.vote_average}</span>
                </h3>
                <div className={style.genres}>
                  {movie.genres.map((genre) => (
                    <span>{genre.name}</span>
                  ))}
                </div>

                <div className={style.overview}>{movie.overview}</div>
                <div className={style.video}>
                  {video.length === 0 ? null : (
                    <iframe
                      className={style.video}
                      src={VIDEO_URL + video[0].key}
                      title="YouTube video player"
                      frameborder="0"
                      allowfullscreen
                    ></iframe>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailMovie;
