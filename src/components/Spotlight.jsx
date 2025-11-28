import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Spotlight = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener('mousemove', updateMousePosition)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
        }
    }, [])

    return (
        <motion.div
            className="fixed top-0 left-0 w-[800px] h-[800px] bg-primary rounded-full pointer-events-none z-0 mix-blend-soft-light opacity-20 blur-[100px]"
            animate={{
                x: mousePosition.x - 400,
                y: mousePosition.y - 400,
            }}
            transition={{ type: 'tween', ease: 'backOut', duration: 0.5 }}
        />
    )
}

export default Spotlight
