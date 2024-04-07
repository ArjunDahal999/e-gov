import Navbar from '@/components/navbar/navbar'
import { Outlet } from 'react-router-dom'

const MainLayout = () =>
{
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default MainLayout