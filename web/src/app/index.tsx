import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Web from './layouts/web'
import Home from './pages/home'
import Film from './pages/filme'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Web />}>
          <Route path="" element={<Home />} />

          <Route path="movies/:id" element={<Film />} />
        </Route>
      </Routes>
    </Router>
  )
}
