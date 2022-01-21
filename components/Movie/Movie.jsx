import Link from "next/link";
import s from "./Movie.module.css";

const Movie = ({ name, genre, duration, views, coverImage, id }) => {
  return (
    <Link key={id} href={`/movies/${id}`}>
      <div className={s.movieCard}>
        <div className={s.content}>
          <h2 className={s.name}>{name}</h2>
        </div>

        <img src={coverImage} />
      </div>
    </Link>
  );
};

export default Movie;
