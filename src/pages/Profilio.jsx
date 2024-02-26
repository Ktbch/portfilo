import { Navbar } from "../components/layout_componets"
import { FeaturedProjects } from "../ui/FeaturedProjects"
import { Hero } from "../ui/Hero"

export const Profilio = ({ isScrolled }) => {
    return (
        <>
            <Navbar isScrolled={isScrolled} />
            <Hero isScrolled={isScrolled} />
            <FeaturedProjects isScrolled={isScrolled} />
        </>
    )
}
