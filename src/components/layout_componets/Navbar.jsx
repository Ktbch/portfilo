import { useEffect, useState } from 'react'
import { IoSunny, IoMoon, IoExit } from 'react-icons/io5'
import { IoMenu, IoClose } from 'react-icons/io5'
export const Navbar = () => {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('mode')) || false)
    const [menu, setMenu] = useState(false)

    useEffect(() => {
        localStorage.setItem('mode', JSON.stringify(darkMode))
        if (darkMode) document.documentElement.classList.add('dark')
        if (!darkMode) document.documentElement.classList.remove('dark')
    })

    const active = 'cursor-pointer pb-3  border-color2 rounded-sm border-b-4 transition-all'
    const inActive = 'cursor-pointer pb-3  border-color2 rounded-sm hover:border-b-4 transition-all'

    return (
        <nav className=" sm:shadow-none  lg:shadow-sm  m-auto py-10 px-10 flex justify-between items-center dark:sahdow-none ">
            <div className='text-color3 dark:text-color2 cursor-pointer'>
                DESIGNS.IO
            </div>
            <ul className={`${!menu ? 'hidden translate-x-full' : 'flex translate-x-0'} absolute shadow-md bg-lightMode1-bgColorWhite dark:bg-color1 dark:shadow-color1  w-full py-10 top-[10%] left-[30%] flex flex-col mt-10 space-y-10 lg:translate-x-0 lg:py-0 lg:shadow-none lg:space-y-0 lg:top-0 lg:left-0 lg:relative lg:mt-0  lg:flex lg:flex-row  max-w-xl m-auto  items-center lg:space-x-20 justify-between transition-all`}>
                <li><a href='' className='cursor-pointer pb-3  border-color2 rounded-sm hover:border-b-4 transition-all'>Home</a></li>
                <li><a href='' className='cursor-pointer pb-3  border-color2 rounded-sm hover:border-b-4 transition-all' >Contact</a></li>
                <li><a href='' className='cursor-pointer pb-3  border-color2 rounded-sm hover:border-b-4 transition-all'>About Me</a></li>
                <li><a href='' className='cursor-pointer pb-3  border-color2 rounded-sm hover:border-b-4 transition-all'>Projects</a></li>
            </ul>

            <div className='flex space-x-4 items-center'>
                <button onClick={(() => { setDarkMode(!darkMode) })}>
                    {darkMode ? <IoSunny size={20} /> : <IoMoon size={20} />}
                </button>
                <div className='lg:hidden' onClick={(() => { setMenu(!menu) })} >
                    {menu ? <IoClose size={30} className='transition-all' /> : <IoMenu size={30} className='cursor-pointer transition-all' />}
                </div>
            </div>



        </nav >
    )
}
