import { useEffect, useState } from 'react';
import MediaItem from '../components/MediaItem';
import Xscroll from '../components/Xscroll';
import style from '../styles/Movies.module.css';

function TvSeries() {
  const [tvLod, setTvLod] = useState(true);
  const [otherTvLod, setOtherTvLod] = useState(true);

  const [tvSeries, setTvSeries] = useState([]);
  const [otherTvSeries, setOtherTvSeries] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNmI5YjM0MjNlYTlhNTk0ZjhkNWNhOWVjMTQxM2FkOSIsInN1YiI6IjY2NWQ5ZGQ0MTZkMmZhNjk2ZWRkODBlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.72BwyMmykV_qZqil2csMYEAPjT3pCjoPyOg1wiW4Kv4',
    },
  };

  const getTvSeries = async () => {
    const json = await (
      await fetch(
        'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=ko-KR&page=1&sort_by=popularity.desc&with_origin_country=KR&with_watch_providers=providers%3A8',
        options
      )
    ).json();
    setTvSeries(json.results);
    setTvLod(false);
  };

  const getOtherTvSeries = async () => {
    const json = await (
      await fetch(
        'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=ko-KR&page=1&sort_by=popularity.desc&with_watch_providers=providers%3A8',
        options
      )
    ).json();
    setOtherTvSeries(json.results);
    setOtherTvLod(false);
  };

  useEffect(() => {
    getTvSeries();
    getOtherTvSeries();
  }, []);
  return (
    <div>
      {tvLod || otherTvLod ? (
        <h1 className={style.loding}>
          <div className={style.lodingIcon}>
            <i class="fa-solid fa-spinner fa-2xl"></i>
          </div>
        </h1>
      ) : (
        <div className={style}>
          <h1 className={style.subtitle}>인기 콘텐츠</h1>
          <Xscroll
            content={tvSeries.map((tv) => (
              <MediaItem
                key={tv.id}
                id={tv.id}
                coverImg={tv.poster_path}
                title={tv.name}
                popularity={tv.popularity}
                content={'tv'}
              />
            ))}
          />

          <h1 className={style.subtitle}>다른 나라 인기 콘텐츠</h1>
          <Xscroll
            content={otherTvSeries.map((tv) => (
              <MediaItem
                key={tv.id}
                id={tv.id}
                coverImg={tv.poster_path}
                title={tv.name}
                popularity={tv.popularity}
                content={'tv'}
              />
            ))}
          />
        </div>
      )}
    </div>
  );
}

export default TvSeries;
