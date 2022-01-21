import s from "./Trailers.module.css";

const Trailers = ({ trailers }) => {
  return (
    <div>
      <h2 className={s.head}>Trailers</h2>
      <div className={s.trailers}>
        {trailers.map((trailer, index) => (
          <div className={s.trailerCard}>
            <h3>0{index + 1}</h3>
            <img key={trailer._id} src={trailer.trailerImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trailers;
