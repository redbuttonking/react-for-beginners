import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';

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
        <h1>detail loding</h1>
      ) : (
        <div>
          <img alt="movie_cover_img" src={movie.large_cover_image} />
          <h1>
            {movie.title} _ {movie.year}
          </h1>
          <ul>
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
