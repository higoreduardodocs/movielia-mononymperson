import Card from '../components/ui/card'
import Container from '../components/ui/container'
import Heading from '../components/ui/heading'
import Pagination from '../components/ui/pagination'

export default function Search() {
  return (
    <>
      <div></div>
      <Heading title="Pesquisa" />
      <Pagination />
      <Container className="grid grid-cols-5">
        {Array.from({ length: 15 }, (_, k) => k + 1).map((item) => (
          <Card key={item} />
        ))}
      </Container>
      <Pagination />
    </>
  )
}
