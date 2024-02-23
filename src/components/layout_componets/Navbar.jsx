import { IoSunny, IoMoon } from 'react-icons/io5'
export const Navbar = () => {
    return (
        <nav className=" container m-auto p-10 flex ">
            <ul className=" max-w-xl m-auto flex items-center space-x-20 justify-between">
                <li><a>Home</a></li>
                <li><a>Contact</a></li>
                <li><a>About Me</a></li>
                <li><a>Projects</a></li>
            </ul>
            <IoSunny />
            <IoMoon />
        </nav>
    )
}
