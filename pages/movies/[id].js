import { useRouter } from "next/router";
import Container from "../../components/Container";
import fetch from "isomorphic-fetch";

const MovieDetail = ({ movie }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Container>
      <h1>{movie.name}</h1>
      <img src={movie.coverImage} />
    </Container>
  );
};

MovieDetail.getInitialProps = async (ctx) => {
  const res = await fetch(
    `https://paisa-challange.herokuapp.com/api/v1/paisaflix/movies/${ctx.query.id}`
  );
  const resJSON = await res.json();

  return { movie: resJSON.data };
};

export default MovieDetail;
