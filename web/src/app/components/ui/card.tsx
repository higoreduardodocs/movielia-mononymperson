import Image from './image'

export default function Card() {
  return (
    <div className="mx-3 my-1.5 cursor-pointer">
      <Image />
      <p className="py-1.5 line-clamp-2">
        Indiana Jones e A Relíquia do Destino
      </p>
    </div>
  )
}
