import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from '../styles/Detail.module.css';

const IMG_URL = 'https://image.tmdb.org/t/p/original';
const VIDEO_URL = 'https://www.youtube.com/embed/';

function DetaliTvSeries() {
  const { id } = useParams();

  const [tvLoding, setTvLoding] = useState(true);
  const [videoLoding, setVideoLoding] = useState(true);
  const [tv, setTv] = useState([]);
  const [video, setVideo] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmI5YjM0MjNlYTlhNTk0ZjhkNWNhOWVjMTQxM2FkOSIsInN1YiI6IjY2NWQ5ZGQ0MTZkMmZhNjk2ZWRkODBlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.72BwyMmykV_qZqil2csMYEAPjT3pCjoPyOg1wiW4Kv4',
    },
  };

  const getTvSeries = async () => {
    const json = await (await fetch(`https://api.themoviedb.org/3/tv/${id}?language=ko-KR`, options)).json();
    setTv(json);
    setTvLoding(false);
  };

  useEffect(() => {
    getTvSeries();
  }, []);

  return (
    <div>
      {tvLoding ? (
        <h1 className={style.loding}>
          <div className={style.lodingIcon}>
            <i class="fa-solid fa-spinner fa-2xl"></i>
          </div>
        </h1>
      ) : (
        <div className={style.container}>
          <img className={style.backdropImg} alt="movie_cover_img" src={IMG_URL + tv.backdrop_path} />

          <div className={style.bdImgOverlay}>
            <div className={style.content}>
              <img className={style.coverImg} alt="movie_cover_img" src={IMG_URL + tv.poster_path} />

              <div className={style.info}>
                <h3 className={style.title}>
                  {tv.name} <span>⭐ {tv.vote_average}</span>
                </h3>
                <div className={style.genres}>
                  {tv.genres.map((genre) => (
                    <span>{genre.name}</span>
                  ))}
                </div>
                <div className={style.overview}>{tv.overview}</div>
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

export default DetaliTvSeries;
