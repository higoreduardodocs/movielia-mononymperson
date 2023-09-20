import {
  usePopulars,
  useTheaters,
  useTopRated,
  useWeekTrending,
} from '../../hooks/use-films'
import { mergeFilms } from '../../utils/format'
import Card from '../components/ui/card'
import Container from '../components/ui/container'
import Heading from '../components/ui/heading'
import Hero from '../components/ui/hero'
import NoResults from '../components/ui/no-results'
import Slider from '../components/ui/slider'

export default function Home() {
  const trendings = mergeFilms(useWeekTrending('movie'), useWeekTrending('tv'))
  const theaters = useTheaters()
  const populars = mergeFilms(usePopulars('movie'), usePopulars('tv'))
  const topRatedTv = useTopRated('tv')
  const topRatedMovie = useTopRated('movie')

  return (
    <Container>
      {/* HERO */}
      <Slider className="slick-hero" autoplay={true}>
        {() =>
          !trendings?.length ? (
            <NoResults />
          ) : (
            trendings.map((item) => <Hero key={item.id} film={item} />)
          )
        }
      </Slider>
      {/* THEATERS */}
      <Heading title="Em cartaz" />
      <Slider isMovieCard>
        {() =>
          !theaters?.length ? (
            <NoResults />
          ) : (
            theaters.map((item) => (
              <Card key={item.id} src={item.coverPath} title={item.title} />
            ))
          )
        }
      </Slider>
      {/* POPULAR */}
      <Heading title="Populares" />
      <Slider isMovieCard>
        {() =>
          !populars?.length ? (
            <NoResults />
          ) : (
            populars.map((item) => (
              <Card key={item.id} src={item.coverPath} title={item.title} />
            ))
          )
        }
      </Slider>
      {/* TOP RATED TV */}
      <Heading title="Melhores da TV" />
      <Slider isMovieCard>
        {() =>
          !topRatedTv?.length ? (
            <NoResults />
          ) : (
            topRatedTv.map((item) => (
              <Card key={item.id} src={item.coverPath} title={item.title} />
            ))
          )
        }
      </Slider>
      {/* TOP RATEDMOVIE */}
      <Heading title="Melhores filmes" />
      <Slider isMovieCard>
        {() =>
          !topRatedMovie?.length ? (
            <NoResults />
          ) : (
            topRatedMovie.map((item) => (
              <Card key={item.id} src={item.coverPath} title={item.title} />
            ))
          )
        }
      </Slider>
    </Container>
  )
}
