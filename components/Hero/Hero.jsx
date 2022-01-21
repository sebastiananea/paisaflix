import Trailers from "../Trailers/Trailers";
import s from "./Hero.module.css";
const Hero = ({ trailers }) => {
  return (
    <div className={s.hero}>
      <Trailers trailers={trailers} />
    </div>
  );
};

export default Hero;