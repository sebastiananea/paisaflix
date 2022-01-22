import Container from "../components/Container";
import Movies from "../components/Movies/Movies";
import fetch from "isomorphic-fetch";
import Link from "next/link";
import Trailers from "../components/Trailers/Trailers";
import Hero from "../components/Hero/Hero";

const Index = ({ movies, trailers, hero }) => {
  return (
    <div
      className="heroContainer"
      // style={{
      //   backgroundImage: `url(${hero.coverImage})`,
      // }}
    >
      <div className="bgEffects">
        <div className="bg">
          <img src={hero.coverImage} alt="" />
        </div>
      </div>
      <Container>
        <Hero trailers={trailers} hero={hero} />
        <Movies movies={movies} />
      </Container>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch(
    "https://paisa-challange.herokuapp.com/api/v1/paisaflix/movies/"
  );
  const resJSON = await res.json();

  const resTrailers = await fetch(
    "https://paisa-challange.herokuapp.com/api/v1/paisaflix/trailers"
  );
  const resTrailersJSON = await resTrailers.json();

  const resHero = await fetch(
    "https://paisa-challange.herokuapp.com/api/v1/paisaflix/hero"
  );
  const resHeroJSON = await resHero.json();

  return {
    movies: resJSON.data,
    trailers: resTrailersJSON.data,
    hero: resHeroJSON.data,
  };
};
export default Index;
