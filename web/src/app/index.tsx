import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Web from './layouts/web'
import Home from './pages/home'
import Film from './pages/film'
import Search from './pages/search'
import Season from './pages/season'
import NotFound from './pages/not-found'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Web />}>
          <Route path="" element={<Home />} />

          <Route path="/movies" element={<Search type="movie" />} />
          <Route path="/tv" element={<Search type="tv" />} />
          <Route path="/search" element={<Search type="search" />} />
          <Route path="/list/:listTitle" element={<Search type="list" />} />

          <Route path="movie/:id" element={<Film mediaType="movie" />} />
          <Route path="tv/:id" element={<Film mediaType="tv" />} />

          <Route path="/tv/:id/season/:seasonNumber" element={<Season />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}
