import { motion } from 'framer-motion'
import { HiHeart } from 'react-icons/hi'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="py-12 px-6 md:px-16 lg:px-32 border-t border-primary/20">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center space-y-6"
                >
                    {/* Logo/Name */}
                    <motion.h3
                        className="text-3xl font-heading font-bold gradient-text"
                        whileHover={{ scale: 1.05 }}
                    >
                        Mahalakshmi
                    </motion.h3>

                    {/* Tagline */}
                    <p className="text-lg text-textSecondary max-w-2xl mx-auto italic">
                        "Designs that connect, communicate, and make an impact."
                    </p>

                    {/* Quick Links */}
                    <div className="flex flex-wrap justify-center gap-6 text-textSecondary">
                        <a
                            href="#hero"
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#hero')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="hover:text-primary transition-colors duration-300"
                        >
                            Home
                        </a>
                        <a
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="hover:text-primary transition-colors duration-300"
                        >
                            About
                        </a>
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="hover:text-primary transition-colors duration-300"
                        >
                            Projects
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault()
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                            }}
                            className="hover:text-primary transition-colors duration-300"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Divider */}
                    <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />

                    {/* Copyright */}
                    <div className="text-textSecondary text-sm">
                        <p className="flex items-center justify-center gap-2">
                            © {currentYear} Mahalakshmi. Crafted with{' '}
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <HiHeart className="text-red-500" />
                            </motion.span>{' '}
                            in Tamil Nadu.
                        </p>
                    </div>

                    {/* Back to Top Button */}
                    <motion.button
                        onClick={() => {
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }}
                        whileHover={{ y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass-strong px-6 py-3 rounded-xl text-textPrimary hover:text-primary transition-all duration-300 inline-flex items-center gap-2"
                    >
                        ↑ Back to Top
                    </motion.button>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
