import { Outlet } from 'react-router'
import { NavBar } from '../Navbar/NavBar'

export const Layout = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}