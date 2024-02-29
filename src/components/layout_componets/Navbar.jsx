import { useEffect, useState } from 'react'
import { IoSunny, IoMoon, IoExit } from 'react-icons/io5'
import { IoMenu, IoClose } from 'react-icons/io5'
export const Navbar = ({ menu, setMenu }) => {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('mode')) || false)

    useEffect(() => {
        localStorage.setItem('mode', JSON.stringify(darkMode))
        if (darkMode) document.documentElement.classList.add('dark')
        if (!darkMode) document.documentElement.classList.remove('dark')
    })

    const active = 'cursor-pointer pb-3  border-color2 rounded-sm border-b-4 transition-all'
    const inActive = 'cursor-pointer pb-3  border-color2 rounded-sm hover:border-b-4 transition-all'

    return (
        <nav className=" shadow-none  lg:shadow-sm  m-auto py-8 px-8 flex space-x-96  items-center dark:sahdow-none ">
            <div className='text-color3 dark:text-color2 cursor-pointer' id={'top'}>
                DESIGNS.IO
            </div>
            <div className={` ${!menu ? 'hidden translate-x-full transition-all' : 'absolute translate-x-0  transition-all lg:relative '}  top-0.5 w-full py-20 pb-10 h-screen right-[0.4%] bg-gradient-to-tr from-slate-300 to-white dark:from-color1 dark:to-slate-600 lg:block lg:translate-x-0 lg:right-[0] lg:w-auto  lg:h-auto lg:relative lg:p-0 lg:bg-none`}>
                <ul className={` flex flex-col space-y-16   lg:translate-x-0 lg:py-0 lg:shadow-none lg:space-y-0 lg:top-0 lg:left-0 lg:relative lg:mt-0  lg:flex lg:flex-row  max-w-xl m-auto  items-center lg:space-x-20 justify-between transition-all`}>
                    <li><a href='#home' className='cursor-pointer pb-3  border-color2 rounded-sm hover:border-b-4 transition-all'>Home</a></li>
                    <li><a href='' className='cursor-pointer pb-3  border-color2 rounded-sm hover:border-b-4 transition-all' >Contact</a></li>
                    <li><a href='' className='cursor-pointer pb-3  border-color2 rounded-sm hover:border-b-4 transition-all'>About Me</a></li>
                    <li><a href='#projects' className='cursor-pointer pb-3  border-color2 rounded-sm hover:border-b-4 transition-all'>Projects</a></li>
                </ul>
            </div>

            {/* {Todo Add footer} */}
            <div className='fixed right-[10%] flex space-x-4 items-center'>
                <button onClick={(() => { setDarkMode(!darkMode) })}>
                    {darkMode ? <IoSunny size={20} /> : <IoMoon size={20} />}
                </button>
                <div className='lg:hidden transition-all' onClick={(() => { setMenu(!menu) })} >
                    {menu ? <IoClose size={30} className=' cursor-pointer transition-all' /> : <IoMenu size={30} className='cursor-pointer transition-all' />}
                </div>
            </div>
        </nav >
    )
}