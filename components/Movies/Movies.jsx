import Movie from "../Movie/Movie";
import s from "./Movies.module.css";
const Movies = ({ movies }) => {
  return (
    <div className={s.movies}>
      {movies.map((movie) => (
        <Movie
          name={movie.name}
          genre={movie.genre}
          duration={movie.duration}
          views={movie.views}
          coverImage={movie.coverImage}
          id={movie._id}
        />
      ))}
    </div>
  );
};

export default Movies;
