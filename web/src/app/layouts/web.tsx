import { Outlet } from 'react-router-dom'

import Header from '../components/navigation/header'
import Footer from '../components/navigation/footer'

export default function Web() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
