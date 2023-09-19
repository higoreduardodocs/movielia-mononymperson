import Card from '../components/ui/card'
import Container from '../components/ui/container'
import Heading from '../components/ui/heading'
import Hero from '../components/ui/hero'
import NoResults from '../components/ui/no-results'
import Slider from '../components/ui/slider'

export default function Home() {
  return (
    <Container>
      {/* HERO */}
      <Slider>{(onSwipe: boolean) => <NoResults />}</Slider>
      <Slider className="slick-hero">
        {(onSwipe: boolean) =>
          Array.from({ length: 4 }, (_, k) => k + 1).map((item) => (
            <Hero key={item} />
          ))
        }
      </Slider>
      {/* THEATERS */}
      <Heading title="Em cartaz" />
      <Slider isMovieCard>
        {() =>
          Array.from({ length: 15 }, (_, k) => k + 1).map((item) => (
            <Card key={item} />
          ))
        }
      </Slider>
      {/* POPULAR */}
      <Heading title="Populares" />
      <Slider isMovieCard>
        {() =>
          Array.from({ length: 15 }, (_, k) => k + 1).map((item) => (
            <Card key={item} />
          ))
        }
      </Slider>
      {/* TOP RATED TV */}
      <Heading title="Melhores da TV" />
      <Slider isMovieCard>
        {() =>
          Array.from({ length: 15 }, (_, k) => k + 1).map((item) => (
            <Card key={item} />
          ))
        }
      </Slider>
      {/* TOP RATEDMOVIE */}
      <Heading title="Melhores filmes" />
      <Slider isMovieCard>
        {() =>
          Array.from({ length: 15 }, (_, k) => k + 1).map((item) => (
            <Card key={item} />
          ))
        }
      </Slider>
    </Container>
  )
}
