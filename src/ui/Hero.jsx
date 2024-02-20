import { useEffect, useState } from "react"
import { Animation } from "../components/Animation";


export const Hero = () => {
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
        <section className="max-w-7xl mx-auto my-auto pt-5">
            <Animation initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                    ease: "linear",
                    duration: 0.5,
                    x: { duration: 0.5 }
                }}>
                <div className="flex space-x-20 items-center mt-20">
                    <div className=" lg:top-0 lg:left-0 lg:relative xs:absolute xs:top-[10%] xs:left-[10%] sm:absolute  sm:top-[10%] sm:left-[23.5%] md:left-[30%]">
                        <div className="flex flex-col gap-5 sm:items-center lg:items-start" >
                            <h3 className="sm:text-5xl md:text-6xl lg:text-8xl text-white font-bold">I DESIGN </h3>
                            <div className="flex flex-col lg:flex-row items-center gap-5">
                                <h3 className="text-white text-6xl font-bold lg:text-8xl sm:text-5xl md:text-6xl">YOUR </h3> <Animation initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        ease: "linear",
                                        duration: 0.5,
                                        x: { duration: 0.5 }
                                    }}
                                ><p className="italic font-cursive text-[#58fff5] font-light sm:text-4xl lg:text-5xl">{carousel}</p>
                                </Animation>
                            </div>
                            <p className="lg:relative lg:top-0 lg:left-0 sm:absolute sm:top-[120%] md:absolute md:top-[110%] sm:tracking-wide md:left-[20] lg:text-xl lg:tracking-tight">
                                my name is olatubosun samuel an artist with ten years
                                of experience in graphics and two years experience as a
                                desingner i am passionate and hardworking indivudual who is
                                able to complete task at my best. as a desingner i am also
                                passionate about the user first in any of my design
                            </p>
                            <div className="flex flex-col lg:relative lg:top-0 lg:left-0 lg:flex-col sm:absolute gap-3 sm:top-[310%] sm:flex-row">
                                <div className="">
                                    <h3 className="tracking-tighter sm:text-sm sm:text-[#58fff5] lg:text-white flex">OLATUBOSUN SAMUEL</h3>
                                    <p className="tracking-tighter sm:text-sm  font-cursive lg:text-[#58fff5] ">ui/ux and graphic desingner</p>
                                </div>
                                <div className=" ">
                                    <button className="p-3 w-[200%] sm:w-[150%] sm:text-sm rounded-xl bg-gradient-to-r from-[#58fff5] to-[#2489e2] shadow-2xl shadow-[#58fff5] ">Hire Me</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-white hidden lg:flex" >
                        Image
                    </div>
                </div>
            </Animation>
        </section >
    )
}
