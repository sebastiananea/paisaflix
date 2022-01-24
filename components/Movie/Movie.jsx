import Link from "next/link";
import s from "./Movie.module.css";
import { toHsandMins, viewsToK } from "../../utils/utils";

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
              <div className={s.spans}>
                <span className={s.durationSpan}>
                  <img src="/Clock.png" alt="clock" />
                  {toHsandMins(duration)}
                </span>{" "}
                <span className={s.durationSpan}>
                  <img src="Eye.png" alt="eye" />
                  {viewsToK(views)}
                </span>
              </div>
              <h2 className={s.name}>{name}</h2>
            </div>
          </div>
        </div>

        <img className={s.movieImg} src={coverImage} />
      </div>
    </Link>
  );
};

export default Movie;
