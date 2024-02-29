import { useState } from "react"
import { Navbar } from "../components/layout_componets"
import { FeaturedProjects } from "../ui/FeaturedProjects"
import { Hero } from "../ui/Hero"
import { Footer } from "../layout/Footer"

export const Profilio = ({ isScrolled }) => {
    const [menu, setMenu] = useState(false)
    return (
        <>
            <Navbar isScrolled={isScrolled} menu={menu} setMenu={setMenu} />
            <Hero isScrolled={isScrolled} menu={menu} />
            <FeaturedProjects isScrolled={isScrolled} menu={menu} />
            <Footer />
        </>
    )
}
