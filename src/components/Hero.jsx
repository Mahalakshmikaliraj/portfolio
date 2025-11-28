import { motion, AnimatePresence } from 'framer-motion'
import { HiDownload, HiMail, HiEye } from 'react-icons/hi'
import { useState, useEffect } from 'react'

const Hero = () => {
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0)
    const sentences = [
        "Turning ideas into intuitive, aesthetic digital experiences.",
        "Crafting pixel-perfect interfaces with passion.",
        "Blending creativity with technical precision.",
        "Designing for impact, usability, and emotion."
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    const [isNameHovered, setIsNameHovered] = useState(false)

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-4 sm:px-6 md:px-16 lg:px-32"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 right-20 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.15, 0.1, 0.15],
                    }}
                    transition={{ duration: 8, repeat: Infinity, delay: 1 }}
                />
            </div>

            <div className="container mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
                {/* Left Side - Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-4 md:space-y-6"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <p className="text-primary font-button text-sm sm:text-base md:text-lg mb-2">Hello, I'm</p>

                        {/* Name with Enhanced Hover Effect */}
                        <div className="relative inline-block">
                            <motion.h1
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-3 md:mb-4 cursor-pointer relative z-10"
                                onHoverStart={() => setIsNameHovered(true)}
                                onHoverEnd={() => setIsNameHovered(false)}
                                animate={{
                                    color: isNameHovered ? ['#4A90E2', '#FF6B6B', '#4ECDC4', '#FFE66D', '#FF9F43', '#A855F7', '#EC4899'] : '#FFFFFF',
                                    scale: isNameHovered ? [1, 1.1, 1.05, 1.1, 1] : 1,
                                    rotateX: isNameHovered ? [0, 10, -10, 5, 0] : 0,
                                    rotateY: isNameHovered ? [0, -10, 10, -5, 0] : 0,
                                    y: isNameHovered ? [0, -10, -5, -10, 0] : 0,
                                    textShadow: isNameHovered
                                        ? [
                                            '0 0 20px rgba(74, 144, 226, 0.8)',
                                            '0 0 40px rgba(255, 107, 107, 0.8)',
                                            '0 0 30px rgba(78, 205, 196, 0.8)',
                                            '0 0 50px rgba(255, 230, 109, 0.8)',
                                            '0 0 20px rgba(168, 85, 247, 0.8)'
                                        ]
                                        : '0 0 0 rgba(0, 0, 0, 0)',
                                    transition: {
                                        duration: 2.5,
                                        repeat: isNameHovered ? Infinity : 0,
                                        ease: 'easeInOut'
                                    }
                                }}
                                style={{
                                    background: isNameHovered ? 'none' : 'linear-gradient(135deg, #4A90E2 0%, #67B8FF 100%)',
                                    WebkitBackgroundClip: isNameHovered ? 'none' : 'text',
                                    WebkitTextFillColor: isNameHovered ? 'currentColor' : 'transparent',
                                    transformStyle: 'preserve-3d',
                                    perspective: '1000px'
                                }}
                                whileHover={{
                                    filter: [
                                        'hue-rotate(0deg)',
                                        'hue-rotate(360deg)'
                                    ]
                                }}
                            >
                                Mahalakshmi
                            </motion.h1>

                            {/* Floating Emojis - Hidden on mobile */}
                            <AnimatePresence>
                                {isNameHovered && (
                                    <>
                                        <motion.span
                                            initial={{ opacity: 0, y: 0, x: 0, scale: 0, rotate: 0 }}
                                            animate={{
                                                opacity: [0, 1, 1, 0],
                                                y: [-50, -60, -70],
                                                x: [-30, -20, -40],
                                                scale: [0, 1.5, 1, 0.5],
                                                rotate: [0, 180, 360]
                                            }}
                                            exit={{ opacity: 0, scale: 0 }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="absolute -top-4 -left-4 text-3xl sm:text-4xl md:text-5xl pointer-events-none hidden sm:block"
                                        >
                                            ✨
                                        </motion.span>
                                        <motion.span
                                            initial={{ opacity: 0, y: 0, x: 0, scale: 0 }}
                                            animate={{
                                                opacity: [0, 1, 1, 0],
                                                y: [-60, -80, -100],
                                                x: [20, 30, 10],
                                                scale: [0, 1.8, 1.2, 0.8],
                                                rotate: [0, -180, -360]
                                            }}
                                            exit={{ opacity: 0 }}
                                            transition={{ delay: 0.2, duration: 2, repeat: Infinity }}
                                            className="absolute -top-8 right-1/2 text-3xl sm:text-4xl md:text-5xl pointer-events-none hidden sm:block"
                                        >
                                            🎨
                                        </motion.span>
                                        <motion.span
                                            initial={{ opacity: 0, y: 0, x: 0, scale: 0 }}
                                            animate={{
                                                opacity: [0, 1, 1, 0],
                                                y: [-40, -50, -60],
                                                x: [40, 60, 50],
                                                scale: [0, 1.6, 1.1, 0.6],
                                                rotate: [0, 90, 180]
                                            }}
                                            exit={{ opacity: 0 }}
                                            transition={{ delay: 0.4, duration: 2, repeat: Infinity }}
                                            className="absolute -top-2 -right-8 text-3xl sm:text-4xl md:text-5xl pointer-events-none hidden sm:block"
                                        >
                                            💻
                                        </motion.span>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-textPrimary mb-3 md:mb-4">
                            UI/UX & Graphic Designer
                        </h2>

                        {/* Dynamic Typewriter Effect */}
                        <div className="h-24 sm:h-20 md:h-16">
                            <AnimatePresence mode='wait'>
                                <motion.p
                                    key={currentSentenceIndex}
                                    className="text-base sm:text-lg md:text-xl text-textSecondary italic"
                                    initial="hidden"
                                    animate="visible"
                                    exit="hidden"
                                    variants={{
                                        hidden: { opacity: 0, y: 10 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                staggerChildren: 0.03
                                            }
                                        }
                                    }}
                                >
                                    {sentences[currentSentenceIndex].split("").map((char, index) => (
                                        <motion.span key={index} variants={{
                                            hidden: { opacity: 0, y: 5 },
                                            visible: { opacity: 1, y: 0 }
                                        }}>
                                            {char}
                                        </motion.span>
                                    ))}
                                </motion.p>
                            </AnimatePresence>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-sm sm:text-base md:text-lg text-textSecondary leading-relaxed max-w-xl"
                    >
                        "I design interfaces that speak the brand's story — blending usability,
                        emotion, and visual harmony."
                    </motion.p>

                    {/* CTA Buttons - Responsive Stack */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 w-full"
                    >
                        <motion.a
                            href="#projects"
                            className="glass-strong px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-button text-textPrimary flex items-center justify-center gap-2 glow-hover transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            <HiEye className="text-lg sm:text-xl" />
                            View Projects
                        </motion.a>

                        <motion.a
                            href="/resume.pdf"
                            download
                            className="bg-primary hover:bg-opacity-90 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-button text-dark flex items-center justify-center gap-2 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <HiDownload className="text-lg sm:text-xl" />
                            Download Resume
                        </motion.a>

                        <motion.a
                            href="#contact"
                            className="border-2 border-primary hover:bg-primary hover:text-dark px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-button text-textPrimary flex items-center justify-center gap-2 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                            whileHover={{ scale: 1.03, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                        >
                            <HiMail className="text-lg sm:text-xl" />
                            Hire Me
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Right Side - Visual Element - Hidden on mobile/tablet */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative h-[400px] md:h-[500px] hidden md:flex items-center justify-center"
                >
                    <div className="glass-strong p-6 md:p-8 rounded-3xl w-full h-full flex items-center justify-center">
                        <motion.div
                            className="text-center space-y-4 md:space-y-6"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <div className="w-40 h-40 md:w-48 md:h-48 mx-auto bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                                <span className="text-5xl md:text-6xl">🎨</span>
                            </div>
                            <div className="space-y-2 flex flex-wrap justify-center gap-2">
                                <motion.div
                                    className="glass px-3 py-1.5 md:px-4 md:py-2 rounded-lg inline-block"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <p className="text-primary font-button text-sm md:text-base">Figma</p>
                                </motion.div>
                                <motion.div
                                    className="glass px-3 py-1.5 md:px-4 md:py-2 rounded-lg inline-block"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <p className="text-primary font-button text-sm md:text-base">Adobe XD</p>
                                </motion.div>
                                <motion.div
                                    className="glass px-3 py-1.5 md:px-4 md:py-2 rounded-lg inline-block"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <p className="text-primary font-button text-sm md:text-base">Blender</p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary rounded-full flex justify-center pt-2">
                    <motion.div
                        className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero
