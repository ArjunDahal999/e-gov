import { NavLink } from "react-router-dom"


const navLinks = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Register",
        link: "/register"
    },
    {
        name: "Login",
        link: "/login"
    },
    {
        name: "Online  license",
        link: "license-register"
    }
]

const BottomNav = () =>
{
    return (
        <>
            <nav className=" bg-blue-500/60 py-3 md:px-40 px-2 space-x-6">
                {navLinks.map((e, id) => (
                    <NavLink key={id} to={e.link}>
                        {({ isActive }) => (
                            <span className={isActive ? " text-white font-bold" : ""}>{e.name}</span>
                        )}
                    </NavLink>
                ))}
            </nav>
        </>
    )
}

export default BottomNav