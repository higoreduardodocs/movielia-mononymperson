import Container from '../components/ui/container'
import Heading from '../components/ui/heading'
import Image from '../components/ui/image'

export default function Season() {
  return (
    <>
      {/* COVER */}
      <div className="relative h-[300px]">
        <div className="overlay-film-cover" />
        <Image className="rounded-none" />
      </div>

      {/* POSTER */}
      <Container className="flex gap-3">
        <Image className="w-[150px]" />
        <div className="flex flex-col items-start gap-3">
          <p className="text-xl line-clamp-1">
            Indiana Jones e A Relíquia do Destino
          </p>
          <div className="flex items-center gap-3">
            <p className="text-sm opacity-90">29/06/2023</p>
            <p className="text-sm opacity-90">&#8226;10 Episódios</p>
          </div>
        </div>
      </Container>
      {/* EPISODES */}
      <Heading title="Episódios" />
      <Container>
        {Array.from({ length: 10 }, (_, k) => k + 1).map((item) => (
          <div key={item} className="flex items-stretch gap-3 px-3 py-1.5 rounded-md cursor-pointer hover:bg-primary">
            <Image className="w-[300px] min-w-[300px]" />
            <div>
              <p className="text-lg truncate">
                {item}. Indiana Jones e A Relíquia do Destino
              </p>
              <p className="text-sm line-clamp-5">
                Encontrando-se em uma nova era, aproximando-se da aposentadoria,
                Indy luta para se encaixar em um mundo que parece tê-lo
                superado. Mas quando os tentáculos de um mal muito familiar
                retornam na forma de um antigo rival, Indy deve colocar seu
                chapéu e pegar seu chicote mais uma vez para garantir que um
                antigo e poderoso artefato não caia nas mãos erradas.
              </p>
              <p className="text-sm opacity-90">29/06/2023</p>
            </div>
          </div>
        ))}
      </Container>
    </>
  )
}
