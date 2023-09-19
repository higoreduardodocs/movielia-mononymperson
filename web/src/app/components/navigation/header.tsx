import { Link, useLocation } from 'react-router-dom'
import { IoIosSearch } from 'react-icons/io'

import { mergeClassName } from '../../../utils/format'
import Container from '../ui/container'

const MENU = `px-1.5 py-1 hover:bg-primary rounded-md`
const MENU_ACTIVE = `bg-primary`

export default function Header() {
  const location = useLocation()
  const getClassName = (path: string) => {
    if (path === location.pathname) return mergeClassName(MENU, MENU_ACTIVE)
    return MENU
  }
  return (
    <header className="bg-header sticky top-0 z-20">
      <Container className="flex items-center justify-between gap-3 text-white">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-semibold text-2xl">
            Movie
          </Link>
          <div className="mobile:fixed mobile:bottom-0 mobile:left-0 mobile:right-0 flex items-center mobile:justify-center gap-1.5 mobile:w-full mobile:bg-header mobile:py-3">
            <Link to="/movies" className={getClassName('movies')}>Filmes</Link>
            <Link to="/tv" className={getClassName('tv')}>TV</Link>
          </div>
        </div>

        <div className="flex items-center p-1 border-b-[1.5px] border-white focus:focus-within:border-primary">
          <input
            type="text" placeholder="Procurando por..."
            className="bg-transparent outline-none" />
          <IoIosSearch size={18} />
        </div>
      </Container>
    </header>
  )
}
