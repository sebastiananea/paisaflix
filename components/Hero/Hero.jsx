import Trailers from '../Trailers/Trailers'
import s from './Hero.module.css'

const Hero = ({ trailers, hero }) => {
  let { name, genre, duration, rating, coverImage, trailerImage } = hero

  //convertir minutos a horas y minutos
  const hours = Math.floor(duration / 60)
  const minutes = duration % 60
  duration = `${hours} hr ${minutes} minutes`

  return (
    <div className={s.hero}>
      <div className={s.bgEffects}>
        <div className={s.bg}>
          <img src={coverImage} alt='' />
        </div>

        <div>
          <h1>{name}</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            ab adipisci inventore optio error provident ex quam aspernatur! Odit
            vitae fuga voluptate assumenda excepturi praesentium qui nisi natus,
            earum obcaecati.
          </p>
          <h4>Genre: {genre}</h4>
          <h4>Duration: {duration}</h4>
          <h4>Ratings: {rating}</h4>
          <div className={s.cta}>Watch Now</div>
        </div>
        <Trailers trailers={trailers} />
      </div>
    </div>
  )
}

export default Hero
