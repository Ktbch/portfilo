import { motion, useScroll } from 'framer-motion'
export const Animation = ({ children, initial = 0, animate = 0, transition }) => {
    useScroll()
    return (
        <motion.div
            initial
            animate
            transition
        >{children}</motion.div>
    )
}
