import Trailers from "../Trailers/Trailers";
import s from "./Hero.module.css";
import { Rating } from "react-simple-star-rating";
import { toHsandMins } from "../../utils/utils";

const Hero = ({ trailers, hero }) => {
  let { name, genre, duration, rating, coverImage, trailerImage } = hero;

  return (
    <div className={s.hero}>
      <div className={s.bgEffects}>
        <div className={s.bg}>
          <img src={coverImage} alt="" />
        </div>

        <div>
          <h1>{name}</h1>
          <div className={s.stars}>
            <Rating
              initialValue={parseFloat(rating)}
              fillColor="#FED530"
              emptyColor="#998639"
              readonly="true"
              allowHalfIcon
            />
          </div>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            ab adipisci inventore optio error provident ex quam aspernatur! Odit
            vitae fuga voluptate assumenda excepturi praesentium qui nisi natus,
            earum obcaecati.
          </p>
          <h4>Genre: {genre}</h4>
          <h4>Duration: {toHsandMins(duration)}</h4>
          <h4>Ratings: {rating}</h4>
          <div className={s.cta}>Watch Now</div>
        </div>
        <Trailers trailers={trailers} />
      </div>
    </div>
  );
};

export default Hero;
