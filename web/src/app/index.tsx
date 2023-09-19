import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Web from './layouts/web'
import Home from './pages/home'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Web />}>
          <Route path="" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  )
}
