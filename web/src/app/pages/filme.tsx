import Card from '../components/ui/card'
import Container from '../components/ui/container'
import Heading from '../components/ui/heading'
import Image from '../components/ui/image'
import Loading from '../components/ui/loading'
import Slider from '../components/ui/slider'

export default function Film() {
  return (
    <>
      <div className="p-6">
        <Loading />
      </div>
      {/* COVER */}
      <div className="h-[300px] relative">
        <div className="overlay-film-cover" />
        <Image className="rounded-none" />
      </div>
      {/* POSTER */}
      <Container className="flex">
        <Image className="w-[200px] h-[300px] min-w-[200px]" />
        <div className="flex flex-col gap-3 px-3">
          <p className="text-xl line-clamp-1">
            Indiana Jones e A Relíquia do Destino
          </p>
          <ul className="flex items-center gap-3">
            <li className="text-sm px-3 py-1.5 bg-primary rounded-lg">Aventura</li>
            <li className="text-sm px-3 py-1.5 bg-primary rounded-lg">Suspense</li>
            <li className="text-sm px-3 py-1.5 bg-primary rounded-lg">Drama</li>
            <li className="text-sm px-3 py-1.5 bg-primary rounded-lg">Ação</li>
          </ul>
          <p className="text-sm line-clamp-3 opacity-90">
            Encontrando-se em uma nova era, aproximando-se da aposentadoria,
            Indy luta para se encaixar em um mundo que parece tê-lo superado.
            Mas quando os tentáculos de um mal muito familiar retornam na forma
            de um antigo rival, Indy deve colocar seu chapéu e pegar seu chicote
            mais uma vez para garantir que um antigo e poderoso artefato não
            caia nas mãos erradas.
          </p>
        </div>
      </Container>
      {/* CAST */}
      <Heading title="Elenco" />
      <Container>
        <div className="flex items-center justify-center flex-wrap gap-3">
          {Array.from({ length: 8 }, (_, k) => k + 1).map((item) => 
            <div className="flex-shrink-0 w-[200px]">
              <Card key={item}>
                <p className="font-semibold">Harrison Ford</p>
                <p className="text-sm opacity-90">Indiana Jones</p>
              </Card>
            </div>
          )}
        </div>
      </Container>
      {/* TRAILLERS */}
      <Heading title="Traillers" />
      <Container className="overflow-x-auto scrollbar-thin scrollbar-thumb-primary scrollbar-track-header">
        <div className="flex items-center gap-3">
          {Array.from({ length: 8 }, (_, k) => k + 1).map((item) => 
            <div className="flex-shrink-0 w-[200px]">
              <Card key={item} />
            </div>
          )}
        </div>
      </Container>
      {/* SEASONS */}
      <Heading title="Temporadas" />
      <Container>
        <Slider slidesToShow={2} slidesToScroll={2} swipe={false}>
          {() => Array.from({ length: 8 }, (_, k) => k + 1).map((item) => 
            <Card key={item} className="h-[300px]" />
          )}
        </Slider>
      </Container>
      {/* RECOMMENDATIONS */}
      <Heading title="Recomendados" />
      <Container>
        <Slider isMovieCard>
          {() => Array.from({ length: 8 }, (_, k) => k + 1).map((item) => 
            <Card key={item} className="h-[300px]" />
          )}
        </Slider>
      </Container>
    </>
  )
}
