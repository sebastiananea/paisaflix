import { useRouter } from 'next/router'
import Container from '../../components/Container'
import fetch from 'isomorphic-fetch'
import Hero from '../../components/Hero/Hero'

const MovieDetail = ({ movie }) => {
  const router = useRouter()
  const { id } = router.query
  return (
    <Container>
      <Hero hero={movie} trailers={movie.trailerImage} />
    </Container>
  )
}

MovieDetail.getInitialProps = async (ctx) => {
  const res = await fetch(
    `https://paisa-challange.herokuapp.com/api/v1/paisaflix/movies/${ctx.query.id}`
  )
  const resJSON = await res.json()

  return { movie: resJSON.data }
}

export default MovieDetail
