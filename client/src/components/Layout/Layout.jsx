import { Outlet } from 'react-router'
import { NavBar } from '../Navbar/NavBar'
import { Footer } from '../Footer/Footer'

export const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}