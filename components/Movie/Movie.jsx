import Link from "next/link";
import s from "./Movie.module.css";

const Movie = ({ name, genre, duration, views, coverImage, id }) => {
  return (
    <Link key={id} href={`/movies/${id}`}>
      <div className={s.movieCard}>
        <div className={s.contentOpacity}>
          <div className={s.content}>
            <div className={s.genre}>
              <span>{genre}</span>
            </div>
            <div className={s.bot}>
              <div>{duration}</div> <div>{views}</div>
              <h2 className={s.name}>{name}</h2>
            </div>
          </div>
        </div>

        <img src={coverImage} />
      </div>
    </Link>
  );
};

export default Movie;
