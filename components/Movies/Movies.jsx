import Movie from "../Movie/Movie";
import s from "./Movies.module.css";
const Movies = ({ movies }) => {
  return (
    <>
      <div className={s.moviesHead}>
        <h2 className={s.featured}>Featured</h2>
        <h3>View More</h3>
      </div>
      <div className={s.movies}>
        {movies.map((movie) => (
          <Movie
            key={movie._id}
            name={movie.name}
            genre={movie.genre}
            duration={movie.duration}
            views={movie.views}
            coverImage={movie.coverImage}
            id={movie._id}
          />
        ))}
      </div>
    </>
  );
};

export default Movies;
