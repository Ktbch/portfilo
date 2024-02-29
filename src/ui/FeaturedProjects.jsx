import { Card } from "../components/Card"
import { imgs } from "../utils/Img"
import { IoArrowForward } from 'react-icons/io5'
import { useState } from "react"
export const FeaturedProjects = ({ isScrolled, menu }) => {
    const projects = [
        {
            id: 1,
            projectName: 'Spagroni Package Design',
            img: imgs.spagroni,
            brand: "Package Design",
            year: 2024,
            more: 'Learn More'
        },
        {
            id: 2,
            projectName: 'Alliance Bc Brand Design',
            img: imgs.Welcome,
            brand: 'Brand Identity Design',
            year: 2024,
            more: 'Learn More'
        },
        {
            id: 3,
            projectName: 'Aloha Body Cream Mock Up',
            img: imgs.bodyCream,
            brand: 'Aloha Body Cream ',
            year: 2024,
            more: 'Learn More'
        },
        {
            id: 4,
            projectName: 'Spagroni Recipe Mobile App Design',
            img: imgs.spagron1,
            brand: 'Spagroni Recipe App ',
            year: 2024,
            more: 'Learn More'
        },
        {
            id: 5,
            projectName: 'Email Landing Page',
            subHeading: 'Kosic Fit',
            img: imgs.Welcome,
            brand: 'Aloha Body Cream ',
            year: 2024,
            more: 'Learn More'
        },
    ]

    const [showText, setShowText] = useState(false)
    const project = document.querySelectorAll('.project_section')
    const intro = document.querySelectorAll('.intro')

    const onProjectObserve = (entries, observer) => {
        const [entry] = entries
        if (!entry.isIntersecting) return
        entry.target.classList.remove('section-hidden')
        entry.target.classList.remove('blur')
        observer.unobserve(entry.target)

    }

    const onIntroObserve = (entries, observer) => {
        const [entry] = entries
        if (!entry.isIntersecting) return
        entry.target.classList.remove('section-hidden')
        entry.target.classList.remove('blur')
        observer.unobserve(entry.target)
    }
    const ProjectObserver = new IntersectionObserver(onProjectObserve, { root: null, threshold: 0.8 })

    if (project) {
        project.forEach(pro => {
            pro.classList.add('blur')
            ProjectObserver.observe(pro)
        })
    }
    const introObserver = new IntersectionObserver(onIntroObserve, { root: null, threshold: 1 })

    if (intro) {
        intro.forEach(intros => {
            introObserver.observe(intros)
        })
    }
    // Todoo put this function in the right place refactor this code

    return (
        <section className={`${menu ? 'hidden lg:block' : 'block'} max-w-7xl mx-auto mt-10 py-20 px-10`}  >
            <div className="flex flex-col items-center flex-wrap gap-32 ">
                <h3 className="text-xl md:text-2xl lg:text-3xl dark:text-lightMode4-bgColorGray border-b-4 pb-4 rounded-md border-color2  dark:border-color3">Featured Projects</h3>
                <div className={`main flex flex-col items-center flex-wrap  space-y-10 transition-all`} id="design_projects">
                    <h3 className={` section-hidden intro pt-16 text-lg md:text-3xl lg:text-4xl tracking-tighter transition-transform`}>Grapics Design Projects</h3>
                    <p className={`  section-hidden intro pt-10 text-sm lg:text-lg tracking-tighter  sm:tracking-tight text-center transition-transform `}>
                        <p>
                            My Graphics Design Encompasses Visually Engaging Flyers
                            And Cohesive Package Design, Ensuring A Consistent Brand Identity
                            Across Platforms. With Eye-Catching Graphics And Strategic
                            Messaging, Your Design Captivates Audiences And Effectively
                            Communicates Your Brand's Message, Fostering Engagement
                            And Recongnition in The Digital Lanscape.
                        </p>
                    </p>
                    <Card >
                        <img src={imgs.Tech} alt="" className={`intro blur w-full lg:w-full lg:h-[500px] transition-all`} id='img' />
                    </Card>


                </div>

                {projects.map((projex) => {
                    return (
                        <div key={projex.id} id={projex.id} className={` project_section flex flex-col items-center  gap-6 transition-all`} >
                            <h3 className="text-center tracking-tight sm:tracking-normal text-sm lg:text-2xl border-b-2 border-color3 dark:border-color2 p-3 rounded-md">{projex.projectName}</h3>
                            {projex?.subHeading ? < p className="text-center">({projex.subHeading})</p> : ''}
                            <div className={`bg-transparent border-npne lg:border border-slate-300 dark:border-slate-600 p-3 lg:p-10 rounded-lg ${isScrolled ? 'fadeIn' : 'fadeOut'}`}>
                                <Card>
                                    <img src={projex.img} id='project' className=" w-full lg:w-full lg:h-[490px]" />
                                </Card>
                            </div>
                            <div className="flex flex-col md:flex-row gap-5 sm:gap-6 md:gap-7 items-center">
                                <p className="shadow-sm bg-transparent border-b-2 border-slate-400 tracking-tighter  text-xs p-2 md:text-sm md:p-2 rounded-md">{projex.brand}</p>
                                <p className="shadow-sm bg-transparent  text-xs p-2 md:text-sm md:p-2 rounded-md">{projex.year}</p>
                                <p className="flex items-center text-xs md:text-sm cursor-pointer gap-1  hover:text-color3 dark:hover:text-color2 transition-all">{projex.more} <IoArrowForward className="text-color3 dark:text-color2" /></p>
                                {/* Tooo Work on Samsung fold screens */}
                            </div>
                        </div>
                    )
                })}

            </div>



        </section >
    )
}
