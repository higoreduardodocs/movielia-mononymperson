import { MdPlayCircleOutline } from 'react-icons/md'
import Image from './image'

export default function Hero() {
  return (
    <div className="relative flex items-center h-[400px] cursor-pointer">
      <div className="absolute left-0 right-0 top-0 bottom-0">
        <div className="overlay-slick-hero" />
        <Image />
        <div className="overlay-film-cover" />     
      </div>

      <div className="flex flex-col gap-3 items-start mx-[55px] max-w-[50%] z-10">
        <p className="text-xl md:line-clamp-1">
          Indiana Jones e A Relíquia do Destino
        </p>
        <p className="text-sm line-clamp-3">
          Encontrando-se em uma nova era, aproximando-se da aposentadoria, Indy
          luta para se encaixar em um mundo que parece tê-lo superado. Mas
          quando os tentáculos de um mal muito familiar retornam na forma de um
          antigo rival, Indy deve colocar seu chapéu e pegar seu chicote mais
          uma vez para garantir que um antigo e poderoso artefato não caia nas
          mãos erradas.
        </p>
        <button className="flex items-center gap-3 px-3 py-1.5 bg-primary rounded-md">
          <MdPlayCircleOutline size={18} /><span>Assistir trailler</span>
        </button>
      </div>
    </div>
  )
}
