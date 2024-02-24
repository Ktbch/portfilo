import { Card } from "../components/Card"
import VisualDesign from '../assets/VisualDesign.jpg'
import { IoMdArrowDropleft } from 'react-icons/io'

export const FeaturedProjects = () => {
    const projects = [
        {
            projectName: 'Spagroni Package Design',
            img: VisualDesign,
            brand: 'Package Design',
            year: 2024,
            more: 'Learn More'
        },
        {
            projectName: 'Alliance Bc Brand Design',
            img: VisualDesign,
            brand: 'Brand Identity Design',
            year: 2024,
            more: 'Learn More'
        },
        {
            projectName: 'Aloha Body Cream Mock Up',
            img: VisualDesign,
            brand: 'Aloha Body Cream ',
            year: 2024,
            more: 'Learn More'
        },
        {
            projectName: 'Spagroni Recipe Mobile App Design',
            img: VisualDesign,
            brand: 'Spagroni Recipe App ',
            year: 2024,
            more: 'Learn More'
        },
        {
            projectName: 'Email Landing Page',
            subHeading: 'Kosic Fit',
            img: VisualDesign,
            brand: 'Aloha Body Cream ',
            year: 2024,
            more: 'Learn More'
        },
    ]
    return (
        <section className="max-w-7xl mx-auto mt-10 py-20 px-10">
            <div className="flex flex-col items-center flex-wrap space-y-10">
                <h3 className="text-xl md:text-2xl lg:text-3xl dark:text-lightMode4-bgColorGray border-b-4 pb-4 rounded-md border-color3  dark:border-color2">Featured Projects</h3>
                <h3 className="pt-16 text-xl md:text-3xl lg:text-4xl">Grapics Design Projects</h3>
                <p className=" pt-10 text-md lg:text-lg tracking-tight text-center">
                    <blockquote>
                        My Graphics Design Encompasses Visually Engaging Flyers
                        And Cohesive Package Design, Ensuring A Consistent Brand Identity
                        Across Platforms. With Eye-Catching Graphics And Strategic
                        Messaging, Your Design Captivates Audiences And Effectively
                        Communicates Your Brand's Message, Fostering Engagement
                        And Recongnition in The Digital Lanscape.
                    </blockquote>
                </p>
                <Card >
                    <img src={VisualDesign} alt="" className="w-full lg:w-full lg:h-[500px]" />
                </Card>

                {projects.map((projex) => {
                    return (
                        <>
                            <h3 className="text-center sm:text-md lg:text-lg">{projex.projectName}</h3>
                            <Card>
                                <img src={projex.img} className="w-full lg:w-full lg:h-[500px]" />
                            </Card>

                        </>
                    )
                })}

            </div>
        </section>
    )
}
