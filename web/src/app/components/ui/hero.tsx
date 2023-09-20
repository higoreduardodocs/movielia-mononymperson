import { MdPlayCircleOutline } from 'react-icons/md'

import { IFilm } from '../../../types/film-types'
import { imageSrc } from '../../../utils/format'
import Image from './image'

interface IProps {
  film: IFilm
}

export default function Hero(props: IProps) {
  return (
    <div className="relative flex items-center h-[400px] cursor-pointer">
      <div className="absolute left-0 right-0 top-0 bottom-0">
        <div className="overlay-slick-hero" />
        <Image src={imageSrc(props.film.coverPath)!} className="rounded-none" />
        <div className="overlay-film-cover" />     
      </div>

      <div className="flex flex-col gap-3 items-start mx-[55px] max-w-[50%] z-10">
        <p className="text-xl md:line-clamp-1">{props.film.title}</p>
        <p className="text-sm line-clamp-3">{props.film.description}</p>
        <button className="flex items-center gap-3 px-3 py-1.5 bg-primary rounded-md">
          <MdPlayCircleOutline size={18} /><span>Assistir trailler</span>
        </button>
      </div>
    </div>
  )
}
