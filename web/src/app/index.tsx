import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Web from './layouts/web'
import Home from './pages/home'
import Film from './pages/film'
import Search from './pages/search'
import Season from './pages/season'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Web />}>
          <Route path="" element={<Home />} />

          <Route path="/movies" element={<Search />} />
          <Route path="/tv" element={<Search />} />
          <Route path="/search" element={<Search />} />

          <Route path="movies/:id" element={<Film />} />
          <Route path="tv/:id" element={<Film />} />

          <Route path="/tv/:id/season/:seasonNumber" element={<Season />} />
        </Route>
      </Routes>
    </Router>
  )
}
