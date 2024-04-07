import { NavLink } from "react-router-dom"

const BottomNav = () =>
{
    return (
        <>
            <nav className=" bg-blue-500/60 py-3 px-40">
                <NavLink to="/">
                    {({ isActive }) => (
                        <span className={isActive ? " text-white font-bold" : ""}>Home</span>
                    )}
                </NavLink>
            </nav>
        </>
    )
}

export default BottomNav