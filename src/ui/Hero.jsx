import { useEffect, useState } from "react"
import { Animation } from "../components/Animation";


export const Hero = ({ menu }) => {
    const [carousel, setCarousel] = useState('Experience')


    useEffect(() => {
        const timer = setInterval(() => {
            setCarousel((prevCarousel) => {
                switch (prevCarousel) {
                    case 'Experience':
                        return 'Brand';
                    case 'Brand':
                        return 'Interface';
                    case 'Interface':
                        return 'Experience';
                    default:
                        return 'Experience'; // Reset to 'Experience' if unknown value
                }
            });
        }, 5000); // Change text every 5 seconds

        // Clear interval when component unmounts to prevent memory leaks
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={` ${menu ? 'hidden lg:block' : "block"} max-w-7xl mx-auto my-auto pt-5 pb-40 lg:border-b border-gray-300`}>
            <div className="container space-y-10 m-auto
            lg:flex lg:flex-row lg:mt-10 lg:space-x-10 items-center">
                <div className=" flex flex-col flex-wrap space-y-7 items-center lg:items-start">
                    <p className="text-4xl sm:text-5xl lg:text-7xl">I DESIGN</p>
                    <p className="flex  items-center gap-5 text-4xl sm:text-5xl lg:text-7xl transition-all">YOUR <span className=" hidden text-3xl sm:text-4xl lg:block lg:text-5xl font-cursive italic text-color3 dark:text-color2">{carousel}</span></p>
                    <p className=" lg:hidden text-3xl sm:text-4xl lg:text-5xl font-cursive italic text-color3 dark:text-color2">{carousel}</p>
                    <p className="text-center tracking-tighter lg:text-start">
                        <p>My name is olatubosun an artist with ten years of experience in graphics
                            And two years as ui/ux designer.</p>
                        <p>i am a passionate and hardworking individual who is able to complete task at my best.
                            As a designer i am also passionate about the user first in any design...</p>
                    </p>
                    <p className="pt-5 flex flex-col items-center gap-2 text-sm">OLATUBOSUN SAMUEL <span className="text-color3 text-cursive italic dark:text-color2">ui/ux and graphic designer</span></p>
                    <button className="p-5 rounded-md bg-gradient-to-tr from-color3 to-color2 dark:from-color2 dark:to-color3 hover:from-color2 hover:to-color3 dark:hover:from-color3 dark:hover:to-color2 focus:from-color2 focus:to-color3 dark:focus:from-color3 dark:focus:to-color2 transition-all">
                        Hire Me
                    </button>
                </div>
            </div>
        </section >
    )
}
