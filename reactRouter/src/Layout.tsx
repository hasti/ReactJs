import { Outlet } from 'react-router-dom'
import { Header, Footer } from './components/Index'

const Layout = () => {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )


}
export default Layout