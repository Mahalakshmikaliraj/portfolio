import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Cursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [trail, setTrail] = useState([])
    const [isHovering, setIsHovering] = useState(false)

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY })

            // Add point to trail
            setTrail(prev => [
                { x: e.clientX, y: e.clientY, id: Date.now() + Math.random() },
                ...prev.slice(0, 20)
            ])
        }

        const handleMouseOver = (e) => {
            if (
                e.target.tagName === 'A' ||
                e.target.tagName === 'BUTTON' ||
                e.target.tagName === 'INPUT' ||
                e.target.tagName === 'TEXTAREA' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true)
            } else {
                setIsHovering(false)
            }
        }

        window.addEventListener('mousemove', updateMousePosition)
        window.addEventListener('mouseover', handleMouseOver)

        return () => {
            window.removeEventListener('mousemove', updateMousePosition)
            window.removeEventListener('mouseover', handleMouseOver)
        }
    }, [])

    return (
        <>
            {/* Main Star Cursor with Sparkle */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 12,
                    y: mousePosition.y - 12,
                    scale: isHovering ? 1.5 : 1,
                    rotate: [0, 360],
                }}
                transition={{
                    x: { type: 'spring', stiffness: 500, damping: 28 },
                    y: { type: 'spring', stiffness: 500, damping: 28 },
                    scale: { type: 'spring', stiffness: 300, damping: 20 },
                    rotate: { duration: 3, repeat: Infinity, ease: 'linear' }
                }}
            >
                {/* Star Shape with gradient */}
                <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 1 }} />
                            <stop offset="50%" style={{ stopColor: '#FFF', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: '#FFE66D', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                        fill="url(#starGradient)"
                        filter="drop-shadow(0 0 4px rgba(255, 215, 0, 0.8))" />
                </svg>
            </motion.div>

            {/* Breathing/Sparkle Glow Effect */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            >
                <div className="w-10 h-10 bg-yellow-300 rounded-full blur-xl"
                    style={{
                        background: 'radial-gradient(circle, rgba(255,215,0,0.6) 0%, rgba(255,230,109,0.3) 50%, transparent 100%)'
                    }}
                />
            </motion.div>

            {/* Star Trail Particles - Fixed positioning */}
            {trail.map((point, index) => (
                <motion.div
                    key={point.id}
                    className="fixed pointer-events-none z-[9997]"
                    style={{
                        left: point.x - 3,
                        top: point.y - 3,
                    }}
                    initial={{
                        opacity: 1,
                        scale: 1
                    }}
                    animate={{
                        opacity: 0,
                        scale: 0
                    }}
                    transition={{
                        duration: 0.6,
                        ease: 'easeOut'
                    }}
                >
                    {/* Sparkle Star */}
                    <svg width="6" height="6" viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3 0L3.5 2.5L6 3L3.5 3.5L3 6L2.5 3.5L0 3L2.5 2.5L3 0Z"
                            fill="#FFD700"
                            filter="drop-shadow(0 0 2px rgba(255, 215, 0, 0.8))"
                        />
                    </svg>
                </motion.div>
            ))}

            {/* Additional Sparkle Stars (Random) */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9996]"
                animate={{
                    x: mousePosition.x + 10,
                    y: mousePosition.y - 10,
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            >
                <svg width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 0L4.5 3.5L8 4L4.5 4.5L4 8L3.5 4.5L0 4L3.5 3.5L4 0Z" fill="#FFF" />
                </svg>
            </motion.div>

            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9996]"
                animate={{
                    x: mousePosition.x - 15,
                    y: mousePosition.y + 15,
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                }}
                transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.3
                }}
            >
                <svg width="6" height="6" viewBox="0 0 6 6" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 0L3.5 2.5L6 3L3.5 3.5L3 6L2.5 3.5L0 3L2.5 2.5L3 0Z" fill="#FFE66D" />
                </svg>
            </motion.div>
        </>
    )
}

export default Cursor
