interface IProps {
  genders: number[]
}

export default function GenderList() {
  return (
    <ul className="flex flex-wrap items-center gap-1">
      <li className="text-sm p-1 bg-zinc-950 rounded-md">Aventura</li>
      <li className="text-sm p-1 bg-zinc-950 rounded-md">Suspense</li>
      <li className="text-sm p-1 bg-zinc-950 rounded-md">Drama</li>
      <li className="text-sm p-1 bg-zinc-950 rounded-md">Ação</li>
    </ul>
  )
}
