import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Projects', href: '#projects' },
        { name: 'Style Guide', href: '#styleguide' },
        { name: 'Resume', href: '#resume' },
        { name: 'Contact', href: '#contact' },
    ]

    const scrollToSection = (e, href) => {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setMobileMenuOpen(false)
        }
    }

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-strong shadow-lg' : 'bg-transparent'}`}
        >
            <nav className="container mx-auto px-6 md:px-16 lg:px-32 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <motion.a
                        href="#hero"
                        onClick={(e) => scrollToSection(e, '#hero')}
                        className="text-2xl font-heading font-bold gradient-text"
                        whileHover={{ scale: 1.05 }}
                    >
                        Mahalakshmi
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="text-textPrimary hover:text-primary transition-colors duration-300"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -2 }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-textPrimary text-3xl"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <HiX /> : <HiMenu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <motion.div
                    initial={false}
                    animate={{
                        height: mobileMenuOpen ? 'auto' : 0,
                        opacity: mobileMenuOpen ? 1 : 0,
                    }}
                    className="md:hidden overflow-hidden"
                >
                    <div className="py-4 space-y-4">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="block text-textPrimary hover:text-primary transition-colors duration-300"
                                whileHover={{ x: 10 }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            </nav>
        </motion.header>
    )
}

export default Header
