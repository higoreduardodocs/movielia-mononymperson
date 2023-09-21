import Card from '../components/ui/card'
import Container from '../components/ui/container'
import Heading from '../components/ui/heading'
import Pagination from '../components/ui/pagination'

export default function Search() {
  return (
    <>
      <div className="relative h-[120px]">
        <div className="overlay-film-cover" />
        <div className="h-full w-full bg-primary" />
      </div>
      <Heading title="Pesquisa" />
      <Pagination />
      <Container className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {Array.from({ length: 15 }, (_, k) => k + 1).map((item) => (
          <Card key={item} src="" />
        ))}
      </Container>
      <Pagination />
    </>
  )
}
